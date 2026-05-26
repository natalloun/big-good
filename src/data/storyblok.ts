const STORYBLOK_TOKEN = "iie3wtkN7GWUORxdWP7UHgtt";
const STORYBLOK_BASE = "https://api.storyblok.com/v2/cdn";

export interface StoryblokPosition {
  slug: string;
  title: string;
  shortDescription: string;
  level: string; // "Junior" | "Medior" | "Senior"
  location: string;
  jobType: string;
  contractType: string[];
  url: string;
}

function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapStory(story: any): StoryblokPosition {
  const c = story.content;
  return {
    slug: story.slug,
    title: c.title || story.name,
    shortDescription: (c.short_description || "").trim(),
    level: capitalize(c.position_level || ""),
    location: c.location || "",
    jobType: c.job_type || "",
    contractType: Array.isArray(c.contract_type) ? c.contract_type : [],
    url: `https://ecomail.cz/kariera/${story.slug}/`,
  };
}

export async function fetchPositions(): Promise<StoryblokPosition[]> {
  const params = new URLSearchParams({
    token: STORYBLOK_TOKEN,
    version: "published",
    starts_with: "kariera/",
  });
  params.set("filter_query[is_public][is]", "true");

  const res = await fetch(`${STORYBLOK_BASE}/stories?${params}`);
  if (!res.ok) throw new Error(`Storyblok error: ${res.status}`);

  const data = await res.json();
  return (data.stories ?? []).map(mapStory);
}
