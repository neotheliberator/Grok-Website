import { create } from "zustand";

export type Lang = "de" | "en";

const STORAGE_KEY = "aexum-lang";

export const useLang = create<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  hydrate: () => void;
}>((set) => ({
  lang: "de",
  setLang: (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    set({ lang });
  },
  hydrate: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "de") set({ lang: stored });
    } catch {
      /* ignore */
    }
  },
}));
