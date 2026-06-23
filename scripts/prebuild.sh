#!/bin/bash
set -e

echo "Running prebuild..."

# Always sync metadata and sitemap
npm run sync-metadata
npm run sitemap

# Only run image check locally (not on Vercel where it times out)
if [ -z "$VERCEL" ] && [ -z "$VERCEL_ENV" ]; then
  echo "Running image check (local only)..."
  npm run check-images
else
  echo "Skipping image check on Vercel (would timeout with 96 articles)"
fi

echo "Prebuild complete!"
