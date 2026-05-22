import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  blogPosts,
  formatDate,
  ALL_COMPANIES,
  ALL_CATEGORIES,
  type BlogCompany,
  type BlogCategory,
} from "@/data/blog-posts";

const categoryColors: Record<BlogCategory, string> = {
  Announcement:   "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Analysis:       "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Product Update": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Case Study":   "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Engineering:    "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

const companyColors: Record<BlogCompany, string> = {
  Ecomail:  "bg-green-500",
  Topol:    "bg-gray-700",
  DMARCeye: "bg-orange-500",
  Lettr:    "bg-purple-700",
};

function FilterCheckbox({
  label,
  checked,
  onChange,
  dot,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  dot?: string;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className={cn(
          "w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150 flex-shrink-0",
          checked
            ? "bg-blue-600 border-blue-600"
            : "border-gray-300 dark:border-gray-600 group-hover:border-blue-400"
        )}
        onClick={onChange}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
            <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 select-none">
        {dot && <span className={`w-2 h-2 rounded-full ${dot} flex-shrink-0`} />}
        {label}
      </span>
    </label>
  );
}

export function Blog() {
  const { t } = useLanguage();
  const b = t.blog;
  const [selectedCompanies, setSelectedCompanies] = useState<Set<BlogCompany>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<BlogCategory>>(new Set());

  function toggleCompany(c: BlogCompany) {
    setSelectedCompanies((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });
  }

  function toggleCategory(c: BlogCategory) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      return next;
    });
  }

  const filtered = blogPosts.filter((post) => {
    const companyMatch =
      selectedCompanies.size === 0 ||
      (post.company !== null && selectedCompanies.has(post.company));
    const categoryMatch =
      selectedCategories.size === 0 || selectedCategories.has(post.category);
    return companyMatch && categoryMatch;
  });

  const hasFilters = selectedCompanies.size > 0 || selectedCategories.size > 0;

  return (
    <>
      <SEO
        title="Blog | Big Good"
        description="Postřehy, aktualizace produktů, analýzy a technické články z ekosystému Big Good — Ecomail, Topol, DMARCeye a Lettr."
        url="/blog"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-40 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-5 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              {b.heading}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal">
              {b.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex gap-10 max-w-7xl mx-auto items-start">

            {/* ── Sidebar filters ── */}
            <aside className="w-64 flex-shrink-0 sticky top-24 space-y-8">

              {/* Filter by product */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {b.filterProduct}
                </h3>
                <div className="space-y-2.5">
                  {ALL_COMPANIES.map((company) => (
                    <FilterCheckbox
                      key={company}
                      label={company}
                      checked={selectedCompanies.has(company)}
                      onChange={() => toggleCompany(company)}
                      dot={companyColors[company]}
                    />
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-700" />

              {/* Filter by type */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {b.filterType}
                </h3>
                <div className="space-y-2.5">
                  {ALL_CATEGORIES.map((cat) => (
                    <FilterCheckbox
                      key={cat}
                      label={cat}
                      checked={selectedCategories.has(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasFilters && (
                <button
                  onClick={() => {
                    setSelectedCompanies(new Set());
                    setSelectedCategories(new Set());
                  }}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {b.clearFilters}
                </button>
              )}
            </aside>

            {/* ── Article grid ── */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-24 text-gray-500 dark:text-gray-400">
                  <p className="text-lg font-medium">{b.noResults}</p>
                  <button
                    onClick={() => {
                      setSelectedCompanies(new Set());
                      setSelectedCategories(new Set());
                    }}
                    className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {b.clearInline}
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {b.articleCount(filtered.length, hasFilters)}
                  </p>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filtered.map((post) => (
                      <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                        <Card className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift overflow-hidden h-full flex flex-col">
                          {/* Image placeholder */}
                          <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center flex-shrink-0">
                            <svg className="w-10 h-10 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>

                          <CardContent className="p-5 flex flex-col flex-1 gap-3">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                              <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold", categoryColors[post.category])}>
                                {post.category}
                              </span>
                              {post.company && (
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                  <span className={cn("w-1.5 h-1.5 rounded-full", companyColors[post.company])} />
                                  {post.company}
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                              {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-1">
                              <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.date)}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
