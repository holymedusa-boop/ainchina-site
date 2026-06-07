#!/usr/bin/env bash
# check-site-daily.sh — 每天检查 www.ainchina.com 是否显示当天最新文章

set -euo pipefail

SITE_URL="https://www.ainchina.com/blog/"
TIMEOUT_SECONDS=30

# 获取今天的日期（多种格式）
TODAY_LONG=$(date -u +"%B %-d, %Y")   # "June 7, 2026"
TODAY_SHORT=$(date -u +"%b %-d, %Y") # "Jun 7, 2026"
TODAY_ISO=$(date -u +"%Y-%m-%d")      # "2026-06-07"

echo "📅 检查日期: ${TODAY_LONG} (${TODAY_ISO})"
echo "🌐 检查站点: ${SITE_URL}"

# 获取网站内容
HTML=$(curl -s --max-time "${TIMEOUT_SECONDS}" -L "${SITE_URL}" 2>/dev/null || true)

if [[ -z "$HTML" ]]; then
    echo "❌ 无法获取网站内容（网络错误或超时）"
    exit 1
fi

# 检查是否包含今天的日期（直接匹配）
FOUND=0
if echo "$HTML" | grep -qF "${TODAY_LONG}"; then
    echo "✅ 网站显示今天的文章 (${TODAY_LONG})"
    FOUND=1
elif echo "$HTML" | grep -qF "${TODAY_SHORT}"; then
    echo "✅ 网站显示今天的文章 (${TODAY_SHORT})"
    FOUND=1
fi

# 同时检查是否有今天的文章在 HTML 中（通过 JSON seed data）
if [[ $FOUND -eq 0 ]]; then
    # 尝试从 Next.js 的 seed data 中提取日期
    DATES=$(echo "$HTML" | grep -oE '"date":"[^"]+"' | head -10 || true)
    if echo "$DATES" | grep -qF "${TODAY_LONG}"; then
        echo "✅ 数据层包含今天的文章 (${TODAY_LONG})"
        FOUND=1
    fi
fi

# 备用方案：直接保存到临时文件再 grep
if [[ $FOUND -eq 0 ]]; then
    TMPFILE=$(mktemp)
    echo "$HTML" > "$TMPFILE"
    if grep -qF "${TODAY_LONG}" "$TMPFILE"; then
        echo "✅ 网站显示今天的文章 (${TODAY_LONG}) — 文件匹配"
        FOUND=1
    fi
    rm -f "$TMPFILE"
fi

if [[ $FOUND -eq 0 ]]; then
    echo "⚠️  网站未显示 ${TODAY_LONG} 的文章"
    echo ""
    echo "最近的文章日期:"
    echo "$HTML" | grep -oE '"date":"[^"]+"' | head -5 | sed 's/"date":"//;s/"$//' | sed 's/^/  - /' || true
    echo ""
    echo "可能的原因:"
    echo "  1. 今天的 cron 任务尚未运行（4:15 AM）"
    echo "  2. cron 任务运行失败"
    echo "  3. Vercel 构建或部署失败"
    echo "  4. 文章生成失败"
    exit 1
else
    echo "🎉 网站状态正常！"
    exit 0
fi
