"use client";

import useSWR from "swr";
import Image from "next/image";
import { UnavailableState } from "@/components/UnavailableState";
import { MusicIcon, MusicNoteIcon } from "@/components/icons";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function MusicCard() {
  const { data, isLoading } = useSWR("/api/lastfm", fetcher, { refreshInterval: 60000 });
  const track = data?.track;
  const hasError = data?.error || (!isLoading && data && !track);

  return (
    <div className="bento-card col-span-1 row-span-1 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Music</h2>
        <MusicNoteIcon />
      </div>

      {isLoading && (
        <div className="flex gap-3 animate-pulse flex-1 items-center">
          <div className="w-12 h-12 rounded-lg bg-card-border shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-3 w-28 rounded bg-card-border" />
            <div className="h-2 w-20 rounded bg-card-border" />
            <div className="h-2 w-16 rounded bg-card-border" />
          </div>
        </div>
      )}

      {!isLoading && hasError && (
        <UnavailableState
          icon={<MusicIcon />}
          label="Music unavailable"
          hint="Configure LASTFM_API_KEY and LASTFM_USERNAME"
        />
      )}

      {!isLoading && track && (
        <div className="flex gap-3 items-center flex-1">
          {track.image ? (
            <Image
              src={track.image}
              alt={track.album}
              width={48}
              height={48}
              className="rounded-lg shrink-0 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-card-border shrink-0 flex items-center justify-center text-muted">
              <MusicIcon />
            </div>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              {track.nowPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
              )}
              <p className="text-sm font-semibold text-foreground truncate">{track.name}</p>
            </div>
            <p className="text-xs text-muted truncate">{track.artist}</p>
            <p className="text-xs text-muted/60 truncate">{track.album}</p>
          </div>
        </div>
      )}
    </div>
  );
}
