import Link from "next/link";
import { client } from "@/lib/sanity";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";


const FOOTER_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    phone,
    email,
    
    lalitInstagramUrl,
lalitFacebookUrl,
lalitWhatsappUrl,

namanInstagramUrl,
namanFacebookUrl,
namanWhatsappUrl,

dockyardInstagramUrl,
dockyardFacebookUrl,
dockyardWhatsappUrl,

    instagramUrl,

    facebookUrl,
    whatsappUrl,
    googleMapsUrl
  }
`;

export default async function Footer() {
  const settings = await client.fetch(FOOTER_QUERY);

  return (
    <footer className="bg-obsidian border-t border-gold/20 px-6 md:px-12 py-16 text-sandstone/60">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl text-gold tracking-wider">
              MANAV STAYS & HOSPITALITY
            </span>

            <p className="mt-4 max-w-md text-sm leading-7">
              A curated collection of hospitality experiences in Udaipur,
              bringing together comfort, luxury and warm Indian hospitality.
            </p>

            <p className="mt-5 text-xs leading-6">
              Plot 293, Sector 14, Hiran Magri & Sohan Sadan,
              Bhuwana Bypass, Udaipur, Rajasthan.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-gold text-xs uppercase tracking-[0.25em]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="/"
                className="hover:text-gold transition"
              >
                Home
              </Link>

              <Link
                href="/hotel-lalit-imperial"
                className="hover:text-gold transition"
              >
                Hotel Lalit Imperial
              </Link>

              <Link
                href="/hotel-naman"
                className="hover:text-gold transition"
              >
                Hotel Naman
              </Link>

              <Link
                href="/hotel-lalit-imperial#dockyard"
                className="hover:text-gold transition"
              >
                Dockyard Bar & Restro
              </Link>

              <Link
                href="/blog"
                className="hover:text-gold transition"
              >
                Travel Journal
              </Link>

            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-gold text-xs uppercase tracking-[0.25em]">
              Information
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                href="/privacy-policy"
                className="hover:text-gold transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="hover:text-gold transition"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cancellation-policy"
                className="hover:text-gold transition"
              >
                Cancellation & Refund
              </Link>

              <a
                href={settings?.googleMapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition"
              >
                Location
              </a>

            </div>
          </div>

        </div>

        {/* CONTACT + SOCIAL */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div className="flex flex-col sm:flex-row gap-5 text-sm">

            {settings?.phone && (
              <a
                href={`tel:${settings.phone}`}
                className="hover:text-gold transition"
              >
                {settings.phone}
              </a>
            )}

            {settings?.email && (
              <a
                href={`mailto:${settings.email}`}
                className="hover:text-gold transition"
              >
                {settings.email}
              </a>
            )}

          </div>

          {/* SOCIAL ICONS */}
<div className="flex items-center gap-3">

  {settings?.instagramUrl && (
    <a
      href={settings.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Manav Stays Instagram"
      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-sandstone/70 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
    >
      <FaInstagram size={18} />
    </a>
  )}

  {settings?.facebookUrl && (
    <a
      href={settings.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Manav Stays Facebook"
      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-sandstone/70 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
    >
      <FaFacebookF size={16} />
    </a>
  )}

  {settings?.whatsappUrl && (
    <a
      href={settings.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Manav Stays WhatsApp"
      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-sandstone/70 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
    >
      <FaWhatsapp size={19} />
    </a>
  )}

</div>
        </div>

        {/* PROPERTY SOCIAL LINKS */}
        {/* PROPERTY SOCIAL LINKS */}
<div className="mt-10 pt-8 border-t border-white/10">

  <div className="text-center md:text-left">
    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60">
      Follow Our Properties
    </p>

    <p className="mt-2 text-sm text-sandstone/50">
      Stay connected with Manav Stays and our properties.
    </p>
  </div>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

    {/* HOTEL LALIT */}
    {(settings?.lalitInstagramUrl ||
      settings?.lalitFacebookUrl ||
      settings?.lalitWhatsappUrl) && (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

        <p className="text-sm font-serif text-white">
          Hotel Lalit Imperial
        </p>

        <div className="mt-4 flex items-center gap-2">

          {settings?.lalitInstagramUrl && (
            <a
              href={settings.lalitInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Lalit Instagram"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaInstagram size={16} />
            </a>
          )}

          {settings?.lalitFacebookUrl && (
            <a
              href={settings.lalitFacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Lalit Facebook"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaFacebookF size={14} />
            </a>
          )}

          {settings?.lalitWhatsappUrl && (
            <a
              href={settings.lalitWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Lalit WhatsApp"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaWhatsapp size={17} />
            </a>
          )}

        </div>
      </div>
    )}

    {/* HOTEL NAMAN */}
    {(settings?.namanInstagramUrl ||
      settings?.namanFacebookUrl ||
      settings?.namanWhatsappUrl) && (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

        <p className="text-sm font-serif text-white">
          Hotel Naman
        </p>

        <div className="mt-4 flex items-center gap-2">

          {settings?.namanInstagramUrl && (
            <a
              href={settings.namanInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Naman Instagram"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaInstagram size={16} />
            </a>
          )}

          {settings?.namanFacebookUrl && (
            <a
              href={settings.namanFacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Naman Facebook"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaFacebookF size={14} />
            </a>
          )}

          {settings?.namanWhatsappUrl && (
            <a
              href={settings.namanWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hotel Naman WhatsApp"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaWhatsapp size={17} />
            </a>
          )}

        </div>
      </div>
    )}

    {/* DOCKYARD */}
    {(settings?.dockyardInstagramUrl ||
      settings?.dockyardFacebookUrl ||
      settings?.dockyardWhatsappUrl) && (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

        <p className="text-sm font-serif text-white">
          Dockyard Bar & Restro
        </p>

        <div className="mt-4 flex items-center gap-2">

          {settings?.dockyardInstagramUrl && (
            <a
              href={settings.dockyardInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dockyard Instagram"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaInstagram size={16} />
            </a>
          )}

          {settings?.dockyardFacebookUrl && (
            <a
              href={settings.dockyardFacebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dockyard Facebook"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaFacebookF size={14} />
            </a>
          )}

          {settings?.dockyardWhatsappUrl && (
            <a
              href={settings.dockyardWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dockyard WhatsApp"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sandstone/60 hover:border-gold hover:text-gold transition"
            >
              <FaWhatsapp size={17} />
            </a>
          )}

        </div>
      </div>
    )}

  </div>
</div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-[11px]">
            © {new Date().getFullYear()} Manav Stays. All rights reserved.
          </p>

          <p className="text-[10px] uppercase tracking-widest text-gold/60">
            Digital Architecture by Raahii Digital
          </p>

        </div>

      </div>

    
  );
}