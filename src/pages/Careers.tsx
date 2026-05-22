import { ArrowRight, Globe, Clock, TrendingUp, Heart, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const perkIcons = [Globe, Clock, TrendingUp, Heart];

const openPositions = [
  {
    title: "Product Marketing Manager pro B2B SaaS",
    level: "Medior",
    location: "Praha",
    type: "Full-time",
    tags: ["Pracovní smlouva", "Freelance", "On-site"],
    description: "Kvalitní produkt je základ, ale sám o sobě nestačí. Hledáme proto někoho, kdo nám pomůže dostat nové i stávající funkce Ecomailu k firmám, které chtějí dělat e-mailing lépe.",
    url: "https://ecomail.cz/kariera/",
  },
  {
    title: "PPC Specialista pro SaaS",
    level: "Medior",
    location: "Praha",
    type: "Full-time",
    tags: ["On-site"],
    description: "Hledáme PPC specialistu s přesahem do webové analytiky a datové analýzy. Zkušenosti se správou PPC kampaní a Google Analytics jsou nutností.",
    url: "https://ecomail.cz/kariera/",
  },
  {
    title: "Specialista technické podpory pro Polsko",
    level: "Junior",
    location: "Praha",
    type: "Full-time",
    tags: ["Pracovní smlouva", "Freelance", "On-site"],
    description: "Hledáme technického specialistu podpory pro polský trh. Budete vyřizovat technické dotazy a požadavky zákazníků v polštině.",
    url: "https://ecomail.cz/kariera/",
  },
  {
    title: "Administrativní asistent/ka",
    level: "Junior",
    location: "Praha",
    type: "Full-time / Part-time",
    tags: ["Pracovní smlouva", "Freelance", "On-site"],
    description: "Poznej svět digitálních financí. Hledáme pečlivého asistenta/ku s přesahem do účetnictví a administrativy.",
    url: "https://ecomail.cz/kariera/",
  },
];

const levelColors: Record<string, string> = {
  Junior: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Medior: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Senior: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export function Careers() {
  const { t } = useLanguage();
  const c = t.careers;

  return (
    <>
      <SEO
        title="Kariéra | Big Good"
        description="Připojte se k týmu Big Good. Prozkoumejte otevřené pozice v Ecomail, Topol, DMARCeye a Lettr."
        url="/careers"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">{c.heading}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {c.description}
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
                {c.positionsHeading}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Aktuální pozice z{" "}
                <a
                  href="https://ecomail.cz/kariera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ecomail.cz/kariera
                </a>
              </p>
            </div>

            <div className="space-y-4">
              {openPositions.map((pos) => (
                <a
                  key={pos.title}
                  href={pos.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${levelColors[pos.level] ?? ""}`}>
                          {pos.level}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {pos.location}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {pos.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {pos.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {pos.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pos.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:self-center flex-shrink-0">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300 whitespace-nowrap">
                        {c.applyBtn}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Spontaneous application */}
            <div className="mt-8 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center space-y-3">
              <p className="text-lg font-black text-gray-900 dark:text-white">{c.spontaneous}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">{c.spontaneousDesc}</p>
              <Button
                variant="outline"
                className="rounded-xl mt-2"
                onClick={() => window.open("https://ecomail.cz/kariera/", "_blank", "noopener,noreferrer")}
              >
                {c.spontaneousCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.perks.map(({ title, desc }, i) => {
              const Icon = perkIcons[i];
              return (
                <div
                  key={title}
                  className="p-8 rounded-3xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                      <p className="text-gray-500 dark:text-gray-300 text-sm">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
