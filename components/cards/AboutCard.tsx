export function AboutCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
        About
      </h2>
      <p className="text-foreground text-sm leading-relaxed">
        I&apos;m a Telematics Engineer from Mexico specializing in backend architecture and
        AI systems. I design and build REST APIs, microservices, and intelligent pipelines
        using NestJS, Python, and modern ML frameworks. I care deeply about clean code,
        developer experience, and shipping things that actually work.
      </p>
      <p className="text-muted text-sm leading-relaxed mt-3">
        Currently working at Rotoplas as a Fullstack Engineer, also working on a year-long project at Google.
      </p>
    </div>
  );
}
