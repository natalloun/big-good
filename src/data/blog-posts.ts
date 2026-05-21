export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "Company News" | "Analysis" | "Product Update" | "Engineering";
  excerpt: string;
  author: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "q1-2026-ecosystem-update",
    title: "Big Good Q1 2026 — Ecosystem Update",
    date: "2026-04-10",
    category: "Analysis",
    author: "Big Good Team",
    excerpt:
      "A look back at the first quarter of 2026: key milestones across all four products, user growth, and what's coming next.",
    content: `
## Q1 2026 in Numbers

The first quarter of 2026 was our strongest yet. Across all four products in the Big Good ecosystem, we crossed **300,000 active users** — a 40% increase year-over-year.

### Ecomail
- Launched a redesigned automation builder used by 12,000+ customers in week one
- Added support for SMS as a channel alongside email
- Grew to 280,000 active accounts across Czech Republic, Slovakia, and Poland

### Topol
- Reached 8,000 embedded deployments across SaaS platforms worldwide
- Released a new component library with 120 drag-and-drop blocks
- Announced a partnership with three major ESP platforms for native integration

### DMARCeye
- Added BIMI standard support — brands can now display their logo in recipients' inboxes
- Monitored over 2 billion email authentication events in Q1 alone
- Launched a new guided setup wizard reducing onboarding time by 60%

### Lettr
- Shipped out of beta with full production-ready status
- 500+ Laravel projects integrated in the first month of GA
- Released a visual template editor accessible to non-developers

## What's Coming in Q2

We're focused on deeper integration between the products — a unified dashboard is in development, allowing teams to manage all four tools from a single login. We're also investing in new AI-assisted features across the product line.

More details will be shared at our Q2 product event.
    `.trim(),
  },
  {
    slug: "topol-spins-out-standalone",
    title: "Topol.io Spins Out from Ecomail as a Standalone Product",
    date: "2025-09-15",
    category: "Company News",
    author: "Big Good Team",
    excerpt:
      "After years as the email editor powering Ecomail, Topol.io launches as its own standalone product — available to any platform that needs a best-in-class email builder.",
    content: `
## A Tool Proven in Production

For years, Topol.io has been the engine behind Ecomail's email editor — used by hundreds of thousands of marketers to design campaigns without touching a single line of code.

Today, we're making it officially available to the world.

## What Topol Offers

Topol is a **drag-and-drop email template editor** that works as:
- A **standalone web app** for marketers who want to design emails independently
- An **embeddable plugin** for SaaS platforms that want to offer their users a world-class email design experience

Unlike most email editors, Topol was built with both marketers and developers in mind. Marketers get an intuitive, no-code interface. Developers get a clean API and a plugin system that integrates into any stack.

## Why Now?

As demand from third-party platforms grew, we realized Topol deserved its own identity, roadmap, and team. Spinning it out allows us to:
- Invest more deeply in the product without the constraints of being a feature
- Build direct relationships with the platforms that embed it
- Iterate faster based on direct customer feedback

Topol remains part of the Big Good ecosystem and continues to power Ecomail. But from today, it stands on its own.

[Visit topol.io](https://topol.io/)
    `.trim(),
  },
  {
    slug: "dmarceye-bimi-support",
    title: "DMARCeye Now Supports BIMI — Display Your Logo in Every Inbox",
    date: "2026-01-20",
    category: "Product Update",
    author: "DMARCeye Team",
    excerpt:
      "DMARCeye adds support for BIMI (Brand Indicators for Message Identification), letting verified senders display their brand logo directly in recipients' email clients.",
    content: `
## What is BIMI?

BIMI (Brand Indicators for Message Identification) is an email standard that lets companies display their brand logo next to emails in supported inboxes — Gmail, Apple Mail, Yahoo, and others.

When a recipient sees your logo next to an email before they even open it, trust increases. Studies show BIMI-enabled emails see a **10–20% lift in open rates**.

But BIMI requires a strong DMARC policy (p=quarantine or p=reject) and a verified logo. That's exactly where DMARCeye comes in.

## What's New in DMARCeye

With this release, DMARCeye now:

1. **Checks BIMI readiness** — tells you whether your domain is ready to implement BIMI
2. **Validates your VMC** — verifies your Verified Mark Certificate is correctly configured
3. **Monitors BIMI records** — alerts you if your BIMI DNS record changes or breaks
4. **Provides step-by-step setup guidance** — no need to dig through RFCs

## How to Get Started

If you're already a DMARCeye customer, BIMI monitoring is available now in your dashboard under **Domain Settings → BIMI**.

New to DMARCeye? [Start a free trial](https://dmarceye.com/) — setup takes under 10 minutes.
    `.trim(),
  },
];

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
