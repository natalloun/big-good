import { ArrowRight, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

const productMeta = [
  {
    color: "from-green-600 to-emerald-500",
    url: "https://ecomail.cz/",
    logo: asset("/images/ecomail-logo.svg"),
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Ut labore et dolore magna aliqua enim",
      "Quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    color: "from-gray-800 to-gray-600",
    url: "https://topol.io/",
    logo: asset("/images/topol-logo.svg"),
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Ut labore et dolore magna aliqua enim",
      "Quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    color: "from-orange-600 to-orange-400",
    url: "https://dmarceye.com/",
    logo: asset("/images/dmarceye-logo.svg"),
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Ut labore et dolore magna aliqua enim",
      "Quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    color: "from-[#EC104B] to-[#9a0030]",
    url: "https://lettr.com/",
    logo: asset("/images/lettr-logo.svg"),
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Ut labore et dolore magna aliqua enim",
      "Quis nostrud exercitation ullamco laboris",
    ],
  },
];

export function Services() {
  const { t, language } = useLanguage();
  const s = t.services;
  const p = (path: string) => `/${language}${path}`;

  return (
    <>
      <SEO
        title="Produkty a služby | Big Good"
        description="Objevte nástroje Big Good: Ecomail pro e-mailový marketing, Topol pro design šablon, DMARCeye pro monitorování DMARC a Lettr pro odesílání e-mailů."
        url="/services"
        lang={language}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 xl:pt-40 xl:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 xl:w-[28rem] xl:h-[28rem] bg-blue-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 xl:w-[26rem] xl:h-[26rem] bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 xl:px-10 relative z-10">
          <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center space-y-5 xl:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight">{s.heroHeading}</h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 font-normal max-w-2xl xl:max-w-3xl mx-auto">{s.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Zigzag products */}
      <section className="py-14 md:py-20 xl:py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 xl:px-10">
          <div className="max-w-5xl xl:max-w-6xl mx-auto space-y-20 md:space-y-28 xl:space-y-36">
            {s.products.map((product, i) => {
              const meta = productMeta[i];
              const isEven = i % 2 === 0;

              return (
                <div
                  key={product.name}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-10 xl:gap-16",
                    !isEven && "md:flex-row-reverse"
                  )}
                >
                  {/* Logo / visual block */}
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div
                      className={cn(
                        "rounded-3xl bg-gradient-to-br p-10 xl:p-14 flex items-center justify-center aspect-[4/3] shadow-xl cursor-pointer group transition-transform duration-300 hover:scale-[1.02]",
                        meta.color
                      )}
                      onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                    >
                      <div className="bg-white rounded-2xl px-8 xl:px-12 py-5 xl:py-7 shadow-lg">
                        <img
                          src={meta.logo}
                          alt={product.name}
                          loading="lazy"
                          className="h-10 sm:h-12 xl:h-14 w-auto object-contain max-w-[200px] xl:max-w-[240px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text block */}
                  <div className="w-full md:w-1/2 space-y-5 xl:space-y-7">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        {product.category}
                      </span>
                      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        {product.name}
                      </h2>
                      <p className="text-base xl:text-lg text-gray-500 dark:text-gray-400 font-medium">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2.5">
                      {meta.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-sm xl:text-base text-gray-600 dark:text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="rounded-xl font-semibold"
                      onClick={() => window.open(meta.url, "_blank", "noopener,noreferrer")}
                    >
                      {s.visitWebsite}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 xl:mt-28 space-y-4">
            <p className="text-base xl:text-xl text-gray-600 dark:text-gray-400 font-medium">{s.bottomCta}</p>
            <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg px-8 xl:px-12 py-6 xl:py-8 text-base xl:text-xl font-semibold hover-lift" asChild>
              <Link to={p("/contact")}>{s.exploreCta}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
