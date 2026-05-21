import { Link } from "react-router-dom";
import { ArrowRight, Globe, Clock, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const perkIcons = [Globe, Clock, TrendingUp, Heart];

const toolMeta = [
  { color: "from-green-600/75 to-emerald-500/75", url: "https://ecomail.cz/", image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80" },
  { color: "from-gray-900/75 to-gray-700/75", url: "https://topol.io/", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
  { color: "from-orange-600/75 to-orange-400/75", url: "https://dmarceye.com/", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
  { color: "from-purple-800/75 to-purple-600/75", url: "https://lettr.com/", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
];

const statKeys = ["tools", "users", "countries"] as const;
const statValues = ["4", "300k+", "70+"];

export function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16 pb-20">
          <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="space-y-2">
              <span className="block text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tight leading-none pb-[0.2em] bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent">
                Big Good
              </span>
              <span className="block text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 tracking-tight max-w-2xl mx-auto leading-snug pt-2">
                {h.subtitle}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {h.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift px-8 py-6 text-base font-semibold" asChild>
                <Link to="/services">
                  {h.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-6 text-base font-semibold" asChild>
                <Link to="/about">{h.learn}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              {statKeys.map((key, i) => (
                <div key={key} className="space-y-1">
                  <div className="text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">{statValues[i]}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{h.stats[key]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools preview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">{h.toolsHeading}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-normal">{h.toolsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.services.products.map((product, i) => {
              const meta = toolMeta[i];
              return (
                <Card
                  key={product.name}
                  className="group hover-lift hover-scale border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img src={meta.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta.color}`} />
                    <span className="relative z-10 flex items-center justify-center h-full text-white font-black text-2xl drop-shadow">{product.name[0]}</span>
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{product.category}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.tagline}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="rounded-2xl border-2 px-8 py-5 font-semibold hover-lift" asChild>
              <Link to="/services">
                {h.toolsCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values teaser */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">{h.valuesHeading}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-normal">{h.valuesDesc}</p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-8 py-6 text-base font-semibold hover-lift" asChild>
              <Link to="/about">
                {h.valuesCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">{h.careersHeading}</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-normal">{h.careersDesc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {h.perks.map(({ title, desc }, i) => {
              const Icon = perkIcons[i];
              return (
                <div key={title} className="p-7 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 text-left">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-white/70 text-sm">{desc}</p>
                </div>
              );
            })}
          </div>

          <Button size="lg" className="rounded-2xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl px-8 py-6 text-base font-semibold hover-lift" asChild>
            <Link to="/careers">
              {h.careersCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
