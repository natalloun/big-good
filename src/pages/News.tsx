import { ExternalLink, Newspaper, Mail } from "lucide-react";
import { SEO } from "@/components/SEO";
import { newsItems } from "@/data/news-items";
import { useLanguage } from "@/contexts/LanguageContext";

export function News() {
  const { t, language } = useLanguage();
  const n = t.news;

  return (
    <>
      <SEO
        title="Press | Big Good"
        description="See who's writing about Big Good, Ecomail, Topol, DMARCeye, and Lettr. Media coverage, articles, and press mentions."
        url="/news"
        lang={language}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white tracking-tight">{n.heading}</h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 font-normal max-w-2xl mx-auto">{n.description}</p>
          </div>
        </div>
      </section>

      {/* Press coverage grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">In the media</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.outlet}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-grow">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Press inquiries</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Journalists and media professionals are welcome to reach out. We're happy to provide quotes, data, product access, or connect you with the right person.
            </p>
            <a
              href="mailto:pr@ecomail.cz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <Mail className="w-5 h-5" />
              pr@ecomail.cz
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
