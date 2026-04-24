import { techIcons } from "@/lib/tech-icons";

const skills = [
  "TypeScript", "Python", "JavaScript", "NestJS",
  "Node.js", "FastAPI", "Flask", "PostgreSQL",
  "MongoDB", "Docker", "REST APIs", "AI/ML",
];

function RestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4" />
      <path d="M12 10v4" /><path d="M8 18h8" /><path d="M9 22h6" />
    </svg>
  );
}

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
                <img
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
