#!/bin/bash
# Pre-cron safety check - Run this at 4:10 AM before main cron

WORKSPACE="/root/.openclaw/workspace"
REPORTS_DIR="$WORKSPACE/ainchina-agents/reports"
DATE=$(date +%Y-%m-%d)

# Ensure reports directory exists but won't be committed
mkdir -p "$REPORTS_DIR"

# Create safety reminder
cat > "$REPORTS_DIR/.SAFETY_REMINDER" << 'EOF'
⚠️  SAFETY CHECKLIST FOR KIMI CLAW

Before writing article:
1. Read MEMORY.md (Language: ENGLISH ONLY)
2. Read DAILY_CHECKLIST.md
3. Check yesterday's article for mistakes

After writing article:
1. Verify: Title is English
2. Verify: 3 inline images added
3. Verify: Updated page.js (all 3 locations)
4. Verify: Git status shows NO reports/* files

Common mistakes to AVOID:
❌ Writing in Chinese
❌ Forgetting inline images
❌ Committing reports/
❌ Missing blog list update
EOF

echo "✅ Pre-cron check complete. Safety reminder created."
