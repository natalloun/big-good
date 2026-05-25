export type BlogCategory = "Announcement" | "Analysis" | "Product Update" | "Case Study" | "Engineering";
export type BlogCompany = "Ecomail" | "Topol" | "DMARCeye" | "Lettr";

// Optional per-language overrides.
// If a translation is provided, it replaces the default (English) field.
// If omitted, the English version is shown regardless of the selected language.
export type BlogPostTranslation = {
  title?: string;
  excerpt?: string;
  content?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  company: BlogCompany | null;
  excerpt: string;
  author: string;
  content: string;
  // Add translated versions here when available.
  // Example: cs: { title: "...", excerpt: "...", content: "..." }
  cs?: BlogPostTranslation;
  de?: BlogPostTranslation;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dmarc-enforcement-gap-q1-2026",
    title: "The DMARC Enforcement Gap: What Q1 2026 Data Shows",
    date: "2026-05-06",
    category: "Analysis",
    company: "DMARCeye",
    author: "Jack Zagorski",
    excerpt: "DMARCeye's Q1 2026 monitoring data reveals that over a third of DMARC-engaged domains remain at p=none and never reach enforcement. Here's why domains stall — and the step-by-step path forward.",
    content: `## DMARC's Enforcement Challenge

DMARC's core purpose is enforcement. The record instructs receiving mail servers how to handle authentication failures: quarantine suspicious messages with \`p=quarantine\` or reject them outright with \`p=reject\`. Until a domain reaches one of those policies, DMARC is just visibility — useful, but not protection.

Q1 2026 findings show that more than a third of monitored domains never progress beyond monitoring-only status.

## Policy Distribution in Q1 2026

Among thousands of actively monitored domains:

- **36.7%** at \`p=none\` — visibility without enforcement
- **36.8%** at \`p=quarantine\` — failed messages directed to spam
- **26.5%** at \`p=reject\` — full enforcement with message refusal

Only approximately one-quarter of monitored domains operate under full enforcement. The data also notes that 28% of public internet domains lack DMARC records entirely.

## What Monitor-Only Protection Entails

A \`p=none\` record instructs receiving servers to deliver failed authentication messages while generating reports. Domain owners gain visibility into both forgotten legitimate services and impersonation attempts — yet no blocking occurs. A spoofed message reaches the inbox just like a legitimate one would.

Monitor-only serves as a reasonable starting point before tightening policies. However, indefinite monitoring means collecting impersonation evidence without taking protective action.

## Practical Costs of Remaining at p=none

Three primary risk areas emerge for organizations staying at monitoring-only:

**Spoofed messages reach inboxes.** Phishing campaigns impersonating the domain land in customer and employee mailboxes without policy enforcement.

**Legitimate mail reputation suffers.** Receiving servers track failed authentication patterns against domain reputation. Over time, accumulated spoofed activity can push legitimate mail toward spam folders.

**Bulk sender compliance is minimal.** Google and Yahoo's February 2024 guidelines require DMARC records for senders exceeding 5,000 daily messages. Publishing at \`p=none\` meets baseline requirements while their algorithms continue factoring enforcement posture into delivery decisions.

## Why Domains Remain at Monitor-Only

Observable patterns from the dataset include:

- **Legitimate mail delivery concerns** — teams fear policy tightening might quarantine forgotten third-party services
- **Absent guidance on next steps** — most monitoring tools display raw reports without actionable per-domain recommendations
- **Lost ownership** — original DMARC implementers depart without transferring authority or institutional knowledge
- **Overlooked value** — until a spoofing incident lands, enforcement competes with many other priorities

## Safe Progression to Enforcement

The documented path from \`p=none\` to \`p=reject\` follows these steps:

1. **Monitor aggregate reports for 2–4 weeks** to establish a stable baseline of legitimate senders
2. **Authenticate every legitimate sender** — ESPs, transactional services, marketing platforms, billing systems, and internal relays must align with SPF or DKIM (preferably both)
3. **Transition to \`p=quarantine\` first** — failed messages move to spam rather than outright rejection, allowing observation during the transition
4. **Move to \`p=reject\`** — with proper upstream preparation, this shift is mostly invisible to operations

The Q1 report notes that only 6% of enforcing domains use the \`pct=\` tag for staged percentage rollout. Most teams jump directly from \`p=none\` to 100% enforcement. The forthcoming DMARCbis standard revision removes \`pct=\` entirely, making thorough preparation the necessary path forward.`,
    cs: {
      title: "Mezera v prosazování DMARC: třetina zapojených domén nikdy nedojde k cíli (Q1 2026)",
      excerpt: "Data DMARCeye za Q1 2026 ukazují, že 36,7 % zapojených domén stále zůstává na p=none. Co to stojí a jak se bezpečně dostat k plnému prosazování.",
      content: `Celý smysl DMARC je prosazování. Záznam říká přijímajícím poštovním serverům, co mají dělat se zprávami, které neprojdou autentizací: poslat je do spamu pomocí \`p=quarantine\`, nebo je rovnou odmítnout pomocí \`p=reject\`. Dokud doména nedosáhne jedné z těchto politik, je DMARC jen viditelnost. Užitečná, ale ne ochrana. Data za Q1 2026 z monitorovací platformy DMARCeye ukazují, že více než třetina domén zapojených do DMARC se nikdy dál nedostane.

## Kde se domény zapojené do DMARC nacházejí v Q1 2026

Mezi tisíci doménami, které DMARCeye aktivně monitoruje, vypadá rozdělení politik takto:

- **36,7 %** na \`p=none\`: pouze monitoring. DMARC záznam existuje, ale příjemcům není řečeno, co dělat, když autentizace selže.
- **36,8 %** na \`p=quarantine\`: zprávy, které neprojdou, jdou do spamu.
- **26,5 %** na \`p=reject\`: plné prosazování. Zprávy, které neprojdou, jsou odmítnuty.

Asi třetina monitorovaných domén je stále ve fázi viditelnosti. Plného prosazování dosáhla jen asi čtvrtina. Prostřední úroveň, quarantine, je největší jednotlivá skupina.

Tento nález se týká domén, které již jsou zapojené do DMARC. Kompletní zpráva srovnává tuto skupinu s odděleným vzorkem ze skeneru veřejně dostupných internetových domén. V tomto vzorku **28 %** domén nemá žádný DMARC záznam.

## Co vlastně chrání režim "pouze monitoring"

DMARC záznam na \`p=none\` říká přijímajícím serverům: "pokud zpráva neprojde zarovnáním SPF a DKIM, doruč ji stejně, ale pošli zprávu o tom." Vlastník domény získává viditelnost — jak do legitimní pošty ze zapomenutých služeb, tak do pokusů o zneužití identity. Ale žádné blokování se neděje. Podvržená zpráva se dostane do schránky stejně jako legitimní.

Pouze monitoring je dobrý výchozí bod. Bez monitorovacích dat nelze politiku bezpečně přitvrdit. Sedět na \`p=none\` donekonečna ale znamená, že sbíráte důkazy o zneužití identity a nikdy s tím nic neděláte.

## Co vás setrvávání na p=none ve skutečnosti stojí

U většiny firem se praktické riziko setrvávání na \`p=none\` projevuje na třech místech:

**Spoofing se dostává do schránek.** Phishingová kampaň, která se vydává za vaši doménu, dorazí do schránek vašich zákazníků nebo zaměstnanců, protože není v platnosti žádná politika, která by ji zastavila.

**Skutečná pošta se přesouvá ke spamové složce.** Přijímající servery netrestají režim pouze monitoring přímo, ale sledují zprávy s neúspěšnou autentizací proti reputaci vaší domény. Podvržená pošta na vaše jméno autentizací neprojde. Po týdnech aktivity útočníků začne tento zaznamenaný vzorec ovlivňovat, kam se vaše legitimní pošta dostane.

**Požadavky pro hromadné odesílatele jsou splněny jen minimálně.** Pokyny Googlu a Yahoo z února 2024 vyžadují DMARC záznam pro odesílatele nad 5 000 zpráv denně. Publikace na \`p=none\` s reportingem splňuje minimum. Jejich filtrovací algoritmy ale stále zohledňují DMARC postoj při rozhodování o doručení.

## Proč domény zůstávají na p=none

- **Strach z rozbití legitimní pošty.** Přitvrzení politiky by mohlo poslat do karantény nebo odmítnout poštu od služby třetí strany, kterou tým zapomněl zdokumentovat.
- **Žádné jasné vodítko k dalšímu kroku.** Většina monitorovacích nástrojů zobrazuje surové agregované reporty a interpretaci nechává na týmu.
- **Zapomenutá odpovědnost.** Člověk, který DMARC monitoring nastavoval, odešel. Nikdo jiný nemá pravomoc přepnout vypínač.
- **Podcenění přínosu.** Dokud nedojde k incidentu se spoofingem, je prosazování jednou z mnoha priorit, které si konkurují o pozornost.

## Bezpečný přechod od monitoringu k prosazování

Cesta z \`p=none\` na \`p=reject\` je dobře zdokumentovaná a nevyžaduje skok do neznáma:

1. **Čtěte své agregované reporty alespoň 2–4 týdny.** Potřebujete stabilní obraz toho, co se odesílá pod jménem vaší domény.
2. **Autentizujte každého legitimního odesílatele.** Váš ESP, transakční služba, marketingová platforma, fakturační systém i interní mail relay musí být zarovnané pro SPF nebo DKIM. Ideálně oba, protože DKIM přežije přeposílání a SPF ne.
3. **Přejděte nejprve na \`p=quarantine\`.** Pošta, která neprojde, jde do spamu, ne do /dev/null. Sledujte reporty týden nebo dva.
4. **Přejděte na \`p=reject\`.** Pokud jste krok 2 udělali správně, je tento posun většinou neviditelný.

Jedno související zjištění z Q1 zprávy: pouze asi **6 %** prosazujících domén používá vestavěný tag \`pct=\` z DMARC pro postupné procentuální nasazování. Připravovaná revize standardu DMARCbis odstraňuje \`pct=\` úplně, což z "udělejte si přípravu" dělá binární cestu.`,
    },
  },
  {
    slug: "dmarceye-goes-global-ai-native-dmarc-monitoring",
    title: "DMARCeye Goes Global with AI-Native, Guidance-Based DMARC Monitoring",
    date: "2026-03-03",
    category: "Announcement",
    company: "DMARCeye",
    author: "Jack Zagorski",
    excerpt: "DMARCeye announces its global expansion as a standalone product with a dedicated team, roadmap, and branding. The platform's data shows 43.7% of monitored domains are still stuck at p=none — and DMARCeye is built to change that.",
    content: `Today, DMARCeye announces its global expansion with a dedicated team, product roadmap, and branding. Originally developed in 2024 by Ecomail — a European email marketing platform serving over 12,000 customers — DMARCeye is now actively developed and marketed as a standalone product.

The platform gives teams with any level of DMARC expertise visibility into who sends email on their behalf, plus domain-specific steps for safely moving to full enforcement.

## Background: Built and Battle-Tested Inside Ecomail

DMARCeye was initially developed in response to Google and Yahoo's 2024 tightening of bulk sender authentication requirements. The platform was tested in production across thousands of domains in high-volume sending environments — over 1 billion emails sent monthly — before expanding to worldwide customers.

The platform targets IT, security, and marketing teams, as well as agencies managing multiple domains, who need actionable visibility and contextual guidance rather than raw XML reports.

## What DMARCeye Does

DMARCeye helps users:

- Identify legitimate and unauthorized sending sources
- Detect SPF, DKIM, and DMARC configuration issues
- Move safely from \`p=none\` (monitor-only) to enforcement with AI-powered instructions and alerts
- Connect DMARC data to AI assistants like ChatGPT via Model Context Protocol (MCP) support

"Gradual DMARC enforcement is essential for modern domain security. But most teams still get stuck at monitoring and never reach safe enforcement," says Jan Tlapák, CEO of Ecomail and Founder of DMARCeye. "That's why DMARCeye goes beyond dashboards and gives teams personalized next steps."

## Key Data from the Monitoring Dataset

Insights from DMARCeye's dataset reinforce why implementation guidance matters:

- **43.7%** of domains with DMARC remain at \`p=none\` (monitor-only)
- Only **19.3%** have reached \`p=reject\` (full enforcement)
- Just **6.0%** of enforcing domains use staged rollout with \`pct\` settings below 100

Most teams enforce all-or-nothing at 100% — increasing disruption risk during policy changes and highlighting the need for clearer, personalized instruction.

## Expanded Product Experience

In addition to monitoring, alerting, and guided enforcement, DMARCeye is launching free online tools to help teams diagnose and resolve common authentication issues faster:

- DMARC record configurator
- DNS, SPF, DKIM, and BIMI checkers

There is also a **free plan** for single domains with a monitoring cap of 5,000 emails monthly. Standard pricing starts at **$4 per domain per month**.

"DMARCeye represents the same philosophy that drove the development of Topol and Lettr: a lightweight tool that solves a specific problem extremely well, without bloated complexity," says Jakub Stupka, Co-founder at Ecomail and DMARCeye. "As new market needs arise, we'll keep spinning out specialized, standalone products."

DMARCeye is part of the **Big Good** ecosystem — an Ecomail-led collection of tools for marketing professionals and developers working across email communication, content, security, and design.`,
    cs: {
      title: "DMARCeye oznamuje globální expanzi a MCP integraci",
      excerpt: "Globální expanze DMARCeye: MCP integrace a řízený přechod k DMARC enforcementu chrání domény a zlepšují doručitelnost ve více než 70 zemích.",
      content: `DMARCeye vyhlašuje svou globální expanzi s dedikovaným týmem, jasnými cíli produktového vývoje a vlastním brandingem. Platforma byla vyvinuta v roce 2024 společností Ecomail a důkladně prověřena v prostředí s vysokým objemem zpráv. Nyní se vyvíjí jako samostatný produkt, který pomáhá týmům různých úrovní technické zběhlosti pochopit, kdo odesílá emaily jménem jejich domény, a nabízí konkrétní kroky k bezpečnému vynucování DMARC.

## Původ a vývoj

Vývojáři vytvořili DMARCeye jako odpověď na přísnější požadavky Google a Yahoo na hromadné odesílatele v roce 2024 a rostoucí zájem odesílatelů ze střední Evropy. Před globálním rozšířením byl produkt testován na tisících domén s měsíčním objemem přes 1 miliardu emailů.

## Co DMARCeye umí

Platforma slouží IT, bezpečnostním a marketingovým týmům, stejně jako agenturám spravujícím více domén. Nahrazuje surové XML reporty praktickou viditelností a kontextovými pokyny. Uživatelé mohou:

- Identifikovat legitimní a neoprávněné odesílací zdroje
- Odhalit chyby v konfiguraci SPF, DKIM a DMARC
- Bezpečně přecházet z monitorování (\`p=none\`) k vynucování s pomocí AI pokynů a alertů
- Propojit DMARC data s AI asistenty jako ChatGPT přes podporu Model Context Protocol (MCP)

## Klíčová data z monitorovacího datasetu

Z monitorovaného vzorku tisíců domén vyplývá:

- **43,7 %** domén s DMARC zůstává pouze v režimu monitorování (\`p=none\`)
- Pouze **19,3 %** dosáhlo plného vynucování (\`p=reject\`)
- Jen **6,0 %** vynucujících domén využívá postupné zavádění s nastavením \`pct\` pod 100

„Postupné vynucování DMARC je zásadní pro moderní bezpečnost domén. Ale většina týmů stále zůstane uvíznuta v monitoringu a nikdy nedosáhne bezpečného vynucování," říká **Jan Tlapák**, CEO Ecomail a zakladatel DMARCeye. „Proto DMARCeye přesahuje pouhé dashboardy a dává týmům personalizované další kroky."

## Rozšířený produktový rozsah

Platforma zahrnuje bezplatné online diagnostické nástroje:

- DMARC Record Configurator
- Kontroly DNS, SPF, DKIM a BIMI

Bezplatný plán pokrývá jednu doménu s limitem 5 000 emailů měsíčně. Základní cena začíná na **4 USD za doménu měsíčně**.

„DMARCeye představuje stejnou filozofii, která stojí za vývojem Topol a Lettr: lehký nástroj, který extrémně dobře řeší konkrétní problém bez zbytečné složitosti," říká **Jakub Stupka**, spoluzakladatel Ecomail a DMARCeye. „S tím, jak vznikají nové tržní potřeby, budeme nadále vyčleňovat specializované samostatné produkty."

## Ekosystém Big Good

DMARCeye je součástí ekosystému **Big Good** — sbírky nástrojů vedených Ecomailem pro marketingové profesionály a vývojáře pracující s emailovou komunikací, obsahem, bezpečností a designem.`,
    },
  },
  {
    slug: "topol-launches-lettr-transactional-email-platform",
    title: "Topol.io Launches Lettr: A Transactional Email Platform Built for Developers and Marketers",
    date: "2026-02-17",
    category: "Announcement",
    company: "Lettr",
    author: "Jack Zagorski",
    excerpt: "Topol.io introduces Lettr — a transactional email platform that lets developers set up sending once while giving marketing and product teams full ownership of email content. Built on Ecomail's proven infrastructure.",
    content: `We are proud to announce a new product built by the Topol team: **Lettr**, a transactional email platform that includes the Topol editor. Built on the proven email infrastructure of Ecomail, Lettr supports first-party domain controls for tracking and hosted assets, as well as content-editing workflows for non-developers.

The platform is intended for both early-stage startups and high-volume enterprise senders. It enables development teams to configure email sending logic once, and product and marketing teams to take full ownership of evolving email content.

## Solved: Common Limitations with Transactional Email

Nearly every business needs to send transactional emails — account verifications, password resets, subscription confirmations. In theory, these are simple. In practice, developers run into two recurring problems.

**First**, customer-facing parts of emails (tracked links, hosted assets) live on shared vendor domains — whose reputations developers don't control.

**Second**, templates are only editable via code, turning every copy or design update into a developer ticket.

Lettr solves both of these problems.

## For Developers: Custom Domains for Better Deliverability

With Lettr, development teams can use their **own domains for sending, tracking, inbound replies, and asset storage**. This keeps emails on-brand and provides more in-house control over email deliverability.

This is uncommon among transactional platforms because it requires mature infrastructure for DNS setup, routing, and certificate management. Lettr can offer this because it's built on Ecomail's enterprise-grade infrastructure — 12 years of systems that make these configurations practical and affordable.

For high-volume enterprise senders, Lettr also offers **dedicated IP pools and custom rate limits**.

Other developer-focused features include:
- Event **webhooks** for accepted, delivered, delayed, bounced, opened, clicked, and spam events
- **90-day API logs** for troubleshooting
- Optional **type-safe mail objects** to keep templates and code in sync
- **Laravel integration** with a one-command setup

## For Marketing and Product Teams: Full Template Ownership

For marketers and product owners, Lettr provides **full control over templates, drafts, publishing, and versioning** via Topol's intuitive drag-and-drop editor — used by over 40,000 companies.

Once developers implement trigger conditions, non-developer teams take full control of content without filing a ticket.

Notable features for marketers include:
- **Template library** for common transactional emails
- **Easy multilingual template management**
- **Dynamic placeholders**
- **Synced sections** — update a master section once and apply it across all templates automatically
- **Full lifecycle analytics suite**

## Built for Transactional Email Only

Lettr is focused purely on transactional email and does not offer bulk sending or contact list imports.

"We kept Lettr transactional-only because mixing marketing and transactional workflows usually creates complexity where teams least want it," says Jakub Gause, CEO of Topol.io.

Lettr is the latest standalone product to emerge from the Ecomail ecosystem, following Topol and DMARCeye. Together, they form the first stage of **Big Good** — an ecosystem of tools for marketing professionals and developers working across email, content, security, and design.

For more information, visit [lettr.com](https://lettr.com).`,
  },
  {
    slug: "dmarceye-new-free-tools",
    title: "New Free Tools Now Available on DMARCeye",
    date: "2026-02-09",
    category: "Product Update",
    company: "DMARCeye",
    author: "Jack Zagorski",
    excerpt: "DMARCeye has expanded its free tools section with practical utilities for validating and configuring DMARC, SPF, DKIM, and BIMI records — no account required.",
    content: `Email authentication should not require guesswork or a collection of disconnected online tools. Yet for many teams, configuring DMARC, SPF, DKIM, or BIMI still involves trial and error, DNS lookups, and uncertainty about whether records are correctly published.

To reduce that friction, DMARCeye has expanded the Free Tools section of its website and app with practical utilities designed to help you validate, configure, and troubleshoot your domain records with confidence.

These tools are available publicly at [dmarceye.com/free-tools](https://dmarceye.com/free-tools) — no account required.

## Why Email Authentication Is Still Often Misconfigured

DMARC, SPF, DKIM, and BIMI are now baseline requirements for domain protection and inbox placement. At the same time, these standards are DNS-based and highly syntax-sensitive. A missing tag, an invalid include mechanism, or a selector typo can cause:

- Unexpected DMARC failures
- Alignment issues between SPF and DKIM
- Reduced inbox placement
- Increased spoofing risk

The new Free Tools are designed to eliminate that configuration friction.

## What's New

### DMARC Record Configurator

Generates a properly formatted DMARC record step by step. Instead of manually assembling tags like \`p\`, \`rua\`, \`ruf\`, or \`pct\`, the configurator guides you through the setup and ensures correct formatting. It also encourages best-practice defaults based on your enforcement stage.

### DNS Checker

Lets you quickly inspect published records and confirm what's actually visible in DNS. Especially useful after publishing new records, updating sending infrastructure, or investigating authentication failures.

### SPF Checker

Validates your SPF record and identifies common structural issues such as syntax errors or excessive DNS lookups. SPF failures often surface indirectly through DMARC alignment problems.

### DKIM Checker

Verifies that your DKIM public key is correctly published and accessible using the specified selector. Even a small selector error can cause persistent DMARC alignment failures.

### BIMI Checker

Confirms that your BIMI record is correctly configured and accessible. BIMI requires precise DNS setup and a properly formatted logo file — validation removes ambiguity.

## Integrated in the App

All tools are also fully integrated inside the DMARCeye app. DMARCeye users can validate records, investigate authentication issues, and monitor their domains in one environment instead of switching between external services.

## Standalone Tools vs. Continuous Monitoring

Standalone checkers are helpful. Continuous visibility is essential.

DMARCeye turns raw DMARC aggregate reports into actionable insight by providing ongoing visibility into who sends on your behalf, early detection of suspicious sending sources, guided transitions from monitoring to enforcement, and integrated DNS utilities alongside monitoring data — including MCP Server support for connecting DMARC data to AI assistants like ChatGPT.

The Free Tools help you validate individual records. DMARCeye helps you manage your entire authentication posture over time.`,
  },
  {
    slug: "ecomail-2025-growth-milestones",
    title: "Ecomail in 2025: 38% Growth, New Features, and Key Milestones",
    date: "2026-01-28",
    category: "Announcement",
    company: "Ecomail",
    author: "Klára Palkosková",
    excerpt: "Ecomail grew 38% year-over-year in 2025, surpassing 200M CZK in revenue. Here's a look at the product updates, team growth, and milestones that shaped the year.",
    content: `## 2025 by the Numbers

- **34 new team members** joined across all departments
- **38% year-over-year growth**, surpassing **200M CZK** in revenue
- New **CDP Analytics** functionality launched and actively developed
- Accounting team processed over **86,000 documents**
- Team attended **45+ e-commerce events** across the Czech Republic, Slovakia, and Poland
- Hosted **2 ShopMasters** community events
- Sales team completed **1,700 demo calls**

On Black Friday (November 28, 2025), the platform processed **28.49 million emails** in a single day.

## New Home in Prague

In autumn 2025, Ecomail moved into a larger space in the heart of Prague — Na Příkopě, close to the Legitas law firm. The relocation took just three weeks and involved 140 moving boxes.

## Product: What Shipped in 2025

Ecomail's development team shipped significant updates throughout the year:

- **CDP Analytics** — deeper customer data platform capabilities for more powerful segmentation and targeting
- AI-assisted **preheader generation**
- Redesigned **account overview**, Automations, and Reports sections
- **Favorite segments** pre-set in the app
- Extended **automation wait conditions** for email series
- New integrations with **Ellity** and **1CLICK**

### CDP Analytics in Detail

**RFM Analysis** — segments contacts by order count, value, and purchase frequency, enabling better-targeted campaigns at the right time.

**Conversion Analysis** — tracks purchase behavior including conversions, email performance, and average order value.

**Product Analysis** — surfaces which products sell most frequently, which items are commonly bought together, and what customers tend to reorder.

## Events and Community

The team attended **31 conferences and trade fairs**. Ecomail hosted the 7th and 8th editions of ShopMasters — both with strong attendance. Speakers presented in Prague, Ostrava, and Bratislava.

Customer success delivered:
- **125+ individual training sessions**
- **142+ newsletter design templates**
- **126+ individual consultations**
- **90+ automation scenario builds**

## Partner Agencies

Two dedicated agency partner meetups were held, with discussions on feedback, upcoming features, and networking. A case study on TOMAS ARSOV's email strategy with agency Webscale was published, alongside a new Glossary of Terms section on the website and **40+ new blog articles**.

## Customer Support

An AI chatbot was introduced to speed up first-response communication. The support team achieved a **92% satisfaction rating** from clients, available via chat, email, and phone on working days.

## Polish Market Expansion

2025 saw a focused push on the Polish market: a dedicated Polish office was opened, the team participated in **16 events and trade fairs**, and new partnerships were established with Polish marketing agencies.

## The Ecosystem Beyond Ecomail

**Topol** — the drag-and-drop email editor, used by organizations including the BBC, Spendee, and Deloitte, with the largest user concentrations in the US, UK, Japan, and Brazil.

**DMARCeye** — monitoring and managing sending domains for deliverability and security, now tracking over **10,000 sending domains** across **50+ countries** and available in 5 languages.`,
  },
  {
    slug: "topol-spins-out-from-ecomail-standalone-email-editor",
    title: "Topol.io Spins Out from Ecomail, Launches as Proven Standalone Email Editor",
    date: "2025-09-02",
    category: "Announcement",
    company: "Topol",
    author: "Jack Zagorski",
    excerpt: "After more than a decade under Ecomail's umbrella, Topol.io has officially separated to operate as an independent entity. The standalone email editor now serves over 12,000 customers, with its plugin embedded in nearly 200 SaaS platforms.",
    content: `After more than a decade of development under Ecomail's umbrella, Topol.io has officially separated to operate as an independent company. In August 2025, TOPOL.io s.r.o. took over all customer contracts, development resources, and support responsibilities related to the Topol product line.

## From Internal Tool to Standalone Product

Initially only available within the Ecomail platform, Topol became accessible as a standalone app and embeddable plugin in 2017. Today, the product serves over **12,000 customers** across both offerings, with the plugin — embedded in nearly **200 SaaS platforms** — demonstrating the strongest market momentum.

The expansion of Topol's customer base and the accelerating adoption of its plugin necessitated this legal and organizational split.

## What the Spinout Means

This strategic milestone enables Topol to pursue its own roadmap, brand identity, and developer-first product strategy.

"The Topol app is — and always will be — optimized for business professionals that want to quickly build responsive email templates. But after seeing how much dev teams value our embeddable plugin, we've decided to concentrate even more effort on meeting their needs," says Jakub Gause, Topol.io's Head of Development.

## How Topol Serves Developers and Marketers

**For developers:** Topol's white-label editor can be integrated into SaaS products like CRMs with just a few lines of code, enabling users to build pixel-perfect emails without leaving the host application.

**For marketers:** Topol's clean interface enables essential email features and integrates directly with dozens of email service providers.

Key features include:
- Row-level looping and merge tags
- Mobile/desktop visibility controls
- Multi-language support
- Clean, standards-compliant HTML export
- Predictable per-seat pricing (not usage-based)

## What's Next

Looking ahead, Topol.io plans to expand into a full suite of embeddable communication tools. A landing page builder is already in development, with modules for transactional email orchestration, media asset management, and AI-powered email generation also in exploration.

## More Spinouts Coming

Topol is the first of several standalone tools emerging from Ecomail's internal R&D. Others — including DMARCeye (a domain authentication monitor) — are also evolving toward independent products. These tools form the early stages of **Big Good**: a modular ecosystem designed for developers and business professionals working across email communication, security, and design.

"The Topol spinout is just the beginning. Soon, we plan on spinning out more lightweight, embeddable tools that give teams the freedom to build the email stack they need, without vendor lock-in or bloated complexity," says Jakub Stupka, Co-Founder of Ecomail and Topol.io.`,
  },
];

export const ALL_COMPANIES: BlogCompany[] = ["Ecomail", "Topol", "DMARCeye", "Lettr"];
export const ALL_CATEGORIES: BlogCategory[] = ["Announcement", "Analysis", "Product Update", "Case Study", "Engineering"];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Returns locale-aware field — falls back to English if translation is missing.
export function localizedField(
  post: BlogPost,
  field: keyof BlogPostTranslation,
  lang: string
): string {
  const t = lang === "cs" ? post.cs : lang === "de" ? post.de : undefined;
  return (t?.[field] as string | undefined) ?? (post[field as keyof BlogPost] as string);
}

export function formatDate(dateStr: string, lang = "en"): string {
  const locale = lang === "cs" ? "cs-CZ" : lang === "de" ? "de-DE" : "en-US";
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
