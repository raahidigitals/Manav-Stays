import Navbar from "@/components/Navbar";
import { client } from "@/lib/sanity";
import InstagramReels from "@/components/InstagramReels";

const HOTEL_LALIT_QUERY = `
  *[_type == "property" && slug.current == "hotel-lalit-imperial"][0] {
    _id,
    name,
    slug,
    tagline,
    shortDescription,
    description,
    phone,
    location,
    mapUrl,
    googlePlaceId,
    amenities,
    highlights,
    bookingUrl,
    whatsappUrl,
    whatsappmessage,

    "heroVideoUrl": heroVideo.asset->url,
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

const DOCKYARD_QUERY = `
  *[_type == "diningExperience" && slug.current == "dockyard-bar-and-restro"][0] {
    _id,
    name,
    slug,
    tagline,
    description,
    "heroImage": heroImage.asset->url,

    spaces[] {
      name,
      description,
      "image": image.asset->url
    },

    gallery[] {
      "image": asset->url
    },

    timings,
    location,
    instagramUrl,
    whatsappUrl,
    reservationUrl
  }
`;

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    lalitInstagramReels[] {
      title,
      url
    }
  }
`;

export default async function HotelLalitPage() {
  const [property, dockyard, siteSettings] = await Promise.all([
    client.fetch(HOTEL_LALIT_QUERY, {}, { cache: "no-store" }),
    client.fetch(DOCKYARD_QUERY, {}, { cache: "no-store" }),
    client.fetch(SITE_SETTINGS_QUERY, {}, { cache: "no-store" }),
  ]);

  if (!property) {
    return (
      <main className="min-h-screen bg-obsidian text-sandstone flex items-center justify-center">
        <p>Hotel Lalit Imperial data is currently unavailable.</p>
      </main>
    );
  }

  const whatsappHref = property.whatsappUrl
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

      {/* =========================================================
          HERO
      ========================================================= */}
      {/* =========================================================
    HERO
========================================================= */}
<section className="relative overflow-hidden min-h-[calc(100vh-90px)] flex items-center justify-center pt-32">

  {/* HERO VIDEO */}
  {property.heroVideoUrl ? (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={property.heroVideoUrl}
      autoPlay
      muted
      loop
      playsInline
    />
  ) : property.heroImageUrl ? (
    /* HERO IMAGE FALLBACK */
    <img
      src={property.heroImageUrl}
      alt={property.name || "Hotel Lalit Imperial"}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    /* FALLBACK BACKGROUND */
    <div className="absolute inset-0 bg-obsidian" />
  )}

  {/* DARK LUXURY OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/60 to-obsidian/40" />

  {/* HERO CONTENT */}
  <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

    <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold">
      Ultra Luxury · 12 Exclusive Suites · Rooftop Igloo Dining · Private Jacuzzi Suites
    </p>

    <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
      {property.name || "Hotel Lalit Imperial"}
    </h1>

    <p className="mt-5 font-serif italic text-2xl md:text-3xl lg:text-4xl text-gold">
      & Dockyard Bar Lounge
    </p>

    <div className="w-20 h-px bg-gold/50 mx-auto mt-8" />

    <p className="max-w-2xl mx-auto mt-8 text-sm md:text-base text-sandstone/70 leading-relaxed">
      {property.shortDescription ||
        property.description ||
        "Discover an intimate luxury stay in Udaipur, featuring curated suites, rooftop igloo experiences, and the sophisticated Dockyard Bar Lounge."}
    </p>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

      <a
        href="#rooms"
        className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full bg-gold text-obsidian text-xs uppercase tracking-[0.18em] hover:opacity-90 transition"
      >
        Explore Suites
      </a>

      {property.bookingUrl && (
        <a
          href={property.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
        >
          Reserve Suite
        </a>
      )}

      {property.whatsappUrl && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
        >
          Enquire On WhatsApp
        </a>
      )}

    </div>

    <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-sandstone/40">
      Udaipur · Rajasthan
    </p>

  </div>
</section>

      {/* =========================================================
          ROOMS
      ========================================================= */}
      <section
        id="rooms"
        className="px-6 py-24 bg-[#0b0b0b]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Stay Your Way
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Our Imperial Suites
            </h2>

            <p className="mt-6 text-sm md:text-base text-sandstone/60 leading-relaxed">
              Experience refined comfort with spacious interiors, premium
              amenities and thoughtfully designed private suites.
            </p>

          </div>


          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

            {property.roomCategories?.map(
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

                  {/* ROOM IMAGE */}
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

                    <div className="absolute top-5 right-5 rounded-full bg-gold px-4 py-2 text-xs uppercase tracking-wider text-obsidian">
                      {room.guests || 2} Guests
                    </div>

                    <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2 text-xs text-white">
                      Luxury Suite
                    </div>

                  </div>


                  {/* ROOM CONTENT */}
                  <div className="p-7 md:p-8">

                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      Imperial Collection
                    </p>

                    <h3 className="mt-3 font-serif text-3xl md:text-4xl text-white">
                      {room.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-sandstone/60">
                      {room.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4">

                      {room.bookingUrl || property.bookingUrl ? (
                        <a
                          href={room.bookingUrl || property.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.18em] text-obsidian hover:opacity-90 transition"
                        >
                          Reserve Suite
                        </a>
                      ) : null}

                      <span className="text-sm text-gold/80">
                        View details →
                      </span>

                    </div>

                  </div>

                </article>
              )
            )}

          </div>

        </div>
      </section>


      {/* =========================================================
          AMENITIES
      ========================================================= */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-sm tracking-[0.3em] text-amber-400 uppercase">
              Comfort & Convenience
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mt-3">
              Hotel Amenities
            </h2>

            <p className="text-slate-300 mt-5 max-w-2xl mx-auto">
              Thoughtfully selected amenities designed to make your stay
              comfortable, convenient and memorable.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {property.amenities?.map(
              (amenity: string, index: number) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition duration-300"
                >

                  <div className="text-amber-400 text-2xl mb-4">
                    ✦
                  </div>

                  <h3 className="text-lg font-medium">
                    {amenity}
                  </h3>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          PROPERTY INFORMATION
      ========================================================= */}
      <section className="px-6 py-20 bg-[#0b0b0b] border-y border-white/10">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Hotel Information
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
              Everything You Need
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* PHONE */}
            {property.phone && (
              <a
                href={`tel:${property.phone}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-gold/40 transition"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Call Us
                </p>

                <p className="mt-3 text-white text-lg">
                  {property.phone}
                </p>
              </a>
            )}


            {/* LOCATION */}
            {property.location && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Location
                </p>

                <p className="mt-3 text-sandstone/70 text-sm leading-6">
                  {property.location}
                </p>

              </div>
            )}


            {/* GOOGLE MAPS */}
            {property.mapUrl && (
              <a
                href={property.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-gold/40 transition"
              >

                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Find Us
                </p>

                <p className="mt-3 text-white text-lg">
                  Open Google Maps →
                </p>

              </a>
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section
        id="gallery"
        className="px-6 py-24 bg-[#0b0b0b]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Experience
            </p>

            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-white">
              Hotel Lalit Gallery
            </h2>

            <p className="mt-5 text-sm md:text-base text-sandstone/60">
              Discover the spaces, suites and experiences at Hotel Lalit Imperial.
            </p>

          </div>


          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {property.gallery?.map(
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
                      alt={`Hotel Lalit Imperial gallery image ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

                  </div>
                ) : null
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          DOCKYARD
      ========================================================= */}
      <section
        id="dockyard"
        className="px-6 py-24 bg-[#0b0b0b] border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          {/* INTRO */}
          <div className="max-w-3xl mx-auto text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-gold">
              Dining & Nightlife
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              {dockyard?.name || "Dockyard Bar And Restro"}
            </h2>

            {dockyard?.tagline && (
              <p className="mt-4 font-serif italic text-xl md:text-2xl text-gold">
                {dockyard.tagline}
              </p>
            )}

            <div className="w-20 h-px bg-gold/50 mx-auto mt-7" />

            {dockyard?.description && (
              <p className="mt-7 text-sm md:text-base leading-7 text-sandstone/60">
                {dockyard.description}
              </p>
            )}

          </div>


          {/* HERO IMAGE */}
          {dockyard?.heroImage && (
            <div className="mt-14 relative overflow-hidden rounded-3xl border border-gold/20 aspect-[16/7]">

              <img
                src={dockyard.heroImage}
                alt={dockyard.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Hotel Lalit Imperial
                </p>

                <p className="mt-2 text-white font-serif text-2xl md:text-3xl">
                  An evening worth remembering
                </p>

              </div>

            </div>
          )}


          {/* SPACES */}
          {dockyard?.spaces?.length > 0 && (
            <div className="mt-20">

              <div className="text-center">

                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Explore
                </p>

                <h3 className="mt-3 font-serif text-3xl md:text-4xl text-white">
                  The Dockyard Experience
                </h3>

              </div>


              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">

                {dockyard.spaces.map(
                  (
                    space: {
                      name: string;
                      description: string;
                      image?: string;
                    },
                    index: number
                  ) => (
                    <article
                      key={`${space.name}-${index}`}
                      className="group overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.03]"
                    >

                      {space.image && (
                        <div className="relative aspect-[4/3] overflow-hidden">

                          <img
                            src={space.image}
                            alt={space.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                          <div className="absolute bottom-5 left-5">

                            <span className="rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-wider text-white">
                              {index === 0
                                ? "Bar"
                                : index === 1
                                ? "Dining"
                                : index === 2
                                ? "Rooftop"
                                : "Signature Experience"}
                            </span>

                          </div>

                        </div>
                      )}


                      <div className="p-6 md:p-7">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                          Dockyard
                        </p>

                        <h4 className="mt-2 font-serif text-2xl md:text-3xl text-white">
                          {space.name}
                        </h4>

                        <p className="mt-4 text-sm leading-7 text-sandstone/60">
                          {space.description}
                        </p>

                      </div>

                    </article>
                  )
                )}

              </div>

            </div>
          )}


          {/* DOCKYARD GALLERY */}
          {dockyard?.gallery?.length > 0 && (
            <div className="mt-20">

              <div className="text-center">

                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Moments
                </p>

                <h3 className="mt-3 font-serif text-3xl md:text-4xl text-white">
                  Dockyard Gallery
                </h3>

              </div>


              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">

                {dockyard.gallery.map(
                  (
                    item: { image?: string },
                    index: number
                  ) =>
                    item.image ? (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-2xl aspect-[4/3] border border-gold/10"
                      >

                        <img
                          src={item.image}
                          alt={`Dockyard Bar And Restro ${index + 1}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                      </div>
                    ) : null
                )}

              </div>

            </div>
          )}


          {/* DOCKYARD ACTIONS */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">

            {dockyard?.instagramUrl && (
              <a
                href={dockyard.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[180px] px-7 py-3.5 rounded-full border border-gold/60 text-gold text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition"
              >
                View Instagram
              </a>
            )}

            {dockyard?.reservationUrl && (
              <a
                href={dockyard.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[180px] px-7 py-3.5 rounded-full bg-gold text-obsidian text-xs uppercase tracking-[0.18em] hover:opacity-90 transition"
              >
                Reserve Experience
              </a>
            )}

            {dockyard?.whatsappUrl && (
              <a
                href={dockyard.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[180px] px-7 py-3.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition"
              >
                WhatsApp
              </a>
            )}

          </div>


          {/* DOCKYARD LOCATION / TIMINGS */}
          {(dockyard?.location || dockyard?.timings) && (
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5 text-xs uppercase tracking-[0.2em] text-sandstone/40">

              {dockyard?.location && (
                <span>
                  {dockyard.location}
                </span>
              )}

              {dockyard?.location && dockyard?.timings && (
                <span className="hidden md:block text-gold/40">
                  ·
                </span>
              )}

              {dockyard?.timings && (
                <span>
                  {dockyard.timings}
                </span>
              )}

            </div>
          )}

        </div>

      </section>


      {/* =========================================================
          INSTAGRAM REELS
      ========================================================= */}
      <InstagramReels
        reels={siteSettings?.lalitInstagramReels || []}
        title="Hotel Lalit Imperial on Instagram"
        subtitle="Discover our suites, rooftop experiences and moments from Hotel Lalit Imperial."
      />


      {/* =========================================================
          BOOKING
      ========================================================= */}
      <section
        id="booking"
        className="px-6 py-24 text-center border-t border-white/10"
      >

        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Reservations
        </p>

        <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
          Reserve Hotel Lalit
        </h2>

        <p className="mt-4 text-sandstone/60">
          Your luxury Udaipur experience begins here.
        </p>

        {(property.bookingUrl ||
          property.roomCategories?.[0]?.bookingUrl) && (
          <a
            href={
              property.roomCategories?.[0]?.bookingUrl ||
              property.bookingUrl
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-gold text-obsidian uppercase tracking-widest text-xs hover:opacity-90 transition"
          >
            Reserve Now
          </a>
        )}

      </section>

    </main>
  );
}