"""Normalize common mono eyebrow / label patterns to type-label."""

from __future__ import annotations

import re
from pathlib import Path

# font-mono + tiny text sizes used as labels/eyebrows
PATTERNS = [
    (
        re.compile(
            r"\bfont-mono\s+text-\[(?:9|10|10\.5|11|11\.5)px\](?:\s+font-semibold)?\s+uppercase\s+tracking-\[[^\]]+\]"
        ),
        "type-label font-semibold uppercase tracking-[0.16em]",
    ),
    (
        re.compile(
            r"\bfont-mono\s+text-\[(?:9|10|10\.5|11|11\.5)px\](?:\s+sm:text-\[[^\]]+\])?(?:\s+font-semibold)?\s+uppercase\s+tracking-\[[^\]]+\]"
        ),
        "type-label font-semibold uppercase tracking-[0.16em]",
    ),
]


def transform(content: str) -> tuple[str, int]:
    count = 0
    for pattern, replacement in PATTERNS:
        content, n = pattern.subn(replacement, content)
        count += n
    return content, count


def main() -> None:
    total = 0
    for path in sorted(Path("src").rglob("*.tsx")):
        text = path.read_text(encoding="utf-8")
        new, n = transform(text)
        if n:
            path.write_text(new, encoding="utf-8")
            print(f"{n:3d}  {path}")
            total += n
    print("TOTAL", total)


if __name__ == "__main__":
    main()
