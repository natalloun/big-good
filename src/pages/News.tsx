import { ExternalLink } from "lucide-react";
import { newsItems } from "@/data/news-items";
import { useLanguage } from "@/contexts/LanguageContext";

export function News() {
  const { t } = useLanguage();
  const n = t.news;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">{n.heading}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal">{n.description}</p>
          </div>
        </div>
      </section>

      {/* Media grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className="flex flex-col h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.outlet}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-grow">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
