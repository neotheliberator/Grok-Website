# AEXUM — Aluminium Extrusions

Industrielle Website für stranggepresste Aluminiumprofile. Zielgruppe: Einkauf und Technik in der EU und im UK.

## Live

Das Design läuft in der Grok-Vorschau in diesem Chat.

GitHub Pages nach dem ersten Actions-Build:

https://neotheliberator.github.io/Grok-Website/

Das Repository ist aktuell privat. Damit Pages öffentlich erreichbar ist: Repo auf **public** stellen (Settings → General → Danger Zone) oder GitHub Pro nutzen.

## Stack

- React 19, Vite, TanStack Router
- Tailwind v4
- Deutsch / English im Header (Flagge + Kürzel)

## Seiten

- Start
- Profile
- Leistungen
- Qualität
- Anfrage (RFQ, clientseitig)

## Lokal

```bash
npm install
npm run dev
```

Produktion:

```bash
npm run build
npm run preview
```

CI baut und veröffentlicht bei jedem Push auf `main`.
