import { Link } from "@tanstack/react-router";
import { useCopy } from "@/lib/copy";

export function SiteFooter() {
  const t = useCopy();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.08em] text-fg">{t.brand}</p>
          <p className="mt-3 max-w-md text-sm text-muted">{t.footerNote}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          <Link to="/produkte" className="min-h-11 inline-flex items-center hover:text-fg">
            {t.nav.products}
          </Link>
          <Link to="/leistungen" className="min-h-11 inline-flex items-center hover:text-fg">
            {t.nav.capabilities}
          </Link>
          <Link to="/qualitaet" className="min-h-11 inline-flex items-center hover:text-fg">
            {t.nav.quality}
          </Link>
          <Link to="/anfrage" className="min-h-11 inline-flex items-center hover:text-fg">
            {t.nav.rfq}
          </Link>
        </nav>
      </div>
      <p className="border-t border-border px-4 py-4 text-center text-xs text-subtle sm:px-6">
        {t.footerLegal}
      </p>
    </footer>
  );
}
