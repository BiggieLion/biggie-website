export function AboutCard() {
  return (
    <div className="bento-card p-6 sm:p-8 flex flex-col justify-between gap-8 min-h-[300px]">
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted mb-5">
          About
        </h2>
        <p className="font-display text-2xl sm:text-[1.65rem] font-semibold tracking-tight text-foreground leading-snug">
          Idempotent, replayable, observable — and fast.
        </p>
      </div>
      <p className="text-muted text-sm leading-relaxed max-w-md">
        Based in Mexico City. At{" "}
        <span className="text-foreground font-medium">Grupo Rotoplas</span> I
        lead the integration platform syncing HubSpot with Bringoz,
        Commercetools and Fluent OMS (97–100% test coverage, OpenTelemetry and
        Terraform as code) and co-lead a greenfield B2B operational CRM on
        NestJS and PostgreSQL. Previously GPT-powered document extraction at{" "}
        <span className="text-foreground font-medium">FP Alpha</span>.
      </p>
    </div>
  );
}
