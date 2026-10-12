"use client";

import useSWR from "swr";
import { UnavailableState } from "@/components/UnavailableState";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const city = process.env.NEXT_PUBLIC_CITY || "Nextlalpan";

const WeatherGlyph = ({ condition }: { condition: string }) => {
  const common =
    "w-7 h-7 text-accent shrink-0";
  switch (condition) {
    case "Clear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <path d="M7 16a5 5 0 1 1 3.5-8.6A6 6 0 0 1 20 11a4 4 0 0 1-1 7.8H8" />
          <path d="M8 19v2M12 18v3M16 19v2" />
        </svg>
      );
    case "Snow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <path d="M12 2v20M4.9 6.5l14.2 11M4.9 17.5l14.2-11" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      );
  }
};

const WeatherIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
);

export function WeatherCard() {
  const { data, isLoading } = useSWR("/api/weather", fetcher, {
    refreshInterval: 600000,
  });
  const hasError = !isLoading && (!data || data.error);

  return (
    <div className="bento-card bento-card-quiet p-5 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          Weather
        </h2>
        <span className="text-[11px] text-muted">
          {city}, MX
        </span>
      </div>

      {isLoading && (
        <div className="flex-1 flex flex-col justify-center gap-2 animate-pulse">
          <div className="h-8 w-20 rounded bg-card-border" />
          <div className="h-3 w-16 rounded bg-card-border" />
          <div className="h-2 w-28 rounded bg-card-border mt-1" />
        </div>
      )}

      {!isLoading && hasError && (
        <UnavailableState icon={WeatherIcon} label="Weather unavailable" />
      )}

      {!isLoading && data && !data.error && (
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-end gap-2">
            <span className="font-display text-4xl font-bold text-foreground tracking-tight">
              {data.temp}°
            </span>
            <WeatherGlyph condition={data.condition} />
          </div>
          <p className="text-sm text-muted capitalize mt-1">{data.description}</p>
          <div className="flex gap-4 mt-3 text-xs text-muted">
            <span>Feels {data.feelsLike}°</span>
            <span>Humidity {data.humidity}%</span>
            <span>Wind {data.wind} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
}
