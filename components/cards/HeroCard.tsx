"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const ThemeToggle = dynamic(
  () => import("@/components/ThemeToggle").then((m) => ({ default: m.ThemeToggle })),
  { ssr: false, loading: () => <div className="w-8 h-8" /> }
);

export function HeroCard() {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <div className="bento-card col-span-2 row-span-1 flex overflow-hidden">
      {/* Left: text content */}
      <div className="flex flex-col justify-between p-6 flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Jair León
            </h1>
            <p className="text-accent font-medium text-sm mt-0.5">
              Backend &amp; AI Engineer
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div>
          <p className="text-muted text-sm leading-relaxed">
            Telematics engineer building backend systems and AI integrations.
            4+ years turning complex problems into reliable, scalable APIs.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["NestJS", "TypeScript", "Python", "FastAPI"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: portrait */}
      <div className="relative w-40 shrink-0 self-stretch">
        {avatarFailed ? (
          <div className="absolute inset-0 flex items-center justify-center text-accent text-3xl font-bold">
            JL
          </div>
        ) : (
          <Image
            src="/avatar.png"
            alt="Jair León"
            fill
            className="object-cover object-top"
            sizes="160px"
            priority
            onError={() => setAvatarFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
