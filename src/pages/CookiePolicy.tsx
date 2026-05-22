import type { ReactNode } from "react";
import { SEO } from "@/components/SEO";

export function CookiePolicy() {
  return (
    <>
      <SEO
        title="Zásady cookies | Big Good"
        description="Informace o používání cookies na webu Big Good, včetně Google Analytics. Provozovatel: ECOMAIL.CZ, s.r.o."
        url="/cookie-policy"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Zásady cookies
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Datum účinnosti: 21. 5. 2026 &nbsp;·&nbsp; Poslední aktualizace: 21. 5. 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">

            <Section number="1" title="Jaké cookies používáme">
              <p>
                Na tomto webu používáme analytické cookies prostřednictvím nástroje{" "}
                <strong>Google Analytics</strong> (provozovaného společností Google LLC). Tyto cookies
                nám pomáhají porozumět tomu, jak návštěvníci web používají.
              </p>
              <p className="mt-3">Konkrétně shromažďujeme:</p>
              <BulletList items={[
                "anonymizovanou IP adresu",
                "typ prohlížeče a operačního systému",
                "navštívené stránky a dobu návštěvy",
                "zdroj návštěvy (odkud jste přišli)",
              ]} />
            </Section>

            <Section number="2" title="Účel zpracování analytických dat">
              <p>
                Analytická data zpracováváme za účelem zlepšení fungování a obsahu webu. Právní základ
                je oprávněný zájem nebo váš souhlas (čl. 6 odst. 1 písm. a) nebo f) GDPR).
              </p>
            </Section>

            <Section number="3" title="Google Analytics a předávání dat">
              <p>
                Data shromážděná přes Google Analytics jsou zpracovávána společností Google LLC (USA).
                Přenos probíhá v souladu se standardními smluvními doložkami Evropské komise.
                Více informací:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  policies.google.com/privacy
                </a>
              </p>
            </Section>

            <Section number="4" title="Doba uchování analytických dat">
              <p>
                Google Analytics uchovává data zpravidla po dobu <strong>14 měsíců</strong>, poté jsou
                automaticky smazána.
              </p>
            </Section>

            <Section number="5" title="Vaše práva">
              <p>
                Máte právo kdykoli odvolat svůj souhlas se zpracováním analytických dat, vznést
                námitku nebo požádat o výmaz.
              </p>
              <p className="mt-3">
                Svá práva můžete uplatnit na:{" "}
                <a href="mailto:support@ecomail.cz" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  support@ecomail.cz
                </a>
              </p>
            </Section>

            <Section number="6" title="Změny zásad">
              <p>
                Tyto zásady můžeme kdykoli aktualizovat. O podstatných změnách vás budeme informovat
                zveřejněním nové verze na této stránce.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3">
        <span className="w-8 h-8 rounded-xl bg-blue-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        {title.toUpperCase()}
      </h2>
      <div className="space-y-3 pl-11">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
