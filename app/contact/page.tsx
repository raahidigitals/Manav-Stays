import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";

const CONTACT_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    phone,
    email,
    address,
    googleMapsUrl,
    whatsappUrl
  }
`;

export default async function ContactPage() {
  const settings = await client.fetch(CONTACT_QUERY);

  const phone = settings?.phone || "+91 88900 2728";
  const email = settings?.email || "";
  const address = settings?.address || "Udaipur, Rajasthan, India";

  const whatsapp =
    settings?.whatsappUrl ||
    "https://wa.me/918890002728?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Manav%20Stays";

  return (
    <main className="min-h-screen bg-obsidian text-sandstone overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-obsidian" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-40">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/70 mb-5">
            Manav Stays & Hospitality
          </p>

          <h1 className="text-6xl md:text-8xl font-medium leading-[0.9]">
            Contact
            <br />
            <span className="text-gold">Us</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-sandstone/65">
            Whether you are planning a stay, looking for a dining experience,
            or simply want to know more about Manav Stays, we would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 md:px-10 py-20 md:py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">

            {/* LEFT */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gold/60 mb-5">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-6xl leading-tight">
                Let&apos;s talk
                <br />
                hospitality.
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-sandstone/60">
                Our team is here to help you with reservations, property
                information, dining enquiries and anything else you may need
                during your journey with Manav Stays.
              </p>

              {/* WHATSAPP */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-10 items-center gap-3 bg-gold text-obsidian px-7 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-semibold hover:bg-gold-light transition-all"
              >
                WhatsApp Us
                <span>→</span>
              </a>
            </div>

            {/* RIGHT */}
            <div className="space-y-0">

              {/* PHONE */}
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block border-t border-white/10 py-8 group"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-sandstone/40">
                  Phone
                </p>

                <p className="mt-3 text-2xl md:text-3xl group-hover:text-gold transition-colors">
                  {phone}
                </p>
              </a>

              {/* EMAIL */}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="block border-t border-white/10 py-8 group"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-sandstone/40">
                    Email
                  </p>

                  <p className="mt-3 text-xl md:text-2xl break-all group-hover:text-gold transition-colors">
                    {email}
                  </p>
                </a>
              )}

              {/* ADDRESS */}
              <div className="border-t border-white/10 py-8">
                <p className="text-xs uppercase tracking-[0.25em] text-sandstone/40">
                  Location
                </p>

                <p className="mt-3 text-xl md:text-2xl leading-relaxed whitespace-pre-line">
                  {address}
                </p>
              </div>

              {/* MAP */}
              {settings?.googleMapsUrl && (
                <a
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] text-gold hover:text-white transition-colors"
                >
                  Open Google Maps
                  <span>↗</span>
                </a>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-gold/60 mb-6">
            Planning Your Stay?
          </p>

          <h2 className="text-4xl md:text-7xl leading-tight">
            Your Udaipur
            <br />
            experience starts here.
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-sandstone/60">
            Reach out to us and let our team help you find the right stay or
            experience for your visit.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 items-center gap-3 border border-gold/30 px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] text-gold hover:bg-gold hover:text-obsidian transition-all"
          >
            Start an Enquiry
            <span>→</span>
          </a>

        </div>
      </section>

      <Footer />
    </main>
  );
}