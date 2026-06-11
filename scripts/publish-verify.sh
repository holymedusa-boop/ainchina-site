#!/usr/bin/env bash
#
# publish-verify.sh — 文章发布完整验证流程
# 覆盖：推送前检查 → 推送后部署验证 → 线上内容验证
#
# Usage:
#   # 推送前验证（检查最新文章图片）
#   bash scripts/publish-verify.sh pre-push
#
#   # 推送后验证（检查 Vercel 部署 + 线上内容）
#   bash scripts/publish-verify.sh post-push [SLUG]
#
#   # 完整验证（pre + post，等待部署）
#   bash scripts/publish-verify.sh full
#

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
POSTS_DIR="$PROJECT_DIR/content/posts"
REPO="holymedusa-boop/ainchina-site"
BASE_URL="https://www.ainchina.com"
TIMEOUT=30
MAX_DEPLOY_WAIT=120  # 最多等待部署 120 秒

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

declare -i CHECKS_PASSED=0
declare -i CHECKS_FAILED=0

# ───────────────────────────────────────────────────────────────
# 工具函数
# ───────────────────────────────────────────────────────────────

log_pass() {
  echo -e "  ${GREEN}✓${NC} $1"
  CHECKS_PASSED+=1
}

log_fail() {
  echo -e "  ${RED}✗${NC} $1"
  CHECKS_FAILED+=1
}

log_warn() {
  echo -e "  ${YELLOW}⚠${NC} $1"
}

log_info() {
  echo "  ℹ $1"
}

get_latest_slug() {
  ls -t "$POSTS_DIR"/*.md 2>/dev/null | head -1 | xargs -I {} basename {} .md
}

# ───────────────────────────────────────────────────────────────
# Pre-Push: 验证最新文章的图片 URL
# ───────────────────────────────────────────────────────────────

verify_pre_push() {
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔍 Pre-Push: 验证最新文章的图片"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  local slug=$(get_latest_slug)
  if [[ -z "$slug" ]]; then
    log_fail "未找到文章文件"
    return 1
  fi

  local file="$POSTS_DIR/$slug.md"
  log_info "最新文章: $slug"

  # 1. 检查 hero image（兼容 image 和 heroImage 字段）
  local hero_url=$(grep -oP '^(heroImage|image):\s*\K[^ ]+' "$file" 2>/dev/null | head -1 | tr -d '"' || true)
  if [[ -n "$hero_url" && "$hero_url" == https://* ]]; then
    local status=$(curl -s -o /dev/null -I -w "%{http_code}" --max-time "$TIMEOUT" -L "$hero_url" 2>/dev/null || echo "000")
    if [[ "$status" == "200" ]]; then
      log_pass "Hero image: HTTP 200"
    else
      log_fail "Hero image: HTTP $status — $hero_url"
    fi
  else
    log_warn "未找到 heroImage/image 字段"
  fi

  # 2. 检查文章内所有 Unsplash 图片
  local urls=$(grep -oE 'https://images\.unsplash\.com/[^[:space:])"]+' "$file" 2>/dev/null || true)
  local total=0
  local failed=0

  while IFS= read -r url; do
    [[ -n "$url" ]] || continue
    total=$((total + 1))
    local status=$(curl -s -o /dev/null -I -w "%{http_code}" --max-time "$TIMEOUT" -L "$url" 2>/dev/null || echo "000")
    if [[ "$status" == "200" ]]; then
      : # 静默通过，避免输出太多
    else
      failed=$((failed + 1))
      log_fail "Inline image: HTTP $status — ${url:0:60}…"
    fi
  done <<< "$urls"

  if [[ $failed -eq 0 && $total -gt 0 ]]; then
    log_pass "所有 $total 个 inline 图片正常"
  fi

  # 3. 检查 metadata 是否已同步
  if grep -q "$slug" "$PROJECT_DIR/lib/posts-meta.js" 2>/dev/null; then
    log_pass "posts-meta.js 已包含 $slug"
  else
    log_fail "posts-meta.js 缺少 $slug — 请先运行 npm run sync-metadata"
  fi

  if grep -q "$slug" "$PROJECT_DIR/app/blog/[slug]/page.js" 2>/dev/null; then
    log_pass "page.js postMetadata 已包含 $slug"
  else
    log_fail "page.js postMetadata 缺少 $slug"
  fi

  echo ""
  if [[ $CHECKS_FAILED -gt 0 ]]; then
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}  ❌ Pre-push 验证失败，共 $CHECKS_FAILED 项错误${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo "  请修复以上问题后再推送。"
    exit 1
  else
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}  ✅ Pre-push 验证全部通过${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  fi
}

# ───────────────────────────────────────────────────────────────
# Post-Push: 等待 Vercel 部署并验证线上内容
# ───────────────────────────────────────────────────────────────

verify_post_push() {
  local slug="${1:-$(get_latest_slug)}"
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🚀 Post-Push: 验证 Vercel 部署和线上内容"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "检查文章: $slug"

  # 1. 等待 Vercel 部署完成
  echo ""
  echo "  ⏳ 等待 Vercel 部署..."
  local commit=$(cd "$PROJECT_DIR" && git rev-parse HEAD 2>/dev/null || echo "")
  if [[ -z "$commit" ]]; then
    log_warn "无法获取当前 commit hash，跳过部署状态检查"
  else
    local waited=0
    local state="pending"
    while [[ "$state" == "pending" && $waited -lt $MAX_DEPLOY_WAIT ]]; do
      state=$(curl -s "https://api.github.com/repos/$REPO/commits/$commit/status" 2>/dev/null | grep -o '"state": "[^"]*"' | head -1 | cut -d'"' -f4 || echo "unknown")
      if [[ "$state" == "pending" ]]; then
        echo "    ... 部署中 ($((waited))s)"
        sleep 10
        waited=$((waited + 10))
      fi
    done

    if [[ "$state" == "success" ]]; then
      log_pass "Vercel 部署成功 (等待 ${waited}s)"
    elif [[ "$state" == "failure" ]]; then
      log_fail "Vercel 部署失败 — 请检查 Vercel Dashboard"
      exit 1
    elif [[ "$state" == "pending" ]]; then
      log_warn "Vercel 部署仍在进行中 (${waited}s)，继续检查..."
    else
      log_warn "无法获取部署状态: $state"
    fi
  fi

  # 2. 等待 CDN 缓存刷新（至少 5 秒）
  echo ""
  echo "  ⏳ 等待 CDN 缓存..."
  sleep 5

  # 3. 检查文章页面内容和标题
  echo ""
  echo "  🔍 检查文章页面..."
  local article_url="$BASE_URL/blog/$slug/"
  local page_content=$(curl -s --max-time "$TIMEOUT" "$article_url" 2>/dev/null || echo "")

  if [[ -z "$page_content" ]]; then
    log_fail "文章页面返回空内容 — 可能 404 或超时"
  else
    local title=$(echo "$page_content" | grep -o '<h1[^>]*>.*</h1>' | head -1 | sed 's/<[^>]*>//g' || echo "")
    if [[ -n "$title" ]]; then
      log_pass "文章页面标题存在: ${title:0:50}…"
    else
      log_fail "文章页面未找到标题 — 可能渲染失败"
    fi

    # 检查页面是否包含文章正文（至少有一段文字）
    if echo "$page_content" | grep -q '<p style="font-size:16px'; then
      log_pass "文章正文段落已渲染"
    else
      log_fail "文章页面未找到正文段落"
    fi
  fi

  # 4. 检查首页是否显示文章
  echo ""
  echo "  🔍 检查首页列表..."
  local homepage=$(curl -s --max-time "$TIMEOUT" "$BASE_URL/" 2>/dev/null || echo "")
  local count=$(echo "$homepage" | grep -c "$slug" || echo "0")
  if [[ $count -ge 1 ]]; then
    log_pass "首页已显示文章 ($count 处匹配)"
  else
    log_fail "首页未找到文章 — 可能 metadata 未同步"
  fi

  # 5. 检查文章内 JSON-LD 是否只在 head 中（不在 body 中作为文本暴露）
  echo ""
  echo "  🔍 检查结构化数据..."
  local body_context_count=$(echo "$page_content" | grep -c '"@context":' || echo "0")
  if [[ "$body_context_count" -le 1 ]]; then
    log_pass "JSON-LD 位置正确（在 head 中）"
  else
    log_warn "JSON-LD 可能重复出现在 body 中 ($body_context_count 次)"
  fi

  echo ""
  if [[ $CHECKS_FAILED -gt 0 ]]; then
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}  ❌ Post-push 验证失败，共 $CHECKS_FAILED 项错误${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    exit 1
  else
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}  ✅ Post-push 验证全部通过${NC}"
    echo -e "${GREEN}  文章 URL: $article_url${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  fi
}

# ───────────────────────────────────────────────────────────────
# Full: 完整流程（pre + post，等待部署）
# ───────────────────────────────────────────────────────────────

verify_full() {
  verify_pre_push
  echo ""
  echo "  ⏳ 等待 5 秒后检查线上..."
  sleep 5
  verify_post_push
}

# ───────────────────────────────────────────────────────────────
# 主入口
# ───────────────────────────────────────────────────────────────

case "${1:-full}" in
  pre-push)
    verify_pre_push
    ;;
  post-push)
    verify_post_push "${2:-}"
    ;;
  full)
    verify_full
    ;;
  *)
    echo "Usage: $0 {pre-push|post-push|full} [slug]"
    echo ""
    echo "  pre-push    — 推送前验证：图片 URL、metadata 同步"
    echo "  post-push   — 推送后验证：Vercel 部署、线上内容、首页显示"
    echo "  full        — 完整流程（pre + post，含等待部署）"
    echo ""
    exit 1
    ;;
esac
