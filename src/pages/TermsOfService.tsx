import type { ReactNode } from "react";

export function TermsOfService() {
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
              Podmínky použití
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Datum účinnosti: [DOPLŇTE DATUM] &nbsp;·&nbsp; Poslední aktualizace: [DOPLŇTE DATUM]
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">

            <Section number="1" title="Provozovatel webu">
              <address className="not-italic p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 space-y-1 text-sm">
                <p className="font-bold text-gray-900 dark:text-white text-base">ECOMAIL.CZ, s.r.o.</p>
                <p>Na Zderaze 1275/15, Praha 2, 120 00</p>
                <p>IČO: 02762943 &nbsp;·&nbsp; DIČ: CZ02762943</p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:support@ecomail.cz" className="text-blue-600 dark:text-blue-400 hover:underline">
                    support@ecomail.cz
                  </a>
                </p>
              </address>
            </Section>

            <Section number="2" title="Účel a právní základ zpracování">
              <BulletList items={[
                "Kontaktní formulář: zpracování probíhá za účelem odpovědi na váš dotaz; právní základ je váš souhlas nebo oprávněný zájem (čl. 6 odst. 1 písm. a) nebo f) GDPR).",
                "Analytika webu: zpracování probíhá za účelem zlepšení fungování webu; právní základ je oprávněný zájem nebo váš souhlas.",
              ]} />
            </Section>

            <Section number="3" title="Příjemci osobních údajů">
              <p>
                Vaše osobní údaje neprodáváme ani neposkytujeme třetím stranám, s výjimkou:
              </p>
              <BulletList items={[
                "poskytovatelů technických služeb (hosting, e-mailové systémy, analytika), kteří jsou vázáni smlouvou o zpracování osobních údajů",
                "případů, kdy nám to ukládá zákon",
              ]} />
            </Section>

            <Section number="4" title="Zabezpečení">
              <p>
                Přijímáme technická a organizační opatření k ochraně vašich osobních údajů před
                neoprávněným přístupem, ztrátou nebo zneužitím.
              </p>
            </Section>

            <Section number="5" title="Změny podmínek">
              <p>
                Tyto podmínky můžeme kdykoli aktualizovat. O podstatných změnách vás budeme informovat
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
