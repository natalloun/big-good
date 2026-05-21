export type BlogCategory = "Announcement" | "Analysis" | "Product Update" | "Case Study" | "Engineering";
export type BlogCompany = "Ecomail" | "Topol" | "DMARCeye" | "Lettr";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  company: BlogCompany | null;
  excerpt: string;
  author: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "placeholder-announcement-1",
    title: "Article Title Goes Here",
    date: "2026-05-01",
    category: "Announcement",
    company: "Ecomail",
    author: "Big Good Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
  {
    slug: "placeholder-analysis-1",
    title: "Article Title Goes Here",
    date: "2026-04-20",
    category: "Analysis",
    company: null,
    author: "Big Good Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
  {
    slug: "placeholder-product-update-1",
    title: "Article Title Goes Here",
    date: "2026-04-10",
    category: "Product Update",
    company: "Topol",
    author: "Topol Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
  {
    slug: "placeholder-case-study-1",
    title: "Article Title Goes Here",
    date: "2026-03-28",
    category: "Case Study",
    company: "DMARCeye",
    author: "DMARCeye Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
  {
    slug: "placeholder-engineering-1",
    title: "Article Title Goes Here",
    date: "2026-03-15",
    category: "Engineering",
    company: "Lettr",
    author: "Lettr Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
  {
    slug: "placeholder-announcement-2",
    title: "Article Title Goes Here",
    date: "2026-03-01",
    category: "Announcement",
    company: "Ecomail",
    author: "Ecomail Team",
    excerpt: "A short description of this article goes here. This is placeholder text to show the layout of the blog card.",
    content: "Coming soon.",
  },
];

export const ALL_COMPANIES: BlogCompany[] = ["Ecomail", "Topol", "DMARCeye", "Lettr"];
export const ALL_CATEGORIES: BlogCategory[] = ["Announcement", "Analysis", "Product Update", "Case Study", "Engineering"];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
