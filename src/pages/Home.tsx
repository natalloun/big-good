import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Globe, Clock, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const perkIcons = [Globe, Clock, TrendingUp, Heart];

// No third-party images — just brand colours + logos
const toolMeta = [
  { color: "from-green-600 to-emerald-500", url: "https://ecomail.cz/",  logo: "/images/ecomail-logo.svg" },
  { color: "from-gray-800 to-gray-600",     url: "https://topol.io/",    logo: "/images/topol-logo.svg" },
  { color: "from-orange-600 to-orange-400", url: "https://dmarceye.com/",logo: "/images/dmarceye-logo.svg" },
  { color: "from-[#EC104B] to-[#9a0030]",  url: "https://lettr.com/",   logo: "/images/lettr-logo.svg" },
];

const statKeys = ["tools", "users", "countries"] as const;
const statValues = ["4", "300k+", "70+"];

export function Home() {
  const { t, language } = useLanguage();
  const h = t.home;
  const p = (path: string) => `/${language}${path}`;

  return (
    <>
      <SEO
        title="Big Good | Email Marketing Ecosystem"
        description="Big Good je ekosystém nástrojů pro e-mailový marketing — Ecomail, Topol, DMARCeye a Lettr. Provozuje ECOMAIL.CZ, s.r.o."
        url="/"
        lang={language}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 xl:w-[30rem] xl:h-[30rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 xl:w-[36rem] xl:h-[36rem] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 xl:px-10 relative z-10 pt-20 pb-16 md:pt-16 md:pb-20 xl:pt-24 xl:pb-28">
          <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center space-y-5 xl:space-y-8 animate-fade-in">
            <h1 className="space-y-2">
              <span className="block text-[2.75rem] sm:text-6xl md:text-[7rem] lg:text-[10rem] xl:text-[13rem] 2xl:text-[15rem] font-black tracking-tight leading-none pb-[0.2em] bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent">
                Big Good
              </span>
              <span className="block text-base sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-700 dark:text-gray-200 tracking-tight max-w-2xl xl:max-w-3xl mx-auto leading-snug">
                {h.subtitle}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-xl xl:max-w-2xl mx-auto leading-relaxed font-normal">
              {h.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xl:gap-5 pt-1">
              <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift px-6 sm:px-8 xl:px-10 py-5 sm:py-6 xl:py-7 text-sm sm:text-base xl:text-lg font-semibold" asChild>
                <Link to={p("/services")}>{h.cta}<ArrowRight className="ml-2 h-4 w-4 xl:h-5 xl:w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 sm:px-8 xl:px-10 py-5 sm:py-6 xl:py-7 text-sm sm:text-base xl:text-lg font-semibold" asChild>
                <Link to={p("/about")}>{h.learn}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 xl:gap-12 pt-8 xl:pt-16 max-w-xs sm:max-w-md md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
              {statKeys.map((key, i) => (
                <div key={key} className="space-y-0.5 xl:space-y-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-blue-600 dark:text-blue-400">{statValues[i]}</div>
                  <div className="text-xs sm:text-sm xl:text-base text-gray-600 dark:text-gray-400 font-medium">{h.stats[key]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools preview */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-36 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto text-center mb-10 xl:mb-16 space-y-3 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 dark:text-white tracking-tight">{h.toolsHeading}</h2>
            <p className="text-sm sm:text-base xl:text-lg text-gray-600 dark:text-gray-400 font-normal">{h.toolsDesc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8 max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto">
            {t.services.products.map((product, i) => {
              const meta = toolMeta[i];
              return (
                <Card
                  key={product.name}
                  className="group hover-lift hover-scale border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                >
                  <div className={`relative h-24 sm:h-28 xl:h-40 2xl:h-48 bg-gradient-to-br ${meta.color} flex items-center justify-center`}>
                    <div className="bg-white/95 rounded-xl px-3 sm:px-5 xl:px-6 py-2 xl:py-3">
                      <img src={meta.logo} alt={product.name} loading="lazy" className="h-5 sm:h-7 xl:h-9 2xl:h-10 w-auto object-contain max-w-[110px] sm:max-w-[150px] xl:max-w-[180px]" />
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-5 xl:p-6 2xl:p-7 space-y-1.5 xl:space-y-2">
                    <span className="text-[0.65rem] sm:text-xs xl:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{product.category}</span>
                    <h3 className="font-bold text-sm sm:text-base xl:text-lg text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-xs sm:text-sm xl:text-base text-gray-500 dark:text-gray-400 leading-snug">{product.tagline}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8 xl:mt-12">
            <Button size="lg" variant="outline" className="rounded-2xl border-2 px-6 sm:px-8 xl:px-10 py-4 sm:py-5 xl:py-6 text-sm sm:text-base xl:text-lg font-semibold hover-lift" asChild>
              <Link to={p("/services")}>{h.toolsCta}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values teaser */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-36 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto text-center space-y-5 xl:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 dark:text-white tracking-tight">{h.valuesHeading}</h2>
            <p className="text-sm sm:text-base xl:text-lg text-gray-600 dark:text-gray-400 font-normal">{h.valuesDesc}</p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-6 sm:px-8 xl:px-10 py-5 sm:py-6 xl:py-7 text-sm sm:text-base xl:text-lg font-semibold hover-lift" asChild>
              <Link to={p("/about")}>{h.valuesCta}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-36 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 xl:w-[40rem] xl:h-[40rem] bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 xl:w-[40rem] xl:h-[40rem] bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 xl:px-10 relative z-10 text-center space-y-8 xl:space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tight">{h.careersHeading}</h2>
            <p className="text-sm sm:text-base xl:text-lg text-white/90 max-w-xl xl:max-w-2xl mx-auto font-normal">{h.careersDesc}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 xl:gap-7 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {h.perks.map(({ title, desc }, i) => {
              const Icon = perkIcons[i];
              return (
                <div key={title} className="p-5 sm:p-6 xl:p-8 2xl:p-9 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 text-left">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 xl:w-14 xl:h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-3 xl:mb-4">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 xl:w-7 xl:h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base xl:text-lg text-white mb-1 xl:mb-2">{title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm xl:text-base">{desc}</p>
                </div>
              );
            })}
          </div>
          <Button size="lg" className="rounded-2xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl px-6 sm:px-8 xl:px-10 py-5 sm:py-6 xl:py-7 text-sm sm:text-base xl:text-lg font-semibold hover-lift" asChild>
            <Link to={p("/careers")}>{h.careersCta}<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
