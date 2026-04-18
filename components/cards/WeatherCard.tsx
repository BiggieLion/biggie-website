"use client";

import useSWR from "swr";
import { UnavailableState } from "@/components/UnavailableState";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const weatherIcons: Record<string, string> = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️",
};

const WeatherIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
);

export function WeatherCard() {
  const { data, isLoading } = useSWR("/api/weather", fetcher, { refreshInterval: 600000 });
  const hasError = !isLoading && (!data || data.error);

  return (
    <div className="bento-card col-span-1 row-span-1 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Weather</h2>
        <span className="text-[10px] text-muted/60">Nextlalpan, MX</span>
      </div>

      {isLoading && (
        <div className="flex-1 flex flex-col justify-center gap-2 animate-pulse">
          <div className="h-8 w-20 rounded bg-card-border" />
          <div className="h-3 w-16 rounded bg-card-border" />
          <div className="h-2 w-28 rounded bg-card-border mt-1" />
        </div>
      )}

      {!isLoading && hasError && (
        <UnavailableState
          icon={WeatherIcon}
          label="Weather unavailable"
          hint="Configure OPENWEATHER_API_KEY in .env.local"
        />
      )}

      {!isLoading && data && !data.error && (
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-foreground">{data.temp}°</span>
            <span className="text-2xl mb-1">{weatherIcons[data.condition] ?? "🌡️"}</span>
          </div>
          <p className="text-sm text-muted capitalize mt-1">{data.description}</p>
          <div className="flex gap-4 mt-3 text-xs text-muted">
            <span>Feels {data.feelsLike}°</span>
            <span>💧 {data.humidity}%</span>
            <span>💨 {data.wind} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
}
