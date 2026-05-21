#!/usr/bin/env bash
# 给 src/content/docs 下所有教程 .md 文件添加 2 位数字前缀
# URL 由 content.config.ts 中的 generateId 自动剥离前缀，保持不变
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DOCS_DIR="$ROOT/src/content/docs"

process_dir() {
  local dir="$1"
  local abs="$DOCS_DIR/$dir"
  [ -d "$abs" ] || return 0

  echo ">>> 处理目录: $dir"
  for f in "$abs"/*.md; do
    [ -e "$f" ] || continue
    local base
    base="$(basename "$f")"

    # 已经带 2 位数字前缀则跳过
    if [[ "$base" =~ ^[0-9]{2}- ]]; then
      echo "  [skip] $base 已有序号前缀"
      continue
    fi

    # 从 frontmatter 抽取 sidebar.order
    local order
    order="$(awk '
      /^---[[:space:]]*$/ { fm = !fm; next }
      fm && /^sidebar:/ { in_sb=1; next }
      in_sb && /^[[:space:]]+order:/ { gsub(/[^0-9]/,"",$0); print; exit }
      fm && /^[^[:space:]]/ { in_sb=0 }
    ' "$f")"

    if [ -z "$order" ]; then
      echo "  [warn] $base 未找到 sidebar.order，跳过"
      continue
    fi

    local padded
    printf -v padded "%02d" "$order"
    local new_name="${padded}-${base}"
    local new_path="$abs/$new_name"

    if [ -e "$new_path" ]; then
      echo "  [warn] 目标文件已存在: $new_name，跳过"
      continue
    fi

    git mv "$f" "$new_path" 2>/dev/null || mv "$f" "$new_path"
    echo "  $base  ->  $new_name"
  done
}

for prefix in "" "zh/"; do
  for level in beginner intermediate advanced; do
    process_dir "${prefix}${level}"
  done
done

echo ""
echo "✅ 完成"
