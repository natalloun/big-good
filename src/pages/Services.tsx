import { ArrowRight, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/asset";

// No third-party images — solid brand gradients only
const productMeta = [
  { color: "from-green-600 to-emerald-500", url: "https://ecomail.cz/",  logo: asset("/images/ecomail-logo.svg") },
  { color: "from-gray-800 to-gray-600",     url: "https://topol.io/",    logo: asset("/images/topol-logo.svg") },
  { color: "from-orange-600 to-orange-400", url: "https://dmarceye.com/",logo: asset("/images/dmarceye-logo.svg") },
  { color: "from-[#EC104B] to-[#9a0030]",  url: "https://lettr.com/",   logo: asset("/images/lettr-logo.svg") },
];

export function Services() {
  const { t, language } = useLanguage();
  const s = t.services;
  const p = (path: string) => `/${language}${path}`;

  return (
    <>
      <SEO
        title="Produkty a služby | Big Good"
        description="Objevte nástroje Big Good: Ecomail pro e-mailový marketing, Topol pro design šablon, DMARCeye pro monitorování DMARC a Lettr pro odesílání e-mailů."
        url="/services"
        lang={language}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 xl:pt-40 xl:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 xl:w-[28rem] xl:h-[28rem] bg-blue-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 xl:w-[26rem] xl:h-[26rem] bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 xl:px-10 relative z-10">
          <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center space-y-5 xl:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight">{s.heroHeading}</h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 font-normal max-w-2xl xl:max-w-3xl mx-auto">{s.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-36 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="grid md:grid-cols-2 gap-6 xl:gap-10 max-w-3xl md:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {s.products.map((product, i) => {
              const meta = productMeta[i];
              return (
                <Card
                  key={product.name}
                  className="group hover-lift hover-scale rounded-3xl border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
                  onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                >
                  <div className={`relative h-36 sm:h-40 md:h-44 xl:h-52 bg-gradient-to-br ${meta.color} flex items-center justify-center`}>
                    <div className="bg-white/95 rounded-xl px-5 xl:px-8 py-2.5 xl:py-4">
                      <img src={meta.logo} alt={product.name} loading="lazy" className="h-7 sm:h-8 xl:h-10 2xl:h-12 w-auto object-contain max-w-[150px] xl:max-w-[200px]" />
                    </div>
                    <span className="absolute top-3 right-3 text-xs font-semibold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pb-1 xl:pb-2 pt-4 xl:pt-5 px-5 xl:px-6">
                    <CardTitle className="text-xl sm:text-2xl xl:text-3xl font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base xl:text-lg font-medium">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 xl:space-y-5 px-5 pb-5 xl:px-6 xl:pb-6">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{product.description}</p>
                    <Button variant="ghost" className="w-full justify-center text-sm sm:text-base font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {s.visitWebsite}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14 xl:mt-20 space-y-4">
            <p className="text-base xl:text-xl text-gray-600 dark:text-gray-400 font-medium">{s.bottomCta}</p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-8 xl:px-12 py-6 xl:py-8 text-base xl:text-xl font-semibold hover-lift" asChild>
              <Link to={p("/contact")}>{s.exploreCta}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
