import { asset } from "@/lib/asset";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/copy";

export const Route = createFileRoute("/produkte")({ component: Produkte });

function Produkte() {
  const t = useCopy();
  const p = t.productsPage;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{p.kicker}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-fg sm:text-6xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{p.lead}</p>

        <img
          src={asset("images/profiles.jpg")}
          alt=""
          className="mt-12 h-72 w-full rounded-xl object-cover sm:h-96"
        />

        <h2 className="mt-16 font-display text-3xl font-semibold text-fg">{p.alloysTitle}</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-[0.14em] text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">EN AW</th>
                <th className="px-4 py-3 font-medium">T</th>
                <th className="px-4 py-3 font-medium">Duty</th>
              </tr>
            </thead>
            <tbody>
              {p.alloys.map((alloy) => (
                <tr key={alloy.name} className="border-t border-border">
                  <td className="px-4 py-4 font-medium text-fg">{alloy.name}</td>
                  <td className="px-4 py-4 tabular-nums text-muted">{alloy.temper}</td>
                  <td className="px-4 py-4 text-muted">{alloy.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 font-display text-3xl font-semibold text-fg">{p.limitsTitle}</h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {p.limits.map((row) => (
            <div key={row.k} className="bg-surface px-5 py-6">
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">{row.k}</dt>
              <dd className="mt-2 font-display text-2xl font-semibold tabular-nums text-fg">{row.v}</dd>
            </div>
          ))}
        </dl>

        <Button asChild className="mt-12">
          <Link to="/anfrage">{t.ctaPrimary}</Link>
        </Button>
      </main>
    </SiteShell>
  );
}
