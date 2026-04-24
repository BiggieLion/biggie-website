"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/ThemeToggle").then((m) => ({ default: m.ThemeToggle })),
  { ssr: false, loading: () => <div className="w-8 h-8" /> }
);

export function HeroCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 flex flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-card-border shrink-0">
            <Image
              src="/avatar.jpg"
              alt="Jair León"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-card text-accent text-2xl font-bold">
              JL
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Jair León
            </h1>
            <p className="text-accent font-medium text-sm mt-0.5">
              Backend &amp; AI Engineer
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="mt-4">
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
  );
}
