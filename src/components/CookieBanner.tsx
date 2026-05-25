import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "biggood-cookie-consent";

export function CookieBanner() {
  const { t, language } = useLanguage();
  const cb = t.cookieBanner;

  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem(STORAGE_KEY); } catch { return true; }
  });

  if (!visible) return null;

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setVisible(false);
  }

  function decline() {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch {}
    setVisible(false);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
          {cb.message}{" "}
          <Link
            to={`/${language}/cookie-policy`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            {cb.learnMore}
          </Link>
          .
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button size="sm" onClick={accept} className="rounded-xl text-xs sm:text-sm px-4">
            {cb.accept}
          </Button>
          <Button size="sm" variant="outline" onClick={decline} className="rounded-xl text-xs sm:text-sm px-4">
            {cb.decline}
          </Button>
        </div>
      </div>
    </div>
  );
}
