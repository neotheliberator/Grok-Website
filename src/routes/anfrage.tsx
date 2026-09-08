import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCopy } from "@/lib/copy";

export const Route = createFileRoute("/anfrage")({ component: Anfrage });

function Anfrage() {
  const t = useCopy();
  const p = t.rfqPage;
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const record = Object.fromEntries(data.entries());
    try {
      const prev = JSON.parse(localStorage.getItem("aexum-rfq") ?? "[]") as unknown[];
      localStorage.setItem("aexum-rfq", JSON.stringify([...prev, { ...record, at: Date.now() }]));
    } catch {
      /* ignore */
    }
    setSent(true);
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">{p.kicker}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-fg sm:text-6xl">{p.title}</h1>
        <p className="mt-5 text-lg text-muted">{p.lead}</p>

        {sent ? (
          <div className="mt-12 rounded-xl border border-border bg-surface p-8">
            <h2 className="font-display text-3xl font-semibold text-fg">{p.successTitle}</h2>
            <p className="mt-4 text-muted">{p.successBody}</p>
            <Button className="mt-8" type="button" onClick={() => setSent(false)}>
              {p.another}
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid gap-5">
            <Field label={p.company} name="company" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="country">{p.country}</Label>
                <select
                  id="country"
                  name="country"
                  required
                  className="h-11 rounded-md border border-border bg-elevated px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {p.countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <Field label={p.name} name="name" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={p.email} name="email" type="email" required />
              <Field label={p.phone} name="phone" type="tel" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={p.alloy} name="alloy" />
              <Field label={p.qty} name="qty" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={p.length} name="length" />
              <div className="grid gap-2">
                <Label htmlFor="finish">{p.finish}</Label>
                <select
                  id="finish"
                  name="finish"
                  className="h-11 rounded-md border border-border bg-elevated px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  {p.finishes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">{p.message}</Label>
              <Textarea id="message" name="message" />
            </div>
            <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
              {p.submit}
            </Button>
          </form>
        )}
      </main>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
