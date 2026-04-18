import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const username = process.env.LASTFM_USERNAME;

  if (!apiKey || !username) {
    return NextResponse.json({ error: "Last.fm credentials not configured" }, { status: 500 });
  }

  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Last.fm returned ${res.status}`);
    const data = await res.json();
    const track = data.recenttracks?.track?.[0];
    if (!track) return NextResponse.json({ track: null });

    return NextResponse.json({
      track: {
        name: track.name,
        artist: track.artist["#text"],
        album: track.album["#text"],
        image: track.image?.find((i: { size: string }) => i.size === "large")?.["#text"] ?? null,
        url: track.url,
        nowPlaying: track["@attr"]?.nowplaying === "true",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch Last.fm data" }, { status: 502 });
  }
}
