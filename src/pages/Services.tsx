import { ArrowRight, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const productMeta = [
  { color: "from-green-600/65 to-emerald-500/65", image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80", url: "https://ecomail.cz/", logo: "/images/ecomail-logo.svg" },
  { color: "from-gray-900/65 to-gray-700/65", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80", url: "https://topol.io/", logo: "/images/topol-logo.svg" },
  { color: "from-orange-600/65 to-orange-400/65", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", url: "https://dmarceye.com/", logo: "/images/dmarceye-logo.svg" },
  { color: "from-[#EC104B]/65 to-[#9a0030]/65", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", url: "https://lettr.com/", logo: "/images/lettr-logo.svg" },
];

export function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <SEO
        title="Produkty a služby | Big Good"
        description="Objevte nástroje Big Good: Ecomail pro e-mailový marketing, Topol pro design šablon, DMARCeye pro monitorování DMARC a Lettr pro odesílání e-mailů."
        url="/services"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 xl:pt-40 xl:pb-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 xl:w-[28rem] xl:h-[28rem] bg-blue-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 xl:w-[26rem] xl:h-[26rem] bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 xl:px-10 relative z-10">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight">{s.heroHeading}</h1>
            <p className="text-xl md:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 font-normal max-w-3xl xl:max-w-4xl mx-auto">{s.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 xl:py-32 2xl:py-40 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="grid md:grid-cols-2 gap-8 xl:gap-10 max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            {s.products.map((product, i) => {
              const meta = productMeta[i];
              return (
                <Card
                  key={product.name}
                  className="group hover-lift hover-scale rounded-3xl border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
                  onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                >
                  <div className="relative h-44 xl:h-56 2xl:h-64 overflow-hidden">
                    <img src={meta.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta.color}`} />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="bg-white/95 rounded-xl px-6 xl:px-8 py-3 xl:py-4">
                        <img src={meta.logo} alt={product.name} className="h-8 xl:h-10 2xl:h-12 w-auto object-contain max-w-[180px] xl:max-w-[220px]" />
                      </div>
                    </div>
                    <span className="absolute top-4 right-4 z-10 text-xs xl:text-sm font-semibold text-white/90 bg-white/15 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2 xl:pb-3">
                    <CardTitle className="text-2xl xl:text-3xl font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-base xl:text-lg font-medium">{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 xl:space-y-5">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed xl:text-lg">{product.description}</p>
                    <Button variant="ghost" className="w-full justify-center font-semibold xl:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {s.visitWebsite}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 xl:mt-28 space-y-4">
            <p className="text-xl xl:text-2xl text-gray-600 dark:text-gray-400 font-medium">{s.bottomCta}</p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-10 xl:px-12 py-7 xl:py-8 text-lg xl:text-xl font-semibold hover-lift" asChild>
              <Link to="/contact">
                {s.exploreCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
