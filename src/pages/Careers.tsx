import { ArrowRight, Globe, Clock, TrendingUp, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const perks = [
  {
    icon: Globe,
    title: "Work from anywhere",
    description: "Fully remote team across Europe",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Flexible hours",
    description: "Work when you're most productive",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Learn & grow",
    description: "Work on multiple products",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Heart,
    title: "Real impact",
    description: "Your work matters from day one",
    color: "from-pink-500 to-pink-600",
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
              Join Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              Come build with us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              We're always looking for talented, passionate people who want to build tools that matter. No corporate BS, just good work and good people.
            </p>
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
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                      <p className="text-white/80 text-sm">{perk.description}</p>
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
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
