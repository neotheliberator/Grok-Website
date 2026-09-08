import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message = error instanceof Error && error.message ? error.message : "Bitte Seite neu laden.";
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <TriangleAlert className="size-10 text-primary" strokeWidth={2} aria-hidden="true" />
      <h1 className="font-display text-2xl font-semibold">Etwas ist schiefgelaufen</h1>
      <p className="max-w-md text-sm text-muted">{message}</p>
    </main>
  );
}
