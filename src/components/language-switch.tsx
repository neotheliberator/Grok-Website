import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = options.find((opt) => opt.code === lang) ?? options[0];

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.name}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 min-w-[6.5rem] items-center gap-2 rounded-md border border-border bg-elevated px-2.5 text-sm font-medium tracking-[0.08em] text-fg"
      >
        <Flag code={current.code} className="h-3.5 w-[18px] shrink-0 overflow-hidden rounded-[1px]" />
        <span>{current.label}</span>
        <ChevronDown className={cn("ml-auto size-4 text-muted transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 z-[60] mt-1 min-w-[12.5rem] overflow-hidden rounded-md border border-border bg-surface py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
        >
          {options.map((opt) => {
            const selected = lang === opt.code;
            return (
              <li key={opt.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-2.5 px-3 text-left text-sm",
                    selected ? "bg-surface text-fg" : "text-muted hover:bg-surface hover:text-fg",
                  )}
                >
                  <Flag code={opt.code} className="h-3.5 w-[18px] shrink-0 overflow-hidden rounded-[1px]" />
                  <span className="font-medium tracking-[0.08em]">{opt.label}</span>
                  <span className="text-muted">{opt.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
