"use client";

import useSWR from "swr";
import Image from "next/image";
import { UnavailableState } from "@/components/UnavailableState";

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

const DiscordIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963a.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
  </svg>
);

export function DiscordCard() {
  const { data, isLoading } = useSWR("/api/discord", fetcher, { refreshInterval: 10000 });
  const presence = data?.data;
  const hasError = data?.error || (!isLoading && !presence);

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
          icon={DiscordIcon}
          label="Discord unavailable"
          hint="Configure DISCORD_USER_ID and join discord.gg/lanyard"
        />
      )}

      {!isLoading && presence && (
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
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
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">
                {presence.discord_user?.global_name ?? presence.discord_user?.username ?? "BiggieLion"}
              </p>
              <p className="text-xs text-muted mt-1">
                {statusLabels[presence.discord_status] ?? "Unknown"}
              </p>
            </div>
          </div>

          {presence.activities?.length > 0 && (
            <div className="mt-auto">
              <p className="text-xs text-muted truncate">{presence.activities[0].name}</p>
              {presence.activities[0].state && (
                <p className="text-xs text-muted/70 truncate">{presence.activities[0].state}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
