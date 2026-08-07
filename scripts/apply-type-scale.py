"""Apply brand type-* roles to h1–h4 className attributes."""

from __future__ import annotations

import re
from pathlib import Path

SIZE_TOKEN = re.compile(
    r"^(?:"
    r"font-heading|font-extrabold|font-bold|font-semibold|"
    r"text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)|"
    r"text-\[[^\]]+\]|"
    r"(?:sm|md|lg|xl|2xl):(?:text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)|text-\[[^\]]+\])|"
    r"leading-\[[^\]]+\]|leading-(?:none|tight|snug|normal|relaxed|loose)|"
    r"(?:sm|md|lg|xl|2xl):leading-\[[^\]]+\]|"
    r"(?:sm|md|lg|xl|2xl):leading-(?:none|tight|snug|normal|relaxed|loose)"
    r")$"
)

HEADING = re.compile(r"<(h[1-4])\s+className=([\"'])([^\"']*)\2")


def clean_classes(classes: str) -> str:
    kept = [p for p in classes.split() if not SIZE_TOKEN.match(p)]
    return " ".join(kept)


def transform(content: str) -> tuple[str, int]:
    count = 0

    def repl(m: re.Match[str]) -> str:
        nonlocal count
        tag, quote, classes = m.group(1), m.group(2), m.group(3)
        role = {"h1": "type-h1", "h2": "type-h2", "h3": "type-h3", "h4": "type-h4"}[tag]
        if re.search(r"\btype-h[1-4]\b", classes):
            return m.group(0)
        looks_styled = (
            "font-heading" in classes
            or "text-[" in classes
            or re.search(r"\btext-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)", classes)
        )
        if not looks_styled:
            return m.group(0)
        cleaned = clean_classes(classes)
        new_classes = re.sub(r"\s+", " ", f"{role} {cleaned}".strip())
        count += 1
        return f"<{tag} className={quote}{new_classes}{quote}"

    return HEADING.sub(repl, content), count


def main() -> None:
    total = 0
    root = Path("src")
    for path in sorted(root.rglob("*.tsx")):
        text = path.read_text(encoding="utf-8")
        new, n = transform(text)
        if n:
            path.write_text(new, encoding="utf-8")
            print(f"{n:3d}  {path}")
            total += n
    print("TOTAL", total)


if __name__ == "__main__":
    main()
