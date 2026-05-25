import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug, formatDate, localizedField, type BlogCompany } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { marked } from "marked";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Announcement:    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Analysis:        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Product Update":"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Case Study":    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Engineering:     "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

const companyBadgeColors: Record<BlogCompany, string> = {
  Ecomail:  "bg-green-500 text-white",
  Topol:    "bg-gray-700 text-white",
  DMARCeye: "bg-orange-500 text-white",
  Lettr:    "bg-purple-700 text-white",
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const post = slug ? getPostBySlug(slug) : undefined;
  const b = t.blog;
  const p = (path: string) => `/${language}${path}`;

  const htmlContent = useMemo(() => {
    if (!post) return "";
    const raw = localizedField(post, "content", language);
    return marked(raw) as string;
  }, [post, language]);

  // Item 20: is this post untranslated in the current language?
  const isUntranslated = post && language !== "en" && !post[language as "cs" | "de"];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white">Post not found</h1>
          <Button asChild variant="outline" className="rounded-xl">
            <Link to={p("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${localizedField(post, "title", language)} | Big Good Blog`}
        description={localizedField(post, "excerpt", language)}
        url={`/blog/${post.slug}`}
        lang={language}
        type="article"
        author={post.author}
        publishedTime={post.date}
      />

      {/* Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <Button asChild variant="ghost" className="pl-0 text-gray-500 hover:text-gray-900 dark:hover:text-white -ml-1">
              <Link to={p("/blog")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-3 flex-wrap">
              <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", categoryColors[post.category] ?? "")}>
                <Tag className="w-3 h-3 inline mr-1" />
                {post.category}
              </span>
              {post.company && (
                <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", companyBadgeColors[post.company])}>
                  {post.company}
                </span>
              )}
              {/* Item 20: untranslated notice */}
              {isUntranslated && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 italic">
                  {b.langFallback}
                </span>
              )}
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date, language)}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              {localizedField(post, "title", language)}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {localizedField(post, "excerpt", language)}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Button asChild variant="outline" className="rounded-xl">
                <Link to={p("/blog")}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
