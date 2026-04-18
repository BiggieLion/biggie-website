interface UnavailableStateProps {
  icon: React.ReactNode;
  label: string;
  hint?: string;
}

export function UnavailableState({ icon, label, hint }: UnavailableStateProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center py-2">
      <div className="w-9 h-9 rounded-full bg-card-border/60 flex items-center justify-center text-muted">
        {icon}
      </div>
      <p className="text-xs font-medium text-muted">{label}</p>
      {hint && <p className="text-[10px] text-muted/50 leading-tight max-w-[120px]">{hint}</p>}
    </div>
  );
}
