import { MapPin, Phone, ShieldCheck, Wifi, Coffee } from "lucide-react";
import { client } from "@/lib/sanity";
import GalleryRotator from "@/components/GalleryRotator";

const NAMAN_QUERY = `
  *[_type == "property" && slug.current == "hotel-naman"][0] {
    name,
    tagline,
    shortDescription,
    description,
    rooms,
    location,
    amenities,
    highlights,
    bookingUrl,
    phone,
    whatsappUrl,
    whatsappmessage,
    "gallery": gallery[]{
      "url": asset->url
    }
  }
`;

export default async function PropertyNaman() {
  const property = await client.fetch(NAMAN_QUERY);

  if (!property) return null;

  const galleryImages =
    property.gallery?.map(
      (image: { url: string }) => image.url
    ) || [];

  return (
    <section
      id="naman"
      className="py-24 px-6 md:px-12 bg-obsidian-card border-t border-gold/20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* GALLERY */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <GalleryRotator
              images={galleryImages}
              name={property.name}
            />
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest">
              <ShieldCheck size={12} />

              <span>
                Premium Affordable
                {property.rooms
                  ? ` • ${property.rooms} Comfort Rooms`
                  : ""}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="font-serif text-4xl sm:text-6xl text-sandstone font-light leading-tight">
              {property.name}

              <br />

              <span className="italic text-gold font-normal">
                {property.tagline || "Comfort & Accessibility"}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sandstone/70 text-sm md:text-base font-light leading-relaxed">
              {property.shortDescription ||
                property.description}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/15">

              <div className="flex items-start gap-3">
                <Wifi
                  className="text-gold mt-1"
                  size={20}
                />

                <div>
                  <h4 className="font-serif text-lg text-sandstone">
                    High-Speed Wi-Fi
                  </h4>

                  <p className="text-xs text-sandstone/60">
                    Seamless work & leisure streaming
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee
                  className="text-gold mt-1"
                  size={20}
                />

                <div>
                  <h4 className="font-serif text-lg text-sandstone">
                    In-House Dining
                  </h4>

                  <p className="text-xs text-sandstone/60">
                    Fresh meals & 24/7 room service
                  </p>
                </div>
              </div>

            </div>

            {/* LOCATION + PHONE */}
            <div className="space-y-2 text-xs text-sandstone/70">

              {property.location && (
                <p className="flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="text-gold mt-0.5 shrink-0"
                  />

                  <span>{property.location}</span>
                </p>
              )}

              {property.phone && (
                <p className="flex items-center gap-2">
                  <Phone
                    size={14}
                    className="text-gold"
                  />

                  <a
                    href={`tel:${property.phone}`}
                    className="hover:text-gold transition-colors"
                  >
                    {property.phone}
                  </a>
                </p>
              )}

            </div>

            {/* BOOKING */}
            {property.bookingUrl && (
              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold-light transition-all shadow-gold"
              >
                Book Hotel Naman Room
              </a>
            )}

            {/* WHATSAPP */}
            {property.whatsappUrl && (
              <a
                href={property.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-3 px-8 py-3.5 border border-gold/40 text-gold text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold/10 transition-all"
              >
                Enquire on WhatsApp
              </a>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}