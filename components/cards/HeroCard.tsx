"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

// Client-only to avoid next-themes hydration mismatch on the toggle control
const ThemeToggle = dynamic(
  () =>
    import("@/components/ThemeToggle").then((m) => ({
      default: m.ThemeToggle,
    })),
  { ssr: false, loading: () => <div className="w-9 h-9" aria-hidden="true" /> },
);

export function HeroCard() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!showResume) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowResume(false);
        return;
      }

      if (e.key !== "Tab") return;

      const modal = document.getElementById("resume-modal");
      if (!modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [showResume]);

  return (
    <div className="bento-card bento-card-hero flex flex-col sm:flex-row overflow-hidden">
      <div className="relative z-[2] flex flex-col justify-between p-6 sm:p-8 flex-1 min-w-0 gap-6 sm:gap-10">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.35rem] font-bold tracking-tight text-foreground leading-[0.95]">
              Jair León
            </h1>
            <p className="text-accent font-medium text-sm sm:text-[0.95rem] mt-3 sm:mt-4">
              Full-Stack & Cloud Engineer
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
            Event-driven platforms and AI-powered products that scale — NestJS,
            TypeScript, and Google Cloud.
          </p>
          <div className="flex gap-2.5 mt-5 sm:mt-7 flex-wrap">
            <a
              href="mailto:hleonr1300@gmail.com"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-accent text-accent-fg hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold border border-accent/40 text-accent hover:bg-accent/10 transition-colors cursor-pointer"
            >
              View resume
            </button>
          </div>
        </div>
      </div>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowResume(false)}
        >
          <div
            id="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-3xl h-[90vh] bg-card rounded-2xl overflow-hidden flex flex-col border border-card-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-card-border shrink-0">
              <span id={titleId} className="text-sm font-semibold text-foreground">
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
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setShowResume(false)}
                  className="text-muted hover:text-foreground transition-colors p-1 rounded-md cursor-pointer"
                  aria-label="Close résumé"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
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

      <div className="relative h-56 sm:h-auto sm:w-52 md:w-64 shrink-0 self-stretch overflow-hidden border-t sm:border-t-0 sm:border-l border-card-border/70">
        <div
          className="absolute inset-y-0 left-0 z-[1] w-16 pointer-events-none hidden sm:block bg-gradient-to-r from-[color-mix(in_oklab,var(--card-bg)_90%,transparent)] to-transparent"
          aria-hidden="true"
        />
        {avatarFailed ? (
          <div className="absolute inset-0 flex items-center justify-center font-display text-accent text-4xl font-bold">
            JL
          </div>
        ) : (
          <Image
            src="/avatar.png"
            alt="Jair León"
            fill
            className="object-cover object-[center_15%]"
            sizes="(max-width: 640px) 100vw, 256px"
            priority
            onError={() => setAvatarFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
