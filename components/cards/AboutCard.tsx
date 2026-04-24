export function AboutCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
        About
      </h2>
      <p className="text-foreground text-sm leading-relaxed">
        I&apos;m a Backend &amp; AI Engineer from Mexico with 4+ years designing and
        building REST APIs, microservices, and intelligent pipelines. I specialize in
        NestJS, Python, and FastAPI — and I care deeply about clean code,
        developer experience, and shipping things that actually work.
      </p>
      <p className="text-muted text-sm leading-relaxed mt-3">
        Currently working at <span className="text-foreground font-medium">Rotoplas</span> as
        a Fullstack Engineer, and contributing to a year-long project
        at <span className="text-foreground font-medium">Google</span>.
      </p>
    </div>
  );
}
