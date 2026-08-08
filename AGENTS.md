<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repository purpose
- NEBCO Nepal marketing website built with Next.js 16 App Router.
- Page content is layout-driven and assembled from reusable section components.

## Key conventions
- `src/app` contains the app router pages and layout.
- `src/app/layout.tsx` defines site fonts, header, footer, and page shell.
- `src/app/globals.css` contains design tokens and global styles.
- `src/components/layout` holds navigation and site chrome.
- `src/components/sections` holds page sections used by routed pages.
- `src/components/ui` holds reusable UI primitives and illustrations.
- Path alias `@/*` maps to `./src/*` in `tsconfig.json`.
- Use server components by default; add `"use client"` only when necessary.
- Tailwind CSS v4 is configured through `postcss.config.mjs` with `@tailwindcss/postcss`.

## Build and dev commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Behavior guidance for AI agents
- Preserve the existing page structure and route naming.
- Prefer editing existing section components instead of creating new page bones.
- Keep design-focused changes minimal and consistent with the provided PDF/content notes.
- Do not assume standard Next.js versions or conventions if they conflict with this repo's config.
- Refer to `README.md` for route mapping, stack summary, and development commands.
