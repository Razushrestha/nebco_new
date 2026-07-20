# NEBCO Website

Pixel-faithful implementation of the NEBCO Phase 1 website design (`combinepdf (6) (1).pdf`).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Manrope + IBM Plex Sans typography

## Pages

| Route | Design PDF Page |
|-------|-----------------|
| `/` | Home (page 2) |
| `/about` | About (page 3) |
| `/construction` | Construction (page 4) |
| `/consulting` | Consulting (page 5) |
| `/investments` | Investments (page 6) |
| `/projects` | Projects (page 7) |
| `/partners` | Partners & Experts (page 8) |
| `/nrn` | NRN Services (page 9) |
| `/insights` | Insights (page 10) |
| `/contact` | Contact (page 11) |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Design tokens

Colors and typography are defined in `src/app/globals.css` matching the NEBCO Digital Design System.

## Content

Copy follows `NEBCO_Phase_1_Website_Content_Master (1).pdf`. Replace placeholder contact details and team photos before launch.
