# Jair León — Personal Portfolio

Personal portfolio website built with a bento grid layout. Features live widgets for Discord status, Apple Music last played, and local weather.

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Theme:** Dark / Light toggle via `next-themes`
- **Animations:** Framer Motion
- **Data fetching:** SWR

## Live Widgets

| Widget | Source | Refresh |
|---|---|---|
| Discord status | Lanyard API | Every 10s |
| Apple Music last played | Last.fm API | Every 60s |
| Weather | OpenWeatherMap | Every 10min |

## Getting Started

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Copy the env template and fill in your keys:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `DISCORD_USER_ID` | Your Discord user ID. Enable Developer Mode → right-click your name → Copy User ID. Also join [discord.gg/lanyard](https://discord.gg/lanyard). |
| `LASTFM_API_KEY` | API key from [last.fm/api/account/create](https://www.last.fm/api/account/create) |
| `LASTFM_USERNAME` | Your Last.fm username |
| `OPENWEATHER_API_KEY` | Free API key from [openweathermap.org](https://openweathermap.org/api) |
| `NEXT_PUBLIC_CITY` | City name for the weather widget (default: `Nextlalpan`) |

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
app/
├── api/
│   ├── discord/route.ts    # Lanyard proxy
│   ├── lastfm/route.ts     # Last.fm proxy
│   └── weather/route.ts    # OpenWeatherMap proxy
├── layout.tsx
├── page.tsx
└── globals.css
components/
├── cards/                  # Individual bento cards
│   ├── AboutCard.tsx
│   ├── DiscordCard.tsx
│   ├── HeroCard.tsx
│   ├── MusicCard.tsx
│   ├── ProjectCard.tsx
│   ├── SkillsCard.tsx
│   ├── SocialCard.tsx
│   └── WeatherCard.tsx
├── BentoGrid.tsx
├── ThemeProvider.tsx
├── ThemeToggle.tsx
└── UnavailableState.tsx
lib/
└── tech-icons.ts           # Technology icon mappings
```

## Deploy

Deploy to [Vercel](https://vercel.com) in one click. Add all environment variables in the Vercel project settings under **Settings → Environment Variables**.
