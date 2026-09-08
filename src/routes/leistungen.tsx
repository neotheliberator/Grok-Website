import { asset } from "@/lib/asset";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/copy";

export const Route = createFileRoute("/leistungen")({ component: Leistungen });

function Leistungen() {
  const t = useCopy();
  const p = t.capabilitiesPage;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{p.kicker}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-fg sm:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{p.lead}</p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <img src={asset("images/cnc.jpg")} alt="" className="h-72 w-full rounded-xl object-cover" />
          <img src={asset("images/press.jpg")} alt="" className="h-72 w-full rounded-xl object-cover" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {p.blocks.map((block) => (
            <article key={block.title} className="rounded-xl border border-border bg-surface p-7">
              <h2 className="font-display text-2xl font-semibold text-fg">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{block.body}</p>
            </article>
          ))}
        </div>

        <Button asChild className="mt-12">
          <Link to="/anfrage">{t.ctaPrimary}</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
