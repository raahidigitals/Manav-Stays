import { client } from "@/lib/sanity";

const ABOUT_QUERY = `
  *[_type == "aboutUs"][0] {
    heroTitle,
    heroDescription,
    "heroImageUrl": heroImage.asset->url,

    storyTitle,
    story,
    "storyImageUrl": storyImage.asset->url,

    vision,
    mission,
    values,

    properties[] {
      name,
      shortDescription,
      description,
      "imageUrl": image.asset->url,
      ctaText,
      ctaLink
    }
  }
`;

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY);

  if (!about) {
    return (
      <main className="min-h-screen bg-obsidian text-sandstone">
        <section className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold/70">
              Manav Stays & Hospitality
            </p>

            <h1 className="mt-4 font-[var(--font-cormorant)] text-5xl md:text-7xl">
              About Us
            </h1>

            <p className="mt-5 text-sandstone/60">
              About Us content is currently being prepared.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-obsidian text-sandstone font-sans overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        {about.heroImageUrl && (
          <img
            src={about.heroImageUrl}
            alt={
              about.heroTitle ||
              "Manav Stays & Hospitality"
            }
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">

          <div className="max-w-4xl">

            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-5">
              Manav Stays & Hospitality
            </p>

            <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] text-white">
              {about.heroTitle || "About Manav Stays"}
            </h1>

            {about.heroDescription && (
              <p className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
                {about.heroDescription}
              </p>
            )}

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="px-6 md:px-10 py-20 md:py-32">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-4xl">

            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
              About Manav Stays & Hospitality
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
              Hospitality, Designed Around You
            </h2>

            <div className="mt-8 space-y-6 text-lg md:text-xl leading-relaxed text-sandstone/70">

              <p>
                Manav Stays & Hospitality is a Udaipur-based hospitality group
                built around a simple belief — a good stay is not just about a
                room, but about how you feel while you're there.
              </p>

              <p>
                Operating across hospitality and dining, Manav Stays brings
                together thoughtfully designed stays and experiences that
                balance comfort, quality, simplicity, and attentive service.
              </p>

              <p>
                Our focus is straightforward: to give every guest the best
                possible experience, whether they are visiting Udaipur for a
                holiday, a business trip, a celebration, or simply a quiet
                escape.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STORY
      ========================================================= */}
      {(about.story || about.storyImageUrl) && (
        <section className="px-6 md:px-10 pb-20 md:pb-32">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* IMAGE */}

            {about.storyImageUrl && (
              <div className="overflow-hidden rounded-3xl border border-gold/10">

                <img
                  src={about.storyImageUrl}
                  alt={about.storyTitle || "Our Story"}
                  className="w-full aspect-[4/5] object-cover transition duration-700 hover:scale-105"
                />

              </div>
            )}


            {/* CONTENT */}

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Our Story
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl leading-tight text-sandstone">
                {about.storyTitle || "Our Story"}
              </h2>

              {about.story && (
                <p className="mt-7 text-lg md:text-xl leading-relaxed text-sandstone/70 whitespace-pre-line">
                  {about.story}
                </p>
              )}

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          VISION & MISSION
      ========================================================= */}
      {(about.vision || about.mission) && (
        <section className="px-6 md:px-10 py-20 md:py-28 border-y border-white/10 bg-[#0b0b0b]">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">

            {/* VISION */}

            {about.vision && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                  Our Vision
                </p>

                <p className="font-[var(--font-cormorant)] text-3xl md:text-4xl leading-relaxed text-sandstone">
                  {about.vision}
                </p>

              </div>
            )}


            {/* MISSION */}

            {about.mission && (
              <div>

                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                  Our Mission
                </p>

                <p className="font-[var(--font-cormorant)] text-3xl md:text-4xl leading-relaxed text-sandstone">
                  {about.mission}
                </p>

              </div>
            )}

          </div>

        </section>
      )}
{/* =========================================================
    VALUES
========================================================= */}
{about.values?.length > 0 && (
  <section className="px-6 md:px-10 py-20 md:py-32">

    <div className="max-w-7xl mx-auto">

      <div className="mb-12 md:mb-16">

        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
          Our Values
        </p>

        <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl text-sandstone">
          What We Believe In
        </h2>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">

        {about.values.map(
          (
            value: {
              title?: string;
              description?: string;
            },
            index: number
          ) => (

            <div
              key={index}
              className="bg-obsidian p-8 md:p-10 min-h-[220px] flex items-end"
            >

              <div>

                <span className="text-xs uppercase tracking-[0.2em] text-gold/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-[var(--font-cormorant)] text-3xl text-sandstone">
                  {value.title || "Our Value"}
                </h3>

                {value.description && (
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-sandstone/60">
                    {value.description}
                  </p>
                )}

              </div>

            </div>

          )
        )}

      </div>

    </div>

  </section>
)}

      

      {/* =========================================================
          OUR PROPERTIES
      ========================================================= */}
      {about.properties?.length > 0 && (
        <section className="px-6 md:px-10 py-20 md:py-32 bg-[#0b0b0b]">

          <div className="max-w-7xl mx-auto">

            {/* SECTION HEADER */}

            <div className="max-w-3xl mb-14 md:mb-20">

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Our Properties
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
                Stay Your Way in Udaipur
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-sandstone/60">
                From elevated stays to comfortable escapes and memorable
                dining experiences, discover the different ways to experience
                Udaipur with Manav Stays.
              </p>

            </div>


            {/* PROPERTY LIST */}

            <div className="space-y-20 md:space-y-28">

              {about.properties.map(
                (
                  property: {
                    name?: string;
                    shortDescription?: string;
                    description?: string;
                    imageUrl?: string;
                    ctaText?: string;
                    ctaLink?: string;
                  },
                  index: number
                ) => (

                  <article
                    key={`${property.name}-${index}`}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                  >

                    {/* IMAGE */}

                    <div
                      className={`overflow-hidden rounded-3xl border border-gold/10 ${
                        index % 2 !== 0
                          ? "lg:order-2"
                          : ""
                      }`}
                    >

                      {property.imageUrl ? (
                        <img
                          src={property.imageUrl}
                          alt={
                            property.name ||
                            "Manav Stays property"
                          }
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-white/5 flex items-center justify-center">
                          <span className="text-sm text-sandstone/30">
                            Property image coming soon
                          </span>
                        </div>
                      )}

                    </div>


                    {/* CONTENT */}

                    <div
                      className={`${
                        index % 2 !== 0
                          ? "lg:order-1"
                          : ""
                      }`}
                    >

                      <span className="text-xs uppercase tracking-[0.2em] text-gold/50">
                        0{index + 1}
                      </span>

                      <h3 className="mt-4 font-[var(--font-cormorant)] text-4xl md:text-5xl text-sandstone">
                        {property.name}
                      </h3>


                      {property.shortDescription && (
                        <p className="mt-5 font-[var(--font-cormorant)] text-2xl md:text-3xl text-gold/90">
                          {property.shortDescription}
                        </p>
                      )}


                      {property.description && (
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-sandstone/60 whitespace-pre-line">
                          {property.description}
                        </p>
                      )}


                      {property.ctaText &&
                        property.ctaLink && (
                          <a
                            href={property.ctaLink}
                            className="inline-flex mt-8 items-center gap-3 rounded-full border border-gold/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
                          >
                            {property.ctaText}

                            <span>
                              →
                            </span>

                          </a>
                        )}

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="px-6 md:px-10 py-24 md:py-36">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Our Philosophy
          </p>

          <h2 className="font-[var(--font-cormorant)] text-5xl md:text-7xl leading-[1.05] text-sandstone">

            Serve better.
            <br />

            Care more.
            <br />

            Make every stay memorable.

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-sandstone/60">
            At Manav Stays, we believe hospitality begins with understanding
            what guests actually need. We continuously work towards creating
            experiences where guests feel comfortable, valued and genuinely
            taken care of.
          </p>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">

        <div className="max-w-7xl mx-auto rounded-3xl border border-gold/15 bg-white/[0.02] p-10 md:p-20 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Discover Udaipur with Manav Stays
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight max-w-4xl mx-auto text-sandstone">
            Your stay is more than a room.
            <br />
            It's the experience.
          </h2>

          <p className="mt-7 max-w-2xl mx-auto text-lg leading-relaxed text-sandstone/60">
            From comfortable stays to memorable dining experiences, Manav
            Stays & Hospitality brings together multiple ways to experience
            Udaipur.
          </p>

          <a
            href="/"
            className="inline-flex mt-9 items-center gap-3 rounded-full border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
          >
            Explore Manav Stays
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  );
}