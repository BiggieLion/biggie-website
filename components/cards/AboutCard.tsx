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
        building the event-driven platform syncing HubSpot CRM with Bringoz
        logistics, Commercetools, and Fluent OMS — transactional outbox, HMAC-secured
        APIs, full OpenTelemetry observability, and AI-assisted engineering workflows
        with Claude Code (recently cut a production endpoint from ~2 minutes
        to seconds). Previously at FP Alpha, working on an AI document-analysis
        pipeline — Bull/Redis queues feeding GPT-4o and Azure Document
        Intelligence extractors. On the side, contributing to a year-long
        project at <span className="text-foreground font-medium">Google</span>.
      </p>
    </div>
  );
}
