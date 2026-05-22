import type { ReactNode } from "react";

export function CookiePolicy() {
  return (
    <>
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

            <Section number="1" title="Technické a analytické údaje">
              <p>
                Automaticky shromažďujeme anonymizované nebo pseudonymizované údaje o návštěvnosti,
                jako jsou IP adresa, typ prohlížeče, navštívené stránky a doba návštěvy –
                prostřednictvím analytických nástrojů.
              </p>
            </Section>

            <Section number="2" title="Účel zpracování analytických dat">
              <p>
                Analytika webu: zpracování probíhá za účelem zlepšení fungování webu; právní základ
                je oprávněný zájem nebo váš souhlas (čl. 6 odst. 1 písm. a) nebo f) GDPR).
              </p>
            </Section>

            <Section number="3" title="Předávání do třetích zemí">
              <p>
                Pokud využíváme služby třetích stran se sídlem mimo EHP (např. analytické nástroje),
                probíhá přenos dat v souladu se standardními smluvními doložkami Evropské komise.
              </p>
            </Section>

            <Section number="4" title="Doba uchování analytických dat">
              <p>
                Analytické údaje jsou uchovávány dle nastavení příslušného nástroje, zpravidla do
                14 měsíců.
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
