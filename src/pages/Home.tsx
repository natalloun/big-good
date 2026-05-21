import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "4", label: "Produkty v ekosystému" },
  { value: "300k+", label: "Aktivních uživatelů" },
  { value: "70+", label: "Zemí světa" },
];

const highlights = [
  {
    icon: Globe,
    title: "Globální dosah",
    description: "Naše produkty používají zákazníci ve více než 70 zemích světa.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "300 000+ uživatelů",
    description: "Stovky tisíc firem a jednotlivců důvěřují našim nástrojům každý den.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Rostoucí ekosystém",
    description: "Neustále rozšiřujeme portfolio produktů a služeb pro digitální marketing.",
    color: "from-green-500 to-green-600",
  },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Digitální ekosystém pro email marketing
            </Badge>

            <h1 className="space-y-3">
              <span className="block text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent">
                Big Good
              </span>
              <span className="block text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight max-w-4xl mx-auto">
                Nástroje, které mění způsob, jak firmy komunikují
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vytváříme prémiové SaaS produkty pro email marketing, bezpečnost e-mailu a digitální komunikaci — používané firmami po celém světě.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift px-10 py-7 text-lg font-semibold"
                asChild
              >
                <Link to="/services">
                  Naše produkty
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-10 py-7 text-lg font-semibold"
                asChild
              >
                <Link to="/about">O nás</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-6xl md:text-7xl font-black text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              Proč Big Good
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
              Jeden ekosystém,{" "}
              <span className="gradient-text">nekonečné možnosti</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Propojené nástroje, které společně tvoří kompletní platformu pro digitální marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="group hover-lift border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 space-y-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Připraveni začít?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Přidejte se k tisícům firem, které využívají naše nástroje k růstu svého podnikání.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-2xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl px-10 py-7 text-lg font-semibold hover-lift"
              asChild
            >
              <Link to="/contact">
                Kontaktujte nás
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/20 rounded-2xl px-10 py-7 text-lg font-semibold"
              asChild
            >
              <Link to="/services">Prozkoumat produkty</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
