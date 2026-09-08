import { asset } from "@/lib/asset";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/copy";

export const Route = createFileRoute("/qualitaet")({ component: Qualitaet });

function Qualitaet() {
  const t = useCopy();
  const p = t.qualityPage;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{p.kicker}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-fg sm:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{p.lead}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {p.items.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-surface p-7">
              <h2 className="font-display text-2xl font-semibold text-fg">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {t.certs.map((cert) => (
            <span
              key={cert}
              className="rounded-sm border border-border bg-elevated px-3 py-2 text-xs uppercase tracking-[0.12em] text-fg"
            >
              {cert}
            </span>
          ))}
        </div>

        <img
          src={asset("images/finishes.jpg")}
          alt=""
          className="mt-12 h-72 w-full rounded-xl object-cover sm:h-96"
        />

        <Button asChild className="mt-12">
          <Link to="/anfrage">{t.ctaPrimary}</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
