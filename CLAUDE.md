# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # ESLint (Next.js config, no test runner present)
```

There are no tests. No `npm test` script exists.

## Stack

- **Next.js 16** (App Router) — see `node_modules/next/dist/docs/` for version-specific API docs before writing any Next.js code
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** — configured via PostCSS (`postcss.config.mjs`); uses `@import "tailwindcss"` syntax, not `@tailwind` directives
- **Framer Motion** for stagger-animated grid entry
- **SWR** for client-side polling of live widget data
- **next-themes** for dark/light toggle (class-based, default: dark)

## Architecture

### Single-page bento grid

`app/page.tsx` renders `<BentoGrid />`, which is the entire UI. `BentoGrid.tsx` is a `"use client"` component that lays out all cards in a responsive CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Every card is a `"use client"` component under `components/cards/`.

### Live widgets → API routes → third-party APIs

Three cards poll their own Next.js API routes with SWR; the routes proxy to external services and use Next.js `revalidate` to cache:

| Card | Route | External API | Cache TTL |
|---|---|---|---|
| `DiscordCard` | `/api/discord` | Lanyard (`api.lanyard.rest`) | 10 s |
| `MusicCard` | `/api/lastfm` | Last.fm | 60 s |
| `WeatherCard` | `/api/weather` | OpenWeatherMap | 600 s |

All three routes guard against missing env vars and return a `{ error }` JSON body with an appropriate HTTP status. Cards show `<UnavailableState />` when the data is absent or errored.

### Theming and design tokens

CSS custom properties are defined in `app/globals.css` under `:root` (light) and `.dark` (dark). Tailwind `@theme inline` maps them to utility classes (`bg-background`, `text-muted`, `bg-card`, `bg-card-border`, `text-accent`, etc.). Always use these semantic tokens rather than hardcoded colours.

The `.bento-card` utility class (defined in `globals.css`) is the shared base style for every card — use it on the outermost `<div>` of any new card.

### Required environment variables

```
DISCORD_USER_ID          # Discord user ID; also requires joining discord.gg/lanyard
LASTFM_API_KEY           # Last.fm API key
LASTFM_USERNAME          # Last.fm username
OPENWEATHER_API_KEY      # OpenWeatherMap API key
NEXT_PUBLIC_CITY         # City for weather widget (default: Nextlalpan)
```

### Adding a new card

1. Create `components/cards/YourCard.tsx` with `"use client"` at the top and `className="bento-card ..."` on the root element.
2. If it needs live data, add a route at `app/api/your-route/route.ts` that exports a `GET` handler and sets `export const revalidate = <seconds>`.
3. Import and place it in `BentoGrid.tsx` with the appropriate `motion.div` wrapper and column-span classes.

### Images

Remote image domains must be explicitly allowed in `next.config.ts` under `images.remotePatterns`. Currently permitted: `cdn.discordapp.com`, `**.last.fm`, `lastfm.freetls.fastly.net`.

### Tech icons

`lib/tech-icons.ts` exports a `techIcons` record mapping display names to devicon CDN URLs, used by `SkillsCard`. Add entries there to extend the skills list.
