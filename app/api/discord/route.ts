import { NextResponse } from "next/server";

export const revalidate = 10;

export async function GET() {
  const userId = process.env.DISCORD_USER_ID;
  if (!userId) {
    return NextResponse.json(
      { error: "Discord user ID not configured" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) throw new Error(`Lanyard returned ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Discord status" },
      { status: 502 },
    );
  }
}
