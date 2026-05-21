import { ArrowRight, Globe, Clock, TrendingUp, Heart, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Globe, title: "Remote & hybrid", description: "Pracuj odkudkoliv nebo z naší kanceláře v Praze.", color: "from-blue-500 to-blue-600" },
  { icon: Clock, title: "Flexibilní pracovní doba", description: "Výsledky jsou důležitější než kdy pracuješ.", color: "from-purple-500 to-purple-600" },
  { icon: TrendingUp, title: "Kariérní rozvoj", description: "Budget na vzdělání, konference a kurzy pro každého.", color: "from-green-500 to-green-600" },
  { icon: Heart, title: "Smysluplná práce", description: "Naše produkty používají stovky tisíc lidí každý den.", color: "from-pink-500 to-pink-600" },
];

const positions = [
  {
    title: "Senior Full-Stack Developer",
    team: "Engineering",
    location: "Praha / Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Product",
    location: "Praha / Remote",
    type: "Full-time",
  },
  {
    title: "Marketing Specialist",
    team: "Marketing",
    location: "Praha",
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    team: "Customer Success",
    location: "Praha / Remote",
    type: "Full-time",
  },
];

export function Careers() {
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
            <Badge className="rounded-full px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30">
              Kariéra
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight">
              Přidej se k nám
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Hledáme talentované lidi, kteří chtějí budovat produkty, jež používají stovky tisíc zákazníků po celém světě.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
              Benefity
            </Badge>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Proč Big Good?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <Card key={perk.title} className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${perk.color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{perk.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{perk.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
              Volné pozice
            </Badge>
            <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Aktuální nabídky
            </h2>
          </div>

          <div className="space-y-4">
            {positions.map((pos) => (
              <Card key={pos.title} className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift cursor-pointer group">
                <CardContent className="p-7 flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {pos.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {pos.team}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {pos.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium">
                        {pos.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nenašel/a jsi vhodnou pozici? Pošli nám spontánní přihlášku.
            </p>
            <Button
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-10 py-6 font-semibold hover-lift"
              onClick={() => window.open("mailto:careers@biggood.cz", "_blank")}
            >
              Spontánní přihláška
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
