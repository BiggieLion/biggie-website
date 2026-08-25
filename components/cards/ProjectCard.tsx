import Image from "next/image";
import { techIcons } from "@/lib/tech-icons";

interface Project {
  name: string;
  description: string;
  stack: string[];
  url: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: "Credit Risk Platform · Backend",
    description: "NestJS microservices that assess the credit risk of loan applications with an ML model — Dockerized and deployed to AWS ECR.",
    stack: ["NestJS", "TypeScript", "Docker", "AWS"],
    url: "https://github.com/BiggieLion/pt2-backend-v2",
  },
  {
    name: "Credit Risk Platform · AI",
    description: "Credit-scoring model trained with scikit-learn and NumPy that powers the platform's risk decisions.",
    stack: ["Python", "scikit-learn"],
    url: "https://github.com/BiggieLion/pt2-ai",
  },
  {
    name: "TimothyApp",
    description: "The pioneer helper — a full-stack app I'm building end to end with NestJS (in progress).",
    stack: ["NestJS", "TypeScript"],
    url: "https://github.com/BiggieLion/timothy-back",
  },
  {
    name: "Introducción a Mongoose",
    description: "Practical Mongoose guide with full CRUD — used as a learning resource by the community.",
    stack: ["JavaScript", "MongoDB"],
    url: "https://github.com/BiggieLion/Introduccion-a-Mongoose",
    stars: 10,
  },
  {
    name: "Credit Risk Platform · Frontend",
    description: "Angular client for the credit risk platform, deployed on Vercel.",
    stack: ["Angular", "TypeScript"],
    url: "https://github.com/BiggieLion/pt2-frontend",
  },
  {
    name: "hours-backend",
    description: "REST API for time tracking and work-hour management, built with Python and Flask.",
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
        {project.stack.map((s) => {
          const tech = techIcons[s];
          return (
            <span
              key={s}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-card-border/60 text-muted border border-card-border"
            >
              {tech && (
                <Image
                  src={tech.icon}
                  alt={s}
                  width={12}
                  height={12}
                  className={`w-3 h-3 shrink-0${tech.invert ? " dark:invert" : ""}`}
                />
              )}
              {s}
            </span>
          );
        })}
      </div>
    </a>
  );
}

export { projects };
