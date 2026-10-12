import Image from "next/image";
import { techIcons } from "@/lib/tech-icons";
import { RestIcon, AiIcon } from "@/components/icons";

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
