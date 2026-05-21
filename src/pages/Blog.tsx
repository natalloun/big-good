import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, formatDate } from "@/data/blog-posts";

const categoryColors: Record<string, string> = {
  "Company News": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Analysis": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Product Update": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Engineering": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
};

export function Blog() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sorted;

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
            <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-medium">
              Blog
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal">
              Company news, product updates, and analysis from the Big Good team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Featured post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="block mb-12 group">
              <Card className="rounded-3xl border-gray-200 dark:border-gray-700 hover-lift overflow-hidden">
                <CardContent className="p-10 space-y-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] ?? ""}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {featured.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="text-sm text-gray-400">· {featured.author}</span>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Rest of posts */}
          <div className="space-y-4">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
                <Card className="rounded-2xl border-gray-200 dark:border-gray-700 hover-lift">
                  <CardContent className="p-7 flex items-start justify-between gap-6">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[post.category] ?? ""}`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
