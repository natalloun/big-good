import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "Big Good spouští nový dashboard pro všechny produkty",
    excerpt: "Představujeme jednotné centrum pro správu všech čtyř produktů ekosystému Big Good. Jeden přihlašovací přístup, přehled metrik na jednom místě.",
    category: "Produkt",
    date: "15. ledna 2026",
    readTime: "3 min čtení",
    featured: true,
  },
  {
    id: 2,
    title: "Ecomail překonává 300 000 aktivních uživatelů",
    excerpt: "Dosáhli jsme historického milníku — 300 tisíc aktivních uživatelů napříč všemi plány. Děkujeme za vaši důvěru.",
    category: "Milník",
    date: "8. ledna 2026",
    readTime: "2 min čtení",
    featured: false,
  },
  {
    id: 3,
    title: "DMARCeye přidává podporu BIMI standardu",
    excerpt: "Nová funkce v DMARCeye umožňuje nastavit BIMI záznamy a zobrazit logo firmy přímo v emailovém klientu příjemce.",
    category: "Funkce",
    date: "2. ledna 2026",
    readTime: "4 min čtení",
    featured: false,
  },
  {
    id: 4,
    title: "Topol.io: 500 nových emailových šablon",
    excerpt: "Knihovna šablon v Topol editoru roste — přidáváme 500 nových profesionálních šablon pro různá odvětví.",
    category: "Produkt",
    date: "20. prosince 2025",
    readTime: "2 min čtení",
    featured: false,
  },
  {
    id: 5,
    title: "Jak email marketing ovlivňuje ROI v roce 2026",
    excerpt: "Podrobná analýza dat od našich zákazníků ukazuje, že email marketing stále přináší nejvyšší ROI ze všech digitálních kanálů.",
    category: "Blog",
    date: "10. prosince 2025",
    readTime: "8 min čtení",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Produkt: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Milník: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Funkce: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Blog: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
};

export function News() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium">
              Novinky
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Co je u nás{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                nového
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Aktuality, nové funkce, milníky a tipy z oblasti email marketingu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Featured */}
          {featured && (
            <Card className="mb-12 rounded-3xl border-gray-200 dark:border-gray-700 hover-lift overflow-hidden cursor-pointer group">
              <CardContent className="p-10 space-y-5">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] || ""}`}>
                    {featured.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-500">· {featured.readTime}</span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{featured.excerpt}</p>
                <Button variant="ghost" className="pl-0 text-blue-600 dark:text-blue-400 font-semibold group/btn">
                  Číst celý článek
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Article list */}
          <div className="space-y-4">
            {rest.map((article) => (
              <Card key={article.id} className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift cursor-pointer group">
                <CardContent className="p-7 flex items-start justify-between gap-6">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[article.category] || ""}`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="text-sm text-gray-400">· {article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
