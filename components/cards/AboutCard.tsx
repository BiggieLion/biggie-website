export function AboutCard() {
  return (
    <div className="bento-card col-span-2 row-span-1 p-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
        About
      </h2>
      <p className="text-foreground text-sm leading-relaxed">
        I&apos;m a Full-Stack Engineer from Mexico with 4+ years designing and
        building event-driven platforms, REST APIs, and AI integrations. I
        specialize in NestJS, TypeScript, and Google Cloud — and I care deeply
        about clean architecture, observability, and shipping things that
        actually work.
      </p>
      <p className="text-muted text-sm leading-relaxed mt-3">
        Currently at <span className="text-foreground font-medium">Grupo Rotoplas</span>,
        building the event-driven platform that syncs HubSpot CRM with
        logistics systems — transactional outbox, HMAC-secured APIs, full
        OpenTelemetry observability, and AI-assisted engineering workflows
        with Claude Code.
      </p>
    </div>
  );
}
