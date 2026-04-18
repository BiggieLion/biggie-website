interface Project {
  name: string;
  description: string;
  stack: string[];
  url: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: "pt2-backend-v2",
    description: "Degree project backend — scalable REST API built with NestJS and TypeScript.",
    stack: ["NestJS", "TypeScript"],
    url: "https://github.com/BiggieLion/pt2-backend-v2",
  },
  {
    name: "pt2-frontend",
    description: "Frontend client for the pt2 degree project, built with TypeScript.",
    stack: ["TypeScript"],
    url: "https://github.com/BiggieLion/pt2-frontend",
  },
  {
    name: "pt2-ai",
    description: "AI/ML services powering the pt2 platform — Python-based inference pipeline.",
    stack: ["Python", "AI/ML"],
    url: "https://github.com/BiggieLion/pt2-ai",
  },
  {
    name: "Introducción a Mongoose",
    description: "Educational guide to Mongoose with full CRUD operations. ⭐ 10",
    stack: ["JavaScript", "MongoDB"],
    url: "https://github.com/BiggieLion/Introduccion-a-Mongoose",
    stars: 10,
  },
  {
    name: "hours-backend",
    description: "Python backend for tracking and managing work hours. ⭐ 4",
    stack: ["Python", "Flask"],
    url: "https://github.com/BiggieLion/hours-backend",
    stars: 4,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card p-5 flex flex-col justify-between group hover:border-accent/40 transition-colors"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
            {project.name}
          </h3>
          {project.stars != null && (
            <span className="flex items-center gap-1 text-xs text-muted shrink-0">
              <StarIcon />
              {project.stars}
            </span>
          )}
        </div>
        <p className="text-xs text-muted leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 rounded text-xs bg-card-border/60 text-muted border border-card-border"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  );
}

export { projects };
