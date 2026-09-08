import { useLang, type Lang } from "@/lib/lang";
import { cn } from "@/lib/utils";

const options: { code: Lang; label: string; name: string }[] = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
];

function FlagDe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 12" className={className} aria-hidden="true">
      <rect width="16" height="12" rx="1" fill="#0a0a0a" />
      <rect y="4" width="16" height="4" fill="#dd0000" />
      <rect y="8" width="16" height="4" fill="#ffce00" />
    </svg>
  );
}

function FlagGb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 12" className={className} aria-hidden="true">
      <rect width="16" height="12" rx="1" fill="#012169" />
      <path d="M0 0l16 12M16 0L0 12" stroke="#fff" strokeWidth="2.4" />
      <path d="M0 0l16 12M16 0L0 12" stroke="#c8102e" strokeWidth="1.2" />
      <path d="M8 0v12M0 6h16" stroke="#fff" strokeWidth="4" />
      <path d="M8 0v12M0 6h16" stroke="#c8102e" strokeWidth="2.2" />
    </svg>
  );
}

function Flag({ code, className }: { code: Lang; className?: string }) {
  if (code === "de") return <FlagDe className={className} />;
  return <FlagGb className={className} />;
}

export function LanguageSwitch({ className }: { className?: string }) {
  const lang = useLang((s) => s.lang);
  const setLang = useLang((s) => s.setLang);

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("flex items-center gap-1.5", className)}
    >
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            aria-label={opt.name}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md border px-2.5 text-sm font-medium tracking-[0.08em]",
              "transition-[color,background-color,border-color] duration-150",
              active
                ? "border-primary bg-elevated text-fg"
                : "border-border bg-transparent text-muted hover:border-hairline hover:text-fg",
            )}
          >
            <Flag code={opt.code} className="h-3.5 w-[18px] shrink-0 overflow-hidden rounded-[1px]" />
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
