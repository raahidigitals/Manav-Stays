import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";

const CANCELLATION_QUERY = `
  *[_type == "siteSettings"][0] {
    cancellationPolicy
  }
`;

export default async function CancellationPolicyPage() {
  const settings = await client.fetch(CANCELLATION_QUERY);

  return (
    <main className="min-h-screen bg-obsidian text-sandstone">
      <Navbar />

      <section className="px-6 pt-48 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Legal
            </p>

            <h1 className="mt-4 font-serif text-5xl md:text-6xl text-white">
              Cancellation & Refund Policy
            </h1>

            <div className="w-20 h-px bg-gold/50 mx-auto mt-7" />
          </div>

          {/* CONTENT */}
          <div className="rounded-3xl border border-gold/10 bg-white/[0.03] p-7 md:p-10">
            <div className="whitespace-pre-line text-sm md:text-base leading-8 text-sandstone/70">
              {settings?.cancellationPolicy ||
                "Cancellation & Refund Policy will be updated soon."}
            </div>
          </div>

        </div>
      </section>

  
    </main>
  );
}