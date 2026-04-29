"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";

const ThemeToggle = dynamic(
  () =>
    import("@/components/ThemeToggle").then((m) => ({
      default: m.ThemeToggle,
    })),
  { ssr: false, loading: () => <div className="w-8 h-8" /> },
);

export function HeroCard() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    if (!showResume) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowResume(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showResume]);

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
            I build backend systems and AI integrations that scale. 4+ years
            shipping reliable APIs with NestJS, Python, and FastAPI.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["AI / ML", "Backend", "Frontend", "Automation"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/in/jairleon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline mt-3 inline-block"
          >
            Read more...
          </a>
          {/* CTAs */}
          <div className="flex gap-2 mt-5 flex-wrap">
            <button
              onClick={() => setShowResume(true)}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-accent text-accent-fg hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Resume ↗
            </button>
            <a
              href="mailto:hleonr1300@gmail.com"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>

      {/* Resume modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative w-full max-w-3xl h-[90vh] bg-card rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-card-border shrink-0">
              <span className="text-sm font-semibold text-foreground">
                Résumé
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="text-xs text-accent hover:underline"
                >
                  Download
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-muted hover:text-foreground transition-colors text-lg leading-none cursor-pointer"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src="/resume.pdf"
              className="flex-1 w-full"
              title="Résumé"
            />
          </div>
        </div>
      )}

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
