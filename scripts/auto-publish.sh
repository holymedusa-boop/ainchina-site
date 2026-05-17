#!/bin/bash
# =============================================================================
# Auto-publish script for AI in China blog
# Automatically adds post metadata to posts-meta.js and page.js after article creation
# =============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="/root/.openclaw/workspace/ainchina-hello"
POSTS_DIR="$REPO_DIR/content/posts"
META_FILE="$REPO_DIR/lib/posts-meta.js"
PAGE_FILE="$REPO_DIR/app/blog/[slug]/page.js"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# -----------------------------------------------------------------------------
# Step 1: Find the latest post file
# -----------------------------------------------------------------------------
LATEST_FILE=$(ls -t "$POSTS_DIR"/*.md 2>/dev/null | head -1)
if [[ -z "$LATEST_FILE" ]]; then
    error "No .md files found in $POSTS_DIR"
fi

SLUG=$(basename "$LATEST_FILE" .md)
log "Latest post: $SLUG"

# -----------------------------------------------------------------------------
# Step 2: Extract metadata from the markdown file
# -----------------------------------------------------------------------------
TITLE=$(grep '^title:' "$LATEST_FILE" | head -1 | sed 's/^title: "\(.*\)"/\1/' | sed "s/^title: '\(.*\)'/\1/" | sed 's/^title: \(.*\)/\1/' | tr -d '"')
DATE=$(grep '^date:' "$LATEST_FILE" | head -1 | sed 's/^date: "\(.*\)"/\1/' | sed "s/^date: '\(.*\)'/\1/" | sed 's/^date: \(.*\)/\1/' | tr -d '"')
CATEGORY=$(grep '^category:' "$LATEST_FILE" | head -1 | sed 's/^category: "\(.*\)"/\1/' | sed "s/^category: '\(.*\)'/\1/" | sed 's/^category: \(.*\)/\1/' | tr -d '"')
READTIME=$(grep '^readTime:' "$LATEST_FILE" | head -1 | sed 's/^readTime: "\(.*\)"/\1/' | sed "s/^readTime: '\(.*\)'/\1/" | sed 's/^readTime: \(.*\)/\1/' | tr -d '"')

# Extract excerpt from first paragraph after frontmatter
EXTRACT=$(sed -n '/^# /,/^## /p' "$LATEST_FILE" | head -3 | grep -v '^#' | grep -v '^!' | grep -v '^$' | head -1 | sed 's/^\*//;s/\*$//' | sed 's/"/\\"/g' | cut -c1-200)

if [[ -z "$TITLE" || -z "$DATE" || -z "$CATEGORY" ]]; then
    error "Failed to extract required metadata from $LATEST_FILE"
fi

# Default readTime if not found
[[ -z "$READTIME" ]] && READTIME="16 min read"

# Default excerpt if not found
[[ -z "$EXTRACT" ]] && EXTRACT="Analysis of $TITLE"

log "Title: $TITLE"
log "Date: $DATE"
log "Category: $CATEGORY"
log "ReadTime: $READTIME"

# -----------------------------------------------------------------------------
# Step 3: Check if already exists in posts-meta.js
# -----------------------------------------------------------------------------
if grep -q "'${SLUG}'" "$META_FILE" 2>/dev/null || grep -q "\"${SLUG}\"" "$META_FILE" 2>/dev/null; then
    warn "Post '$SLUG' already exists in posts-meta.js — skipping"
else
    log "Adding to posts-meta.js..."
    
    # Create temp file for new entry
    NEW_ENTRY=$(cat <<EOF
  {
    slug: '${SLUG}',
    title: "${TITLE}",
    category: '${CATEGORY}',
    excerpt: "${EXTRACT}",
    date: '${DATE}',
    readTime: '${READTIME}'
  },
EOF
)
    
    # Insert after "const allPosts = ["
    awk -v entry="$NEW_ENTRY" '
        /const allPosts = \[/ {
            print
            print entry
            next
        }
        { print }
    ' "$META_FILE" > "$META_FILE.tmp" && mv "$META_FILE.tmp" "$META_FILE"
    
    log "✅ Added to posts-meta.js"
fi

# -----------------------------------------------------------------------------
# Step 4: Check if already exists in page.js postMetadata
# -----------------------------------------------------------------------------
if grep -q "'${SLUG}':" "$PAGE_FILE" 2>/dev/null || grep -q "\"${SLUG}\":" "$PAGE_FILE" 2>/dev/null; then
    warn "Post '$SLUG' already exists in page.js postMetadata — skipping"
else
    log "Adding to page.js postMetadata..."
    
    # Generate SEO metadata
    META_TITLE=$(echo "$TITLE" | cut -c1-60)
    META_DESC=$(echo "$EXTRACT" | cut -c1-160)
    KEYWORDS="${CATEGORY}, China AI, ${SLUG//-/ }, DeepSeek, Kimi, AI technology"
    
    # Create temp file for new entry
    NEW_META=$(cat <<EOF
  '${SLUG}': {
    metaTitle: "${META_TITLE}",
    metaDescription: "${META_DESC}",
    keywords: '${KEYWORDS}',
  },
EOF
)
    
    # Insert after "const postMetadata = {"
    awk -v entry="$NEW_META" '
        /const postMetadata = \{/ {
            print
            print entry
            next
        }
        { print }
    ' "$PAGE_FILE" > "$PAGE_FILE.tmp" && mv "$PAGE_FILE.tmp" "$PAGE_FILE"
    
    log "✅ Added to page.js postMetadata"
fi

# -----------------------------------------------------------------------------
# Step 5: Generate sitemap
# -----------------------------------------------------------------------------
log "Generating sitemap..."
cd "$REPO_DIR"
npm run sitemap 2>&1 | tail -5

# -----------------------------------------------------------------------------
# Step 6: Build
# -----------------------------------------------------------------------------
log "Building..."
npm run build 2>&1 | tail -10

# -----------------------------------------------------------------------------
# Step 7: Git commit and push
# -----------------------------------------------------------------------------
log "Git operations..."
cd "$REPO_DIR"
git add -A
git commit -m "auto: publish $SLUG" || warn "Nothing to commit"
git push origin main

# -----------------------------------------------------------------------------
# Step 8: Verify deployment
# -----------------------------------------------------------------------------
log "Verifying deployment..."
sleep 45
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.ainchina.com/blog/${SLUG}/")
if [[ "$HTTP_STATUS" == "200" ]]; then
    log "✅ Article live: https://www.ainchina.com/blog/${SLUG}/"
else
    warn "Article returned HTTP $HTTP_STATUS — may need more time to deploy"
fi

HOME_COUNT=$(curl -s https://www.ainchina.com/ | grep -c "$SLUG" || true)
if [[ "$HOME_COUNT" -gt 0 ]]; then
    log "✅ Homepage shows article ($HOME_COUNT references)"
else
    warn "Article not found on homepage yet"
fi

log "Done!"
