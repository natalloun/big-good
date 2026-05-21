import { ArrowRight, Globe, Clock, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const perkIcons = [Globe, Clock, TrendingUp, Heart];

export function Careers() {
  const { t } = useLanguage();
  const c = t.careers;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">{c.heading}</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">{c.description}</p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {c.perks.map(({ title, desc }, i) => {
              const Icon = perkIcons[i];
              return (
                <div key={title} className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{title}</h3>
                      <p className="text-white/80 text-sm">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="rounded-2xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift px-10 py-7 text-lg font-semibold"
              onClick={() => window.open("https://ecomail.cz/kariera/#volne-pozice", "_blank", "noopener,noreferrer")}
            >
              {c.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
