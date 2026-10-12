export function AboutCard() {
  return (
    <div className="bento-card p-6 sm:p-8 flex flex-col justify-between gap-8 min-h-[300px]">
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted mb-5">
          About
        </h2>
        <p className="font-display text-2xl sm:text-[1.65rem] font-semibold tracking-tight text-foreground leading-snug">
          Building systems that stay reliable under load.
        </p>
      </div>
      <p className="text-muted text-sm leading-relaxed max-w-md">
        Based in Mexico. Currently at{" "}
        <span className="text-foreground font-medium">Grupo Rotoplas</span>,
        shipping event-driven sync across HubSpot, Bringoz, Commercetools, and
        Fluent OMS — with OpenTelemetry end to end. Previously AI document
        pipelines at FP Alpha; side work with{" "}
        <span className="text-foreground font-medium">Google</span>.
      </p>
    </div>
  );
}
