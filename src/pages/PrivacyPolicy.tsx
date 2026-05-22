import type { ReactNode } from "react";

export function PrivacyPolicy() {
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
              Zásady ochrany<br />osobních údajů
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

            <Section number="1" title="Správce osobních údajů">
              <p>Správcem vašich osobních údajů je:</p>
              <address className="not-italic mt-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 space-y-1 text-sm">
                <p className="font-bold text-gray-900 dark:text-white text-base">ECOMAIL.CZ, s.r.o.</p>
                <p>Na příkopě 388/1, Staré Město, 110 00 Praha 1</p>
                <p>IČO: 02762943 &nbsp;·&nbsp; DIČ: CZ02762943</p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:support@ecomail.cz" className="text-blue-600 dark:text-blue-400 hover:underline">
                    support@ecomail.cz
                  </a>
                </p>
              </address>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">(dále jen „my" nebo „správce")</p>
            </Section>

            <Section number="2" title="Jaké osobní údaje zpracováváme">
              <SubHeading>a) Údaje z kontaktního formuláře</SubHeading>
              <p>Pokud nás kontaktujete prostřednictvím formuláře na webu, zpracováváme:</p>
              <BulletList items={[
                "jméno a příjmení",
                "e-mailová adresa",
                "obsah vaší zprávy",
                "datum a čas odeslání",
              ]} />
              <SubHeading>b) Technické a analytické údaje</SubHeading>
              <p>
                Automaticky shromažďujeme anonymizované nebo pseudonymizované údaje o návštěvnosti,
                jako jsou IP adresa, typ prohlížeče, navštívené stránky a doba návštěvy – prostřednictvím
                analytických nástrojů.
              </p>
            </Section>

            <Section number="3" title="Účel a právní základ zpracování">
              <BulletList items={[
                "Kontaktní formulář: zpracování probíhá za účelem odpovědi na váš dotaz; právní základ je váš souhlas nebo oprávněný zájem (čl. 6 odst. 1 písm. a) nebo f) GDPR).",
                "Analytika webu: zpracování probíhá za účelem zlepšení fungování webu; právní základ je oprávněný zájem nebo váš souhlas.",
              ]} />
            </Section>

            <Section number="4" title="Příjemci osobních údajů">
              <p>
                Vaše osobní údaje neprodáváme ani neposkytujeme třetím stranám, s výjimkou:
              </p>
              <BulletList items={[
                "poskytovatelů technických služeb (hosting, e-mailové systémy, analytika), kteří jsou vázáni smlouvou o zpracování osobních údajů",
                "případů, kdy nám to ukládá zákon",
              ]} />
            </Section>

            <Section number="5" title="Předávání do třetích zemí">
              <p>
                Pokud využíváme služby třetích stran se sídlem mimo EHP (např. analytické nástroje),
                probíhá přenos dat v souladu se standardními smluvními doložkami Evropské komise.
              </p>
            </Section>

            <Section number="6" title="Doba uchování údajů">
              <BulletList items={[
                "Údaje z kontaktního formuláře: po dobu nezbytnou pro vyřízení dotazu, nejdéle 2 roky",
                "Analytické údaje: dle nastavení příslušného nástroje, zpravidla do 14 měsíců",
              ]} />
            </Section>

            <Section number="7" title="Vaše práva">
              <p>Máte právo:</p>
              <BulletList items={[
                "přístupu ke svým osobním údajům",
                "opravy nepřesných údajů",
                "výmazu údajů („právo být zapomenut“)",
                "omezení zpracování",
                "přenositelnosti údajů",
                "vznést námitku proti zpracování",
              ]} />
              <p className="mt-4">
                Svá práva můžete uplatnit na:{" "}
                <a href="mailto:support@ecomail.cz" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  support@ecomail.cz
                </a>
              </p>
              <p className="mt-3">
                Máte rovněž právo podat stížnost u dozorového úřadu – v ČR je jím{" "}
                <a href="https://uoou.cz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Úřad pro ochranu osobních údajů (uoou.cz)
                </a>.
              </p>
            </Section>

            <Section number="8" title="Zabezpečení">
              <p>
                Přijímáme technická a organizační opatření k ochraně vašich osobních údajů před
                neoprávněným přístupem, ztrátou nebo zneužitím.
              </p>
            </Section>

            <Section number="9" title="Změny zásad">
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

function SubHeading({ children }: { children: ReactNode }) {
  return <p className="font-semibold text-gray-900 dark:text-white mt-4">{children}</p>;
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
