import { createContext, useContext, useState } from "react";
import type { Language, T } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: T;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default "en" — the URL-based LangLayout will immediately set the correct language.
  // We still write to localStorage so LangDetector can restore the preferred lang on next visit.
  const [language, setLanguageState] = useState<Language>("en");

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    try { localStorage.setItem("biggood-lang", lang); } catch {}
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
