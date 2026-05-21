export type NewsItem = {
  outlet: string;
  title: string;
  date: string;
  url: string;
};

// Add new press mentions here — they appear automatically on the Newsroom page.
// Format: { outlet: "Publication Name", title: "Article Title", date: "Month YYYY", url: "https://..." }
export const newsItems: NewsItem[] = [
  {
    outlet: "IT Brief UK",
    title: "Topol.io Spins Out from Ecomail to Offer Standalone Email Editor",
    date: "September 2025",
    url: "https://itbrief.co.uk/story/topol-io-spins-out-from-ecomail-to-offer-standalone-email-editor",
  },
  {
    outlet: "Email Tool Tester",
    title: "The 6 Best Stripo Alternatives in 2026",
    date: "January 2026",
    url: "https://www.emailtooltester.com/en/blog/stripo-alternatives/",
  },
  {
    outlet: "IT Brief UK",
    title: "Topol Unveils Lettr: Transactional Email Tool for Laravel",
    date: "February 2026",
    url: "https://itbrief.co.uk/story/topol-unveils-lettr-transactional-email-tool-for-laravel",
  },
];
