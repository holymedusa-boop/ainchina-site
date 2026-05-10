#!/usr/bin/env bash
# check-images.sh — 扫描 Markdown 文件中的 Unsplash 图片并检查可用性

POSTS_DIR="/root/.openclaw/workspace/ainchina-hello/content/posts"
TIMEOUT_SECONDS=15

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "🔍 开始检查 Unsplash 图片..."
shopt -s nullglob
files=("${POSTS_DIR}"/*.md)
if [[ ${#files[@]} -eq 0 ]]; then
    echo "⚠️  未找到 Markdown 文件"
    exit 1
fi
echo "   扫描文件数: ${#files[@]}"

# 收集所有 URL
total=0
failed=0

for f in "${files[@]}"; do
    urls=$(grep -oE 'https://images\.unsplash\.com/[^[:space:])\"]+' "$f" 2>/dev/null || true)
    [[ -z "$urls" ]] && continue
    
    while IFS= read -r url; do
        [[ -n "$url" ]] || continue
        total=$((total + 1))
        
        status=$(curl -s -o /dev/null -I -w "%{http_code}" \
            --max-time "${TIMEOUT_SECONDS}" \
            --retry 1 \
            -L \
            "$url" 2>/dev/null || echo "000")
        
        if [[ "$status" == "200" ]]; then
            echo -e "  ${GREEN}✓${NC} $(basename "$f") — ${url:0:60}…  (HTTP ${status})"
        else
            echo -e "  ${RED}✗${NC} $(basename "$f") — ${url:0:60}…  (HTTP ${status})"
            failed=$((failed + 1))
        fi
    done <<< "$urls"
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 检查报告"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  检查文件: ${#files[@]}"
echo "  检查图片: ${total}"
echo "  正常    : $(( total - failed ))"
echo "  异常    : ${failed}"

if [[ $failed -gt 0 ]]; then
    echo ""
    echo -e "${RED}⚠️  发现 ${failed} 个异常图片链接${NC}"
    exit 1
else
    echo ""
    echo -e "${GREEN}🎉 所有 Unsplash 图片链接正常！${NC}"
    exit 0
fi
