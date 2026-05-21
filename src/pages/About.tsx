import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Technologie na prvním místě",
    description: "Stavíme produkty s důrazem na kvalitu kódu, výkon a inovace.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Zákazník v centru",
    description: "Každé rozhodnutí děláme s ohledem na potřeby a zpětnou vazbu zákazníků.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Vášeň pro detail",
    description: "Věříme, že kvalitní produkt je v detailech — UX, rychlost, spolehlivost.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Globe,
    title: "Globální myšlení",
    description: "Navrhujeme produkty od začátku jako globální — vícejazyčné, škálovatelné.",
    color: "from-green-500 to-green-600",
  },
];

const team = [
  { name: "Jan Novák", role: "CEO & Zakladatel", initials: "JN" },
  { name: "Petra Svobodová", role: "CTO", initials: "PS" },
  { name: "Martin Krejčí", role: "Head of Product", initials: "MK" },
  { name: "Lucie Horáková", role: "Head of Marketing", initials: "LH" },
];

export function About() {
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
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium">
              O společnosti
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Jsme{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Big Good
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Česká technologická společnost budující digitální produkty pro globální trh. Náš ekosystém nástrojů pro email marketing pomáhá firmám po celém světě efektivněji komunikovat.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
              Naše hodnoty
            </Badge>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Co nás pohání
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} className="group hover-lift rounded-3xl border-gray-200 dark:border-gray-700 overflow-hidden">
                  <CardContent className="p-10 space-y-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{v.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
              Tým
            </Badge>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Lidé za produkty
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Zkušený tým s vášní pro digitální produkty a inovace.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="hover-lift rounded-2xl border-gray-200 dark:border-gray-700 text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-md">
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{member.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
