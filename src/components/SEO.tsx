import { Helmet } from "react-helmet-async";
import type { Language } from "@/lib/i18n";

export const SITE_URL = "https://big-good.vercel.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/team.png`;
const SITE_NAME = "Big Good";
const ALL_LANGS: Language[] = ["en", "cs", "de"];

type Props = {
  title: string;
  description: string;
  image?: string;
  /** Path WITHOUT language prefix, e.g. "/blog/my-article" or "/about" */
  url?: string;
  /** Current UI language — used to build canonical + hreflang */
  lang?: Language;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
};

export function SEO({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  url,
  lang,
  type = "website",
  author,
  publishedTime,
}: Props) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  // With language-aware URLs: canonical is /${lang}${url}
  // Without lang prop (legacy): fall back to plain url
  const canonicalUrl = url
    ? lang
      ? `${SITE_URL}/${lang}${url}`
      : `${SITE_URL}${url}`
    : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {author && <meta name="author" content={author} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* hreflang — only when lang is provided */}
      {lang && url && ALL_LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${SITE_URL}/${l}${url}`} />
      ))}
      {lang && url && (
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${url}`} />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {type === "article" && author && <meta property="article:author" content={author} />}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  );
}
