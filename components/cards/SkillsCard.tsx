import Image from "next/image";
import { techIcons } from "@/lib/tech-icons";

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "NestJS",
  "Node.js",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "Google Cloud",
  "AWS",
  "Azure",
  "Terraform",
  "Docker",
  "Kubernetes",
  "OpenTelemetry",
  "Vitest",
  "Angular",
  "REST APIs",
  "AI/ML",
];

function RestIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4" />
      <path d="M12 10v4" />
      <path d="M8 18h8" />
      <path d="M9 22h6" />
    </svg>
  );
}

export function SkillsCard() {
  return (
    <div className="bento-card p-5 sm:p-6">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted mb-4">
        Tech stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((name) => {
          const tech = techIcons[name];
          return (
            <span
              key={name}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-card-border/50 text-foreground border border-card-border hover:border-accent/40 hover:text-accent transition-colors"
            >
              {tech ? (
                <Image
                  src={tech.icon}
                  alt=""
                  width={16}
                  height={16}
                  className={`w-4 h-4 shrink-0${tech.invert ? " dark:invert" : ""}`}
                />
              ) : name === "REST APIs" ? (
                <RestIcon />
              ) : (
                <AiIcon />
              )}
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
