"use client";

import useSWR from "swr";
import Image from "next/image";
import { UnavailableState } from "@/components/UnavailableState";
import { DiscordIcon } from "@/components/icons";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const statusColors: Record<string, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-400",
  dnd: "bg-red-500",
  offline: "bg-neutral-500",
};

const statusLabels: Record<string, string> = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

function activityIconUrl(activity: {
  application_id?: string;
  assets?: { large_image?: string };
}) {
  if (!activity.assets?.large_image) return null;
  const img = activity.assets.large_image;
  // Media-proxy reference (e.g. Apple Music album art): mp:external/<hash>/https/<host>/<path>
  if (img.startsWith("mp:")) return `https://media.discordapp.net/${img.slice(3)}`;
  if (img.startsWith("external/") || !activity.application_id) return null;
  return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png`;
}

export function DiscordCard() {
  const { data, isLoading } = useSWR("/api/discord", fetcher, { refreshInterval: 10000 });
  const presence = data?.data;
  const hasError = data?.error || (!isLoading && !presence);
  const activity = presence?.activities?.[0];

  return (
    <div className="bento-card col-span-1 row-span-1 p-5 flex flex-col">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
        Discord
      </h2>

      {isLoading && (
        <div className="flex-1 flex flex-col gap-3 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-card-border shrink-0" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-24 rounded bg-card-border" />
              <div className="h-2 w-16 rounded bg-card-border" />
            </div>
          </div>
          <div className="h-2 w-32 rounded bg-card-border mt-auto" />
        </div>
      )}

      {!isLoading && hasError && (
        <UnavailableState
          icon={<DiscordIcon />}
          label="Discord unavailable"
          hint="Configure DISCORD_USER_ID and join discord.gg/lanyard"
        />
      )}

      {!isLoading && presence && (
        <div className="flex-1 flex flex-col justify-between gap-3">
          {/* User row */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              {presence.discord_user?.avatar ? (
                <Image
                  src={`https://cdn.discordapp.com/avatars/${presence.discord_user.id}/${presence.discord_user.avatar}.png?size=64`}
                  alt={presence.discord_user.username}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-card-border flex items-center justify-center text-muted text-sm font-bold">
                  JL
                </div>
              )}
              <span
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${statusColors[presence.discord_status] ?? "bg-neutral-500"}`}
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground leading-none truncate">
                {presence.discord_user?.global_name ?? presence.discord_user?.username ?? "BiggieLion"}
              </p>
              <p className="text-xs text-muted mt-1">
                {statusLabels[presence.discord_status] ?? "Unknown"}
              </p>
            </div>
          </div>

          {/* Activity row */}
          {activity && (
            <div className="flex items-start gap-2 bg-card-border/40 rounded-lg p-2">
              {activityIconUrl(activity) && (
                <Image
                  src={activityIconUrl(activity)!}
                  alt={activity.name}
                  width={32}
                  height={32}
                  className="rounded shrink-0"
                />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-foreground truncate">{activity.name}</p>
                {activity.details && (
                  <p className="text-xs text-muted truncate">{activity.details}</p>
                )}
                {activity.state && (
                  <p className="text-xs text-muted/60 truncate">{activity.state}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
