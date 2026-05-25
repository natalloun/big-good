import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Code, Users, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const audienceIcons = [Code, Users];

const founders = [
  {
    name: "Jakub Stupka",
    position: "Co-founder at Ecomail",
    image: "/images/jakub-stupka.png",
    quote: "We don't productize ideas. We productize tools that have already proven themselves in production. Each one solves a real problem extremely well, without unnecessary complexity.",
  },
  {
    name: "Jan Tlapák",
    position: "Co-founder at Ecomail",
    image: "/images/jan-tlapak.png",
    quote: "As new market needs arise, we'll keep spinning out specialized, standalone products based on our intimate knowledge of email and content infrastructure, stemming from over 10 years of experience.",
  },
];

const audienceColors = ["from-blue-500 to-purple-600", "from-green-500 to-emerald-600"];

export function About() {
  const { t, language } = useLanguage();
  const a = t.about;

  return (
    <>
      <SEO
        title="O nás | Big Good"
        description="Poznejte tým za Big Good — česká společnost budující e-mailové nástroje, které používají tisíce firem. ECOMAIL.CZ, s.r.o."
        url="/about"
        lang={language}
      />
      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 xl:pt-40 xl:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 xl:w-[28rem] xl:h-[28rem] bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 xl:w-[26rem] xl:h-[26rem] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 xl:px-10 relative z-10">
          <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center space-y-5 xl:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight">
              {a.heroHeading}
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl xl:max-w-3xl mx-auto font-normal">
              {a.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="grid md:grid-cols-2 gap-6 xl:gap-10 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            {a.audience.map((card, i) => {
              const Icon = audienceIcons[i];
              return (
                <Card key={i} className="group relative p-6 sm:p-8 xl:p-10 2xl:p-12 rounded-3xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 xl:w-48 xl:h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  <CardContent className="relative z-10 space-y-5 xl:space-y-8 p-0">
                    <div className={`w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-2xl bg-gradient-to-br ${audienceColors[i]} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 text-white" />
                    </div>
                    <div className="space-y-2 xl:space-y-3">
                      <h3 className="text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                      <p className="text-sm sm:text-base xl:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 md:py-20 xl:py-28 2xl:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="max-w-3xl xl:max-w-4xl mx-auto text-center mb-12 xl:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight">
              {a.leadershipHeading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-400 font-normal">
              {a.leadershipDesc}
            </p>
          </div>

          {/* Team photo — lazy loaded */}
          <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mb-12 xl:mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/team.png"
                alt="Ecomail Team in Prague"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 xl:gap-10 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="group relative p-6 sm:p-8 xl:p-10 2xl:p-12 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-14 h-14 xl:w-20 xl:h-20 text-blue-600" />
                </div>
                <div className="relative z-10 space-y-5 xl:space-y-8">
                  <div className="flex items-center gap-4 xl:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white dark:border-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white">{founder.name}</h3>
                      <p className="text-xs sm:text-sm xl:text-base text-blue-600 dark:text-blue-400 font-medium">{founder.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    "{founder.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
