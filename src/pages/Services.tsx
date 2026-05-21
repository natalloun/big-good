import { ArrowRight, ExternalLink, Mail, Shield, FileText, Send, Network, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Mail,
    name: "Ecomail",
    tagline: "Email Marketing Platform",
    description: "Combines ease of use with powerful features like segmentation, automation workflows, and built-in analytics. Includes Topol's email editor.",
    category: "Marketing",
    color: "from-green-500 to-emerald-500",
    url: "https://ecomail.cz/",
  },
  {
    icon: FileText,
    name: "Topol",
    tagline: "Email Template Editor",
    description: "An intuitive drag-and-drop email editor, available both as an embeddable plugin for SaaS platforms and as a standalone app for marketers.",
    category: "Design",
    color: "from-gray-800 to-gray-600",
    url: "https://topol.io/",
  },
  {
    icon: Shield,
    name: "DMARCeye",
    tagline: "Email Security Platform",
    description: "A DMARC monitoring platform that helps protect domains from unauthorized email use and improves deliverability using a guidance-based approach.",
    category: "Security",
    color: "from-orange-500 to-orange-400",
    url: "https://dmarceye.com/",
  },
  {
    icon: Send,
    name: "Lettr",
    tagline: "Transactional Email Platform",
    description: "A unique platform that lets developers set up sending once, and lets marketing and product teams manage templates via an intuitive, no-code editor.",
    category: "Developer Tool",
    color: "from-purple-700 to-gray-800",
    url: "https://lettr.com/",
  },
  {
    icon: Network,
    name: "DNS Charts",
    tagline: "DNS Management Platform",
    description: "A platform that enables easy management of the DNS changes that email depends on. Simpler to set up, easier to validate, and safer to maintain.",
    category: "Infrastructure",
    color: "from-blue-600 to-blue-800",
    url: null,
  },
  {
    icon: Lightbulb,
    name: "Your Idea?",
    tagline: "Let's build together",
    description: "Have an idea for a tool that would fit our ecosystem? We'd love to hear about it and explore possibilities together.",
    category: "Opportunity",
    color: "from-gray-400 to-gray-500",
    url: null,
    isIdea: true,
  },
];

export function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              The Tools in Our Ecosystem
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Lightweight. Focused. Market-Proven.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal max-w-3xl mx-auto">
              Each tool covers a specific and essential part of the email and content stack. Start with one product and add more over time, without committing to an all‑in‑one suite.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.name}
                  className={`group hover-lift hover-scale rounded-3xl border-gray-200 dark:border-gray-700 overflow-hidden ${product.url || product.isIdea ? "cursor-pointer" : ""}`}
                  onClick={() => product.url && window.open(product.url, "_blank", "noopener,noreferrer")}
                >
                  <div className={`relative h-44 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-base font-medium">{product.tagline}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {product.description}
                    </p>
                    {product.url ? (
                      <Button variant="ghost" className="w-full justify-center font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Visit website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    ) : product.isIdea ? (
                      <Button variant="ghost" className="w-full justify-center font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400" asChild>
                        <Link to="/contact">
                          Let's chat
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 space-y-4">
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
              Want to see how they work together?
            </p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-10 py-7 text-lg font-semibold hover-lift" asChild>
              <Link to="/contact">
                Explore the Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
