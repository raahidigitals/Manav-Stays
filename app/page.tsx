import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyLalit from "@/components/PropertyLalit";
import PropertyNaman from "@/components/PropertyNaman";
import BookingSection from "@/components/BookingSection";

import { client } from "@/lib/sanity";
import InstagramReels from "@/components/InstagramReels";


const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    heroTitle,
    heroHighlight,
    heroDescription,
    heroImages[] {
      caption,
      "url": asset->url
    }
  }
`;

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    instagramReels[] {
      title,
      url
    }
  }
`;

export default async function Home() {
  const [homepage, siteSettings] = await Promise.all([
  client.fetch(HOMEPAGE_QUERY),
  client.fetch(SITE_SETTINGS_QUERY),
]);

  return (
    <main className="min-h-screen bg-obsidian text-sandstone font-sans overflow-hidden">
      <Navbar />

      <Hero
        heroTitle={homepage?.heroTitle || "Two Distant Stays."   }
        heroHighlight={homepage?.heroHighlight || "Luxury in Udaipur."}
        heroDescription={homepage?.heroDescription || "From the ultra-luxurious rooftop igloos and lounge at Hotel Lalit to the premium affordable comfort of Hotel Naman—discover Udaipur with authentic hospitality..."}
        heroImages={homepage?.heroImages || []}
      />

      
      <PropertyLalit />
      <PropertyNaman />
      <BookingSection />

      <InstagramReels
  reels={siteSettings?.instagramReels || []}
  title="Manav Stays on Instagram"
  subtitle="Follow our latest stays, experiences and moments in Udaipur."
/>
    </main>
  );
}