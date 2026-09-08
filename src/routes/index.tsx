import { asset } from "@/lib/asset";
import { createFileRoute, Link } from "@tanstack/react-router";
import { familyShapes, ProfileShape } from "@/components/profile-shapes";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/lib/copy";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const t = useCopy();

  return (
    <SiteShell>
      <section className="relative isolate min-h-[88dvh] overflow-hidden">
        <img
          src={asset("images/press.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-bg/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" />
        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">{t.heroKicker}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t.heroLead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/anfrage">{t.ctaPrimary}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/produkte">{t.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {t.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 sm:px-6">
              <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-fg sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.productsKicker}</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="font-display text-4xl font-semibold leading-tight text-fg sm:text-5xl">
            {t.productsTitle}
          </h2>
          <p className="text-muted">{t.productsLead}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.families.map((family, i) => (
            <article
              key={family.title}
              className="rounded-xl border border-border bg-surface p-6 sm:p-7"
            >
              <ProfileShape shape={familyShapes[i] ?? "custom"} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-fg">{family.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{family.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <img
            src={asset("images/profiles.jpg")}
            alt=""
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.industriesKicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-fg sm:text-5xl">
            {t.industriesTitle}
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.map((item) => (
              <article key={item.title} className="bg-surface p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{t.processKicker}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-fg sm:text-5xl">{t.processTitle}</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {t.process.map((step) => (
            <li key={step.step} className="border-t border-hairline pt-5">
              <p className="font-display text-sm tabular-nums tracking-[0.2em] text-primary">{step.step}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src={asset("images/warehouse.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/78" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="max-w-2xl font-display text-4xl font-semibold text-fg sm:text-5xl">
            {t.logisticsTitle}
          </h2>
          <p className="mt-5 max-w-xl text-muted">{t.logisticsBody}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-12">
          <h2 className="max-w-2xl font-display text-4xl font-semibold text-fg sm:text-5xl">
            {t.finalCtaTitle}
          </h2>
          <p className="mt-5 max-w-xl text-muted">{t.finalCtaBody}</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/anfrage">{t.ctaPrimary}</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
