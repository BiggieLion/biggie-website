const skills = [
  { name: "TypeScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "NestJS", category: "framework" },
  { name: "Node.js", category: "runtime" },
  { name: "FastAPI", category: "framework" },
  { name: "Flask", category: "framework" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "REST APIs", category: "concept" },
  { name: "AI/ML", category: "concept" },
];

export function SkillsCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1 rounded-lg text-xs font-medium bg-card-border/60 text-foreground border border-card-border hover:border-accent/40 hover:text-accent transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
