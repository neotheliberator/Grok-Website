import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const links = [
  { to: "/produkte", key: "products" as const },
  { to: "/leistungen", key: "capabilities" as const },
  { to: "/qualitaet", key: "quality" as const },
];

export function SiteHeader() {
  const t = useCopy();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-6xl items-center px-4 text-[11px] uppercase tracking-[0.16em] text-muted sm:px-6">
        <span>{t.topbar}</span>
      </div>
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold tracking-[0.08em] text-fg">
            {t.brand}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-muted lg:inline">
            {t.brandSub}
          </span>
        </Link>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-lg font-medium text-muted transition-colors duration-150 hover:text-fg",
                pathname === link.to && "text-fg",
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />
          <Button asChild className="hidden lg:inline-flex">
            <Link to="/anfrage">{t.nav.rfq}</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-fg lg:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-lg font-medium text-fg"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link to="/anfrage" onClick={() => setOpen(false)}>
                {t.nav.rfq}
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
