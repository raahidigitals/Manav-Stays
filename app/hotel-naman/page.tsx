import Navbar from "@/components/Navbar";
import { client } from "@/lib/sanity";
import InstagramReels from "@/components/InstagramReels";

const HOTEL_NAMAN_QUERY = `
  *[_type == "property" && slug.current == "hotel-naman"][0] {
    _id,
    name,
    slug,
    tagline,
    description,
    shortDescription,
    location,
    numberOfRooms,
    amenities,
    propertyHighlights,
    bookingUrl,
    websiteUrl,
    whatsappUrl,
    whatsappmessage,
    googleMapsUrl,
    googlePlaceId,

    "heroImage": heroImage.asset->url,

    roomCategories[] {
      name,
      description,
      guests,
      bookingUrl,
      "image": image.asset->url
    },

    gallery[] {
      "image": asset->url
    }
  }
`;

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    namanInstagramReels[] {
      title,
      url
    }
  }
`;

export default async function HotelNamanPage() {
  const [property, siteSettings] = await Promise.all([
    client.fetch(HOTEL_NAMAN_QUERY),
    client.fetch(SITE_SETTINGS_QUERY),
  ]);

  console.log("HOTEL NAMAN:", property);
  console.log("Naman amenities:", property?.amenities);
  console.log("Naman rooms:", property?.roomCategories);
  console.log("Naman gallery:", property?.gallery);

  if (!property) {
    return (
      <main className="min-h-screen bg-obsidian text-sandstone">
        <Navbar />

        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-gold text-xs uppercase tracking-[0.3em]">
              Manav Stays
            </p>

            <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white">
              Hotel Naman
            </h1>

            <p className="mt-5 text-sandstone/60">
              Property information is currently being prepared.
            </p>
          </div>
        </section>

    
      </main>
    );
  }

  const whatsappUrl = property.whatsappUrl
    ? (() => {
        try {
          const url = new URL(property.whatsappUrl);

          if (property.whatsappmessage) {
            url.searchParams.set("text", property.whatsappmessage);
          }

          return url.toString();
        } catch {
          return property.whatsappUrl;
        }
      })()
    : "#";

  return (
    <main className="min-h-screen bg-obsidian text-sandstone">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center justify-center pt-32">

        {property.heroImage ? (
          <img
            src={property.heroImage}
            alt={property.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#0b0b0b] to-obsidian" />
        )}

        <div className="absolute inset-0 bg-obsidian/65" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold">
            {property.tagline || "Affordable Luxury · Comfortable Stay"}
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
            {property.name}
          </h1>

          <div className="w-20 h-px bg-gold/50 mx-auto mt-8" />

          <p className="max-w-2xl mx-auto mt-8 text-sm md:text-base text-sandstone/70 leading-relaxed">
            {property.shortDescription ||
              property.description ||
              "A comfortable and welcoming stay in Udaipur with thoughtfully appointed rooms and modern amenities."}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href="#rooms"
              className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full bg-gold text-obsidian text-xs uppercase tracking-[0.18em] hover:opacity-90 transition"
            >
              Explore Rooms
            </a>

            <a
              href={property.bookingUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
            >
              Reserve Room
            </a>

            {property.whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
              >
                Enquire On WhatsApp
              </a>
            )}

          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-sandstone/40">
            {property.location || "Udaipur · Rajasthan"}
          </p>

        </div>
      </section>

      {/* PROPERTY OVERVIEW */}
      <section className="px-6 py-24 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Welcome to Hotel Naman
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              Comfort Meets Warmth
            </h2>

            <p className="mt-6 text-sm md:text-base leading-7 text-sandstone/60">
              {property.description ||
                "Hotel Naman offers a warm and comfortable hospitality experience designed for both business and leisure travellers."}
            </p>

          </div>

          {/* HIGHLIGHTS */}
          {property.propertyHighlights?.length > 0 && (
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

              {property.propertyHighlights.map(
                (highlight: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gold/15 bg-white/[0.03] p-6 text-center"
                  >
                    <div className="text-gold text-xl mb-3">
                      ✦
                    </div>

                    <p className="text-sm text-sandstone">
                      {highlight}
                    </p>
                  </div>
                )
              )}

            </div>
          )}

          {property.numberOfRooms && (
            <div className="mt-10 text-center">
              <span className="text-gold text-sm uppercase tracking-[0.25em]">
                {property.numberOfRooms} Comfortable Rooms
              </span>
            </div>
          )}

        </div>
      </section>

      {/* ROOMS */}
      <section
        id="rooms"
        className="px-6 py-24 bg-obsidian"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Stay Your Way
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Our Rooms
            </h2>

            <p className="mt-6 text-sm md:text-base text-sandstone/60 leading-relaxed">
              Comfortable rooms thoughtfully designed for a relaxed and convenient
              stay in Udaipur.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {property.roomCategories?.length > 0 ? (
              property.roomCategories.map(
                (
                  room: {
                    name: string;
                    description: string;
                    guests: number;
                    bookingUrl?: string;
                    image?: string;
                  },
                  index: number
                ) => (
                  <article
                    key={`${room.name}-${index}`}
                    className="group overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.03]"
                  >

                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden">

                      {room.image ? (
                        <img
                          src={room.image}
                          alt={room.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-white/5 flex items-center justify-center">
                          <span className="text-sm text-sandstone/40">
                            Room image coming soon
                          </span>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {room.guests && (
                        <div className="absolute top-5 right-5 rounded-full bg-gold px-4 py-2 text-xs uppercase tracking-wider text-obsidian">
                          {room.guests} Guests
                        </div>
                      )}

                    </div>

                    {/* CONTENT */}
                    <div className="p-7">

                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                        Hotel Naman
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {room.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-sandstone/60">
                        {room.description}
                      </p>

                      <div className="mt-7">

                        <a
                          href={room.bookingUrl || property.bookingUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.18em] text-obsidian hover:opacity-90 transition"
                        >
                          Reserve Room
                        </a>

                      </div>

                    </div>

                  </article>
                )
              )
            ) : (
              <div className="md:col-span-2 lg:col-span-3 text-center py-16 border border-gold/10 rounded-3xl">
                <p className="text-sandstone/40">
                  Room details and images coming soon.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 px-6 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-sm tracking-[0.3em] text-gold uppercase">
              Comfort & Convenience
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-3 text-white">
              Hotel Amenities
            </h2>

            <p className="text-sandstone/60 mt-5 max-w-2xl mx-auto">
              Thoughtfully selected amenities designed to make your stay
              comfortable, convenient and memorable.
            </p>

          </div>

          {property.amenities?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              {property.amenities.map(
                (amenity: string, index: number) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition duration-300"
                  >

                    <div className="text-gold text-2xl mb-4">
                      ✦
                    </div>

                    <h3 className="text-lg font-medium text-white">
                      {amenity}
                    </h3>

                  </div>
                )
              )}

            </div>
          ) : (
            <div className="text-center py-10 text-sandstone/40">
              Amenities will be displayed here.
            </div>
          )}

        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="px-6 py-24 bg-obsidian"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Experience
            </p>

            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-white">
              Hotel Naman Gallery
            </h2>

            <p className="mt-5 text-sm md:text-base text-sandstone/60">
              Explore Hotel Naman and discover the spaces waiting for you.
            </p>

          </div>

          {property.gallery?.length > 0 ? (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {property.gallery.map(
                (
                  item: { image?: string },
                  index: number
                ) =>
                  item.image ? (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-gold/20 aspect-[4/3]"
                    >

                      <img
                        src={item.image}
                        alt={`Hotel Naman gallery image ${index + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

                    </div>
                  ) : null
              )}

            </div>
          ) : (
            <div className="mt-14 rounded-3xl border border-gold/10 py-20 text-center">
              <p className="text-sandstone/40">
                Property photos coming soon.
              </p>
            </div>
          )}

        </div>
      </section>
      <InstagramReels
  reels={siteSettings?.namanInstagramReels || []}
  title="Hotel Naman on Instagram"
  subtitle="Discover comfortable stays, experiences and moments from Hotel Naman."
/>

      {/* LOCATION */}
      <section className="px-6 py-20 bg-[#0b0b0b] border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Find Us
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
            Hotel Naman, Udaipur
          </h2>

          <p className="mt-5 text-sandstone/60">
            {property.location || "Udaipur, Rajasthan"}
          </p>

          {property.googleMapsUrl && (
            <a
              href={property.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
            >
              View on Google Maps
            </a>
          )}

        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="px-6 py-24 text-center border-t border-white/10"
      >

        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Reservations
        </p>

        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
          Reserve Hotel Naman
        </h2>

        <p className="mt-4 text-sandstone/60">
          Comfort and convenience for your stay in Udaipur.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href={property.bookingUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gold text-obsidian uppercase tracking-widest text-xs hover:opacity-90 transition"
          >
            Reserve Now
          </a>

          {property.whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full border border-gold/60 text-gold uppercase tracking-widest text-xs hover:bg-gold hover:text-obsidian transition"
            >
              WhatsApp Enquiry
            </a>
          )}

        </div>

      </section>

  
    </main>
  );
}