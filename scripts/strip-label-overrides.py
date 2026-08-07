"""Remove responsive text-[…] overrides that fight type-label."""

from __future__ import annotations

import re
from pathlib import Path

TOKEN = re.compile(r"\s+(?:sm|md|lg|xl):text-\[[^\]]+\]")
CLASS_ATTR = re.compile(r"className=([\"'])([^\"']*)\1")
CLASS_TMPL = re.compile(r"className=\{\`([^\`]*)\`\}")


def main() -> None:
    total = 0
    for path in sorted(Path("src").rglob("*.tsx")):
        text = path.read_text(encoding="utf-8")
        count = 0

        def repl_attr(m: re.Match[str]) -> str:
            nonlocal count
            quote, body = m.group(1), m.group(2)
            if "type-label" not in body:
                return m.group(0)
            new, n = TOKEN.subn("", body)
            count += n
            return f"className={quote}{new}{quote}"

        def repl_tmpl(m: re.Match[str]) -> str:
            nonlocal count
            body = m.group(1)
            if "type-label" not in body:
                return m.group(0)
            new, n = TOKEN.subn("", body)
            count += n
            return "className={`" + new + "`}"

        new = CLASS_ATTR.sub(repl_attr, text)
        new = CLASS_TMPL.sub(repl_tmpl, new)
        if count:
            path.write_text(new, encoding="utf-8")
            print(f"{count:3d}  {path}")
            total += count
    print("TOTAL", total)


if __name__ == "__main__":
    main()
