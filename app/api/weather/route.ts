import { NextResponse } from "next/server";

export const revalidate = 600;

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const city = process.env.NEXT_PUBLIC_CITY ?? "Nextlalpan";

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenWeather API key not configured" },
      { status: 500 },
    );
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) throw new Error(`OpenWeather returned ${res.status}`);
    const data = await res.json();

    return NextResponse.json({
      city: data.name,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 502 },
    );
  }
}
