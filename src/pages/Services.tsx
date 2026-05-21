import { ArrowRight, Mail, Shield, FileText, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Mail,
    name: "Ecomail",
    tagline: "Email marketing platforma",
    description: "Kompletní nástroj pro email marketing — tvorba kampaní, automatizace, segmentace a detailní analytika. Oblíbený nástroj tisíců českých i slovenských firem.",
    color: "from-green-500 to-emerald-500",
    url: "https://ecomail.cz/",
    features: ["Vizuální editor", "Automatizace", "A/B testování", "Analytika"],
  },
  {
    icon: FileText,
    name: "Topol",
    tagline: "Email template builder",
    description: "Drag & drop editor pro tvorbu profesionálních emailových šablon. Stovky připravených šablon, responzivní design, export do všech platforem.",
    color: "from-gray-800 to-gray-600",
    url: "https://topol.io/",
    features: ["Drag & drop", "500+ šablon", "Export", "White-label"],
  },
  {
    icon: Shield,
    name: "DMARCeye",
    tagline: "DMARC monitoring & bezpečnost",
    description: "Nástroj pro monitoring DMARC, SPF a DKIM nastavení. Ochrana vaší domény před email spoofingem a phishingovými útoky v reálném čase.",
    color: "from-orange-500 to-orange-400",
    url: "https://dmarceye.com/",
    features: ["DMARC monitoring", "SPF/DKIM", "Real-time alerty", "Reporting"],
  },
  {
    icon: Send,
    name: "Lettr",
    tagline: "Email signature manager",
    description: "Centrální správa emailových podpisů pro celou firmu. Jednotná firemní identita v každém odeslaném emailu, jednoduché nasazení bez IT.",
    color: "from-purple-700 to-gray-800",
    url: "https://lettr.com/",
    features: ["Centrální správa", "Brand konzistence", "Snadné nasazení", "Analytics"],
  },
];

export function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium">
              Produkty & Služby
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Náš{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                ekosystém
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Čtyři propojené nástroje, které pokrývají celý životní cyklus email marketingu — od tvorby šablony po monitoring bezpečnosti.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.name}
                  className="group hover-lift hover-scale rounded-3xl border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
                  onClick={() => window.open(product.url, "_blank", "noopener,noreferrer")}
                >
                  <div className={`relative h-44 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20 bg-grid-white/10" />
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-base font-medium">{product.tagline}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full justify-center font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      Zjistit více
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
