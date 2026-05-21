import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "4", label: "Smart Tools" },
  { value: "300k+", label: "Users Worldwide" },
  { value: "70+", label: "Countries Served" },
];

const toolPreviews = [
  { name: "Ecomail", tagline: "Email Marketing Platform", color: "from-green-500 to-emerald-500", category: "Marketing" },
  { name: "Topol", tagline: "Email Template Editor", color: "from-gray-800 to-gray-600", category: "Design" },
  { name: "DMARCeye", tagline: "Email Security Platform", color: "from-orange-500 to-orange-400", category: "Security" },
  { name: "Lettr", tagline: "Transactional Email Platform", color: "from-purple-700 to-gray-800", category: "Developer Tool" },
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

        <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Development • Product • Marketing
            </Badge>

            <h1 className="space-y-4">
              <span className="block text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent">
                Big Good
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight max-w-4xl mx-auto">
                An Ecosystem of Email and Content Tools
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              For design, sending, and security. Built on proven infrastructure. Informed by over a decade of experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift px-10 py-7 text-lg font-semibold"
                asChild
              >
                <Link to="/services">
                  Explore Our Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-10 py-7 text-lg font-semibold"
                asChild
              >
                <Link to="/about">Learn More</Link>
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

      {/* Tools preview */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              The Tools in Our Ecosystem
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Lightweight. Focused. Market-Proven.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal">
              Each tool covers a specific and essential part of the email and content stack. Start with one product and add more over time, without committing to an all‑in‑one suite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {toolPreviews.map((tool) => (
              <Card key={tool.name} className="group hover-lift hover-scale border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden cursor-pointer">
                <div className={`h-32 bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                  <span className="text-white font-black text-2xl">{tool.name[0]}</span>
                </div>
                <CardContent className="p-6 space-y-2">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{tool.category}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white">{tool.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-2xl border-2 px-10 py-6 font-semibold hover-lift" asChild>
              <Link to="/services">
                Explore the Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values teaser */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              Big Good: Why and For Whom?
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Internal Tools Made Standalone Products
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal">
              Each Big Good product began as something we needed ourselves, proven in real workflows and built to scale. Now they're available globally, with their own teams and roadmaps.
            </p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-10 py-7 text-lg font-semibold hover-lift" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-white/20 text-white border-white/30">
            Join Us
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Come build with us
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-normal">
            We're always looking for talented, passionate people who want to build tools that matter. No corporate BS, just good work and good people.
          </p>
          <Button
            size="lg"
            className="rounded-2xl bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl px-10 py-7 text-lg font-semibold hover-lift"
            asChild
          >
            <Link to="/careers">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
