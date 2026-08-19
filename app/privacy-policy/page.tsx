import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";

const PRIVACY_POLICY_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    privacyPolicy
  }
`;

export default async function PrivacyPolicyPage() {
  const settings = await client.fetch(PRIVACY_POLICY_QUERY);

  return (
    <main className="min-h-screen bg-obsidian text-sandstone">
      <Navbar />

      <section className="px-6 pt-48 pb-20">
        <div className="max-w-4xl mx-auto">

          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Legal
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-white">
            Privacy Policy
          </h1>

          <div className="w-20 h-px bg-gold/50 mt-8" />

          <div className="mt-12 whitespace-pre-line text-sm md:text-base leading-8 text-sandstone/70">
            {settings?.privacyPolicy || (
              <p>
                Our Privacy Policy is currently being updated.
              </p>
            )}
          </div>

        </div>
      </section>


    </main>
  );
}