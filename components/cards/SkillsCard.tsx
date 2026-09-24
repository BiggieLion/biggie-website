import Image from "next/image";
import { techIcons } from "@/lib/tech-icons";
import { RestIcon, AiIcon } from "@/components/icons";

const skills = [
  "TypeScript", "JavaScript", "Python", "NestJS",
  "Node.js", "Flask", "Angular", "Google Cloud",
  "AWS", "Azure", "Docker", "Kubernetes",
  "MySQL", "MongoDB", "Redis", "Prisma", "REST APIs", "AI/ML",
];

export function SkillsCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((name) => {
          const tech = techIcons[name];
          return (
            <span
              key={name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-card-border/60 text-foreground border border-card-border hover:border-accent/40 hover:text-accent transition-colors"
            >
              {tech ? (
                <Image
                  src={tech.icon}
                  alt={name}
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
