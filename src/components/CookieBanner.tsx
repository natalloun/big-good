import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "biggood-cookie-consent";
const GTM_ID = "GTM-NVCFBJT4";

function loadGTM() {
  if ((window as Window & { _gtmLoaded?: boolean })._gtmLoaded) return;
  (window as Window & { _gtmLoaded?: boolean })._gtmLoaded = true;

  // Inject GTM <script>
  const script = document.createElement("script");
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);

  // Inject GTM <noscript> fallback
  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
}

export function CookieBanner() {
  const { t, language } = useLanguage();
  const cb = t.cookieBanner;

  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem(STORAGE_KEY); } catch { return true; }
  });

  // On mount: if user previously accepted, load GTM immediately
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "accepted") {
        loadGTM();
      }
    } catch {}
  }, []);

  if (!visible) return null;

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    loadGTM();
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
