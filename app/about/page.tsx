import { client } from "@/lib/sanity";

const ABOUT_QUERY = `
  *[_type == "aboutUs"][0] {
    heroTitle,
    heroDescription,
    "heroImageUrl": heroImage.asset->url,

    storyTitle,
    story,
    "storyImageUrl": storyImage.asset->url,

    people[] {
      name,
      role,
      category,
      bio,
      quote,
      "imageUrl": image.asset->url
    },

    propertiesTitle,
    propertiesDescription,

    properties[] {
      "propertyName": property->name,
      "propertySlug": property->slug.current,
      title,
      tagline,
      description,
      "imageUrl": property->heroImage.asset->url,
      ctaLabel,
      ctaLink
    },

    vision,
    mission,

    values[] {
      title,
      description
    },

    ctaTitle,
    ctaDescription,
    primaryCtaLabel,
    primaryCtaLink,
    secondaryCtaLabel,
    secondaryCtaLink
  }
`;

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY,{},{cache: "no-store"});
   
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

  const people = about.people || [];
  const founder = people.find(
    (person: { category?: string }) => person.category === "leadership"
  );

  const marketingPeople = people.filter(
    (person: { category?: string }) => person.category === "marketing"
  );

  const teamPeople = people.filter(
    (person: { category?: string }) => person.category === "team"
  );

  return (
    <main className="min-h-screen bg-obsidian text-sandstone font-sans overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        {about.heroImageUrl && (
          <img
            src={about.heroImageUrl}
            alt={about.heroTitle || "Manav Stays & Hospitality"}
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

            {about.storyImageUrl && (
              <div className="overflow-hidden rounded-3xl border border-gold/10">

                <img
                  src={about.storyImageUrl}
                  alt={about.storyTitle || "Our Story"}
                  className="w-full aspect-[4/5] object-cover transition duration-700 hover:scale-105"
                />

              </div>
            )}

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
          PEOPLE BEHIND MANAV STAYS
      ========================================================= */}
      {people.length > 0 && (
        <section className="px-6 md:px-10 py-20 md:py-32 bg-[#0b0b0b] border-y border-white/10">

          <div className="max-w-7xl mx-auto">

            {/* SECTION HEADER */}

            <div className="max-w-3xl mb-14 md:mb-20">

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                The People Behind It
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
                People Behind Manav Stays
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-sandstone/60">
                Hospitality is ultimately about people — the people who create
                the experience, care about the details and shape the journey
                behind every stay.
              </p>

            </div>


            {/* =====================================================
                FOUNDER
            ===================================================== */}

            {founder && (
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center mb-24 md:mb-32">

                {/* FOUNDER IMAGE */}

                {founder.imageUrl ? (
                  <div className="overflow-hidden rounded-3xl border border-gold/20">

                    <img
                      src={founder.imageUrl}
                      alt={founder.name || "Founder"}
                      className="w-full aspect-[4/5] object-cover"
                    />

                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] rounded-3xl bg-white/5 border border-gold/10 flex items-center justify-center">
                    <span className="text-sm text-sandstone/30">
                      Founder image coming soon
                    </span>
                  </div>
                )}


                {/* FOUNDER CONTENT */}

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                    Founder & Leadership
                  </p>

                  <h3 className="font-[var(--font-cormorant)] text-5xl md:text-7xl text-sandstone leading-none">
                    {founder.name}
                  </h3>

                  {founder.role && (
                    <p className="mt-5 text-sm uppercase tracking-[0.18em] text-gold/80">
                      {founder.role}
                    </p>
                  )}

                  {founder.bio && (
                    <p className="mt-8 text-lg md:text-xl leading-relaxed text-sandstone/70 whitespace-pre-line">
                      {founder.bio}
                    </p>
                  )}

                  {founder.quote && (
                    <blockquote className="mt-10 pl-6 border-l border-gold/50">

                      <p className="font-[var(--font-cormorant)] text-2xl md:text-3xl italic leading-relaxed text-sandstone">
                        “{founder.quote}”
                      </p>

                    </blockquote>
                  )}

                </div>

              </div>
            )}


            {/* =====================================================
                DIGITAL & MARKETING PARTNER
            ===================================================== */}

            {marketingPeople.length > 0 && (
              <div className="border-t border-white/10 pt-16 md:pt-20">

                <div className="max-w-3xl mb-12">

                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                    Digital & Marketing Partner
                  </p>

                  <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl text-sandstone">
                    The Digital Journey Behind Manav Stays
                  </h3>

                  <p className="mt-5 text-base md:text-lg leading-relaxed text-sandstone/60">
                    Building a hospitality brand today goes beyond the
                    physical experience. The right story, visibility and
                    digital connection help guests discover and choose it.
                  </p>

                </div>


                <div className="grid md:grid-cols-2 gap-8">

                  {marketingPeople.map(
                    (
                      person: {
                        name?: string;
                        role?: string;
                        bio?: string;
                        quote?: string;
                        imageUrl?: string;
                      },
                      index: number
                    ) => (

                      <article
                        key={`${person.name}-${index}`}
                        className="rounded-3xl border border-gold/10 bg-white/[0.02] overflow-hidden"
                      >

                        {person.imageUrl && (
                          <div className="aspect-[16/10] overflow-hidden">

                            <img
                              src={person.imageUrl}
                              alt={person.name || "Raahii Digital"}
                              className="w-full h-full object-cover"
                            />

                          </div>
                        )}

                        <div className="p-8 md:p-10">

                          <h4 className="font-[var(--font-cormorant)] text-3xl md:text-4xl text-sandstone">
                            {person.name}
                          </h4>

                          {person.role && (
                            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-gold/80">
                              {person.role}
                            </p>
                          )}

                          {person.bio && (
                            <p className="mt-6 text-base leading-relaxed text-sandstone/60 whitespace-pre-line">
                              {person.bio}
                            </p>
                          )}

                          {person.quote && (
                            <p className="mt-7 font-[var(--font-cormorant)] text-xl italic text-sandstone/80">
                              “{person.quote}”
                            </p>
                          )}

                        </div>

                      </article>

                    )
                  )}

                </div>

              </div>
            )}


            {/* =====================================================
                OTHER TEAM MEMBERS
            ===================================================== */}

            {teamPeople.length > 0 && (
              <div className="mt-20 border-t border-white/10 pt-16">

                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">
                  Our Team
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {teamPeople.map(
                    (
                      person: {
                        name?: string;
                        role?: string;
                        imageUrl?: string;
                        bio?: string;
                      },
                      index: number
                    ) => (

                      <article
                        key={`${person.name}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                      >

                        {person.imageUrl && (
                          <div className="aspect-square overflow-hidden">

                            <img
                              src={person.imageUrl}
                              alt={person.name || "Manav Stays team"}
                              className="w-full h-full object-cover"
                            />

                          </div>
                        )}

                        <div className="p-7">

                          <h4 className="font-[var(--font-cormorant)] text-2xl text-sandstone">
                            {person.name}
                          </h4>

                          {person.role && (
                            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-gold/70">
                              {person.role}
                            </p>
                          )}

                          {person.bio && (
                            <p className="mt-4 text-sm leading-relaxed text-sandstone/60">
                              {person.bio}
                            </p>
                          )}

                        </div>

                      </article>

                    )
                  )}

                </div>

              </div>
            )}

          </div>

        </section>
      )}


      {/* =========================================================
    VISION & MISSION
========================================================= */}
{(about.vision || about.mission) && (
  <section className="relative px-6 md:px-10 py-24 md:py-36 bg-[#090909] overflow-hidden">

    {/* SUBTLE BACKGROUND DETAIL */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

    <div className="relative max-w-7xl mx-auto">

      {/* SECTION INTRO */}

      <div className="max-w-3xl mb-14 md:mb-20">

        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
          What Guides Us
        </p>

        <h2 className="font-[var(--font-cormorant)] text-5xl md:text-7xl leading-[1] text-sandstone">
          A clear vision.
          <br />
          A meaningful purpose.
        </h2>

        <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-sandstone/50">
          Everything we create at Manav Stays is guided by a simple
          understanding — hospitality should feel thoughtful, genuine
          and effortless.
        </p>

      </div>


      {/* VISION + MISSION */}

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

        {/* =====================================================
            VISION
        ===================================================== */}

        {about.vision && (
          <article className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:p-14 transition-all duration-500 hover:border-gold/25">

            {/* NUMBER */}

            <div className="flex items-center justify-between mb-12">

              <span className="text-xs uppercase tracking-[0.25em] text-gold/70">
                01
              </span>

              <span className="w-12 h-px bg-gold/30 group-hover:w-20 transition-all duration-500" />

            </div>


            {/* TITLE */}

            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Our Vision
            </p>

            <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl leading-tight text-sandstone">
              To make hospitality feel genuinely human.
            </h3>


            {/* CONTENT */}

            <div className="mt-8 max-w-xl">

              <p className="text-base md:text-lg leading-[1.9] text-sandstone/65 whitespace-pre-line">
                {about.vision}
              </p>

            </div>

          </article>
        )}


        {/* =====================================================
            MISSION
        ===================================================== */}

        {about.mission && (
          <article className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:p-14 transition-all duration-500 hover:border-gold/25">

            {/* NUMBER */}

            <div className="flex items-center justify-between mb-12">

              <span className="text-xs uppercase tracking-[0.25em] text-gold/70">
                02
              </span>

              <span className="w-12 h-px bg-gold/30 group-hover:w-20 transition-all duration-500" />

            </div>


            {/* TITLE */}

            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Our Mission
            </p>

            <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl leading-tight text-sandstone">
              Creating stays worth remembering.
            </h3>


            {/* CONTENT */}

            <div className="mt-8 max-w-xl">

              <p className="text-base md:text-lg leading-[1.9] text-sandstone/65 whitespace-pre-line">
                {about.mission}
              </p>

            </div>

          </article>
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

            <div className="max-w-3xl mb-14 md:mb-20">

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Our Properties
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
                {about.propertiesTitle || "Stay Your Way in Udaipur"}
              </h2>

              {about.propertiesDescription && (
                <p className="mt-6 text-lg leading-relaxed text-sandstone/60">
                  {about.propertiesDescription}
                </p>
              )}

            </div>


            <div className="space-y-20 md:space-y-28">

              {about.properties.map(
                (
                  property: {
                    propertyName?: string;
                    propertySlug?: string;
                    title?: string;
                    tagline?: string;
                    description?: string;
                    imageUrl?: string;
                    ctaLabel?: string;
                    ctaLink?: string;
                  },
                  index: number
                ) => (

                  <article
                    key={`${property.propertyName}-${index}`}
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                  >

                    <div
                      className={`overflow-hidden rounded-3xl border border-gold/10 ${
                        index % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >

                      {property.imageUrl ? (
                        <img
                          src={property.imageUrl}
                          alt={
                            property.title ||
                            property.propertyName ||
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


                    <div
                      className={`${
                        index % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >

                      <span className="text-xs uppercase tracking-[0.2em] text-gold/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-4 font-[var(--font-cormorant)] text-4xl md:text-5xl text-sandstone">
                        {property.title ||
                          property.propertyName ||
                          "Manav Stays"}
                      </h3>

                      {property.tagline && (
                        <p className="mt-5 font-[var(--font-cormorant)] text-2xl md:text-3xl text-gold/90">
                          {property.tagline}
                        </p>
                      )}

                      {property.description && (
                        <p className="mt-5 text-base md:text-lg leading-relaxed text-sandstone/60 whitespace-pre-line">
                          {property.description}
                        </p>
                      )}

                      {property.ctaLabel && property.ctaLink && (
                        <a
                          href={property.ctaLink}
                          className="inline-flex mt-8 items-center gap-3 rounded-full border border-gold/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
                        >
                          {property.ctaLabel}
                          <span>→</span>
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
            {about.ctaTitle || "Discover Udaipur with Manav Stays"}
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight max-w-4xl mx-auto text-sandstone">
            Your stay is more than a room.
            <br />
            It's the experience.
          </h2>

          {about.ctaDescription && (
            <p className="mt-7 max-w-2xl mx-auto text-lg leading-relaxed text-sandstone/60">
              {about.ctaDescription}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            {about.primaryCtaLabel && about.primaryCtaLink && (
              <a
                href={about.primaryCtaLink}
                className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
              >
                {about.primaryCtaLabel}
                <span>→</span>
              </a>
            )}

            {about.secondaryCtaLabel && about.secondaryCtaLink && (
              <a
                href={about.secondaryCtaLink}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/70 transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                {about.secondaryCtaLabel}
                <span>→</span>
              </a>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}