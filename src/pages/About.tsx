import { Card, CardContent } from "@/components/ui/card";
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
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              {a.heroHeading}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {a.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {a.audience.map((card, i) => {
              const Icon = audienceIcons[i];
              return (
                <Card key={i} className="group relative p-10 rounded-3xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  <CardContent className="relative z-10 space-y-6 p-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audienceColors[i]} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              {a.leadershipHeading}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal">
              {a.leadershipDesc}
            </p>
          </div>

          {/* Team photo */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="/images/team.png" alt="Ecomail Team in Prague" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder) => (
              <div key={founder.name} className="group relative p-10 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900">
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white dark:border-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{founder.name}</h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{founder.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
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
