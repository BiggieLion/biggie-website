const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const techIcons: Record<string, { icon: string; invert?: boolean }> = {
  TypeScript:  { icon: `${CDN}/typescript/typescript-original.svg` },
  Python:      { icon: `${CDN}/python/python-original.svg` },
  JavaScript:  { icon: `${CDN}/javascript/javascript-original.svg` },
  NestJS:      { icon: `${CDN}/nestjs/nestjs-original.svg` },
  "Node.js":   { icon: `${CDN}/nodejs/nodejs-original.svg` },
  FastAPI:     { icon: `${CDN}/fastapi/fastapi-original.svg` },
  Flask:       { icon: `${CDN}/flask/flask-original.svg`, invert: true },
  PostgreSQL:  { icon: `${CDN}/postgresql/postgresql-original.svg` },
  MongoDB:     { icon: `${CDN}/mongodb/mongodb-original.svg` },
  Docker:      { icon: `${CDN}/docker/docker-original.svg` },
};
