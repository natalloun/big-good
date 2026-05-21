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
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("biggood-lang");
      if (stored === "en" || stored === "cs") return stored;
    } catch {}
    return "en";
  });

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
