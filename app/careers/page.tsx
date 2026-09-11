import type { Metadata } from "next";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Careers at Manav Stays & Hospitality | Join Our Team",
  description:
    "Explore career opportunities at Manav Stays & Hospitality in Udaipur. Join a growing hospitality team focused on genuine service, meaningful experiences and thoughtful guest care.",
  keywords: [
    "careers at Manav Stays",
    "Manav Stays jobs",
    "hospitality jobs in Udaipur",
    "hotel jobs in Udaipur",
    "Manav Stays careers",
    "hospitality careers Udaipur",
  ],
};

const CAREER_QUERY = `
  *[_type == "careerPage"][0] {
    heroTitle,
    heroDescription,
    "heroImageUrl": heroImage.asset->url,

    lifeTitle,
    lifeDescription,
    "lifeImageUrl": lifeImage.asset->url,

    whyJoinTitle,
    whyJoinDescription,

    benefits[] {
      title,
      description
    },

    openPositions[] {
      title,
      location,
      type,
      description,
      requirements,
      applyLabel,
      applyLink
    },

    generalApplicationTitle,
    generalApplicationDescription,
    generalApplicationEmail,

    finalCtaTitle,
    finalCtaDescription,
    primaryCtaLabel,
    primaryCtaLink
  }
`;

export default async function CareersPage() {
  const career = await client.fetch(
    CAREER_QUERY,
    {},
    { cache: "no-store" }
  );

  if (!career) {
    return (
      <main className="min-h-screen bg-obsidian text-sandstone">
        <section className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70">
              Manav Stays & Hospitality
            </p>

            <h1 className="mt-5 font-[var(--font-cormorant)] text-5xl md:text-7xl">
              Careers
            </h1>

            <p className="mt-6 text-sandstone/60">
              Career opportunities are currently being prepared.
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

      <section className="relative min-h-[78vh] md:min-h-[82vh] flex items-end overflow-hidden">

        {/* HERO IMAGE */}
        {career.heroImageUrl ? (
          <div className="absolute inset-0 overflow-hidden">

            <img
              src={career.heroImageUrl}
              alt={
                career.heroTitle ||
                "Careers at Manav Stays & Hospitality, Udaipur"
              }
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Cinematic image treatment */}
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/10" />

          </div>
        ) : (
          <div className="absolute inset-0 bg-[#0b0b0b]" />
        )}


        {/* HERO CONTENT */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-40">

          <div className="max-w-4xl">

            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-6">
              Careers at Manav Stays & Hospitality
            </p>

            <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.02em] text-white">
              {career.heroTitle || "Build Something Meaningful With Us"}
            </h1>

            {career.heroDescription && (
              <p className="mt-7 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/80">
                {career.heroDescription}
              </p>
            )}

          </div>

        </div>

      </section>

      {/* =========================================================
          LIFE AT MANAV STAYS
      ========================================================= */}

      {(career.lifeTitle ||
        career.lifeDescription ||
        career.lifeImageUrl) && (
        <section className="px-6 md:px-10 py-20 md:py-32">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* IMAGE */}

            {career.lifeImageUrl ? (
              <div className="overflow-hidden rounded-3xl border border-gold/10">

                <img
                  src={career.lifeImageUrl}
                  alt={career.lifeTitle || "Life at Manav Stays"}
                  className="w-full aspect-[4/5] object-cover transition duration-700 hover:scale-105"
                />

              </div>
            ) : (
              <div className="w-full aspect-[4/5] rounded-3xl border border-gold/10 bg-white/[0.03] flex items-center justify-center">
                <span className="text-sm text-sandstone/30">
                  Life at Manav Stays image coming soon
                </span>
              </div>
            )}

            {/* CONTENT */}

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Life at Manav Stays
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
                {career.lifeTitle || "More Than Just a Workplace"}
              </h2>

              {career.lifeDescription && (
                <p className="mt-8 text-lg md:text-xl leading-relaxed text-sandstone/70 whitespace-pre-line">
                  {career.lifeDescription}
                </p>
              )}

            </div>

          </div>

        </section>
      )}


      {/* =========================================================
          WHY JOIN US
      ========================================================= */}

      {(career.whyJoinTitle ||
        career.whyJoinDescription ||
        career.benefits?.length > 0) && (
        <section className="px-6 md:px-10 py-20 md:py-32 bg-[#0b0b0b] border-y border-white/10">

          <div className="max-w-7xl mx-auto">

            {/* HEADER */}

            <div className="max-w-3xl mb-14 md:mb-20">

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Why Join Us
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
                {career.whyJoinTitle || "Grow With a Team That Cares"}
              </h2>

              {career.whyJoinDescription && (
                <p className="mt-6 text-lg leading-relaxed text-sandstone/60">
                  {career.whyJoinDescription}
                </p>
              )}

            </div>


            {/* BENEFITS */}

            {career.benefits?.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">

                {career.benefits.map(
                  (
                    benefit: {
                      title?: string;
                      description?: string;
                    },
                    index: number
                  ) => (

                    <article
                      key={`${benefit.title}-${index}`}
                      className="bg-[#0b0b0b] min-h-[240px] p-8 md:p-10 flex flex-col justify-between group"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-xs uppercase tracking-[0.2em] text-gold/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="w-10 h-px bg-gold/20 group-hover:w-16 transition-all duration-500" />

                      </div>

                      <div className="mt-12">

                        <h3 className="font-[var(--font-cormorant)] text-3xl md:text-4xl text-sandstone">
                          {benefit.title || "Opportunity"}
                        </h3>

                        {benefit.description && (
                          <p className="mt-4 text-sm md:text-base leading-relaxed text-sandstone/55">
                            {benefit.description}
                          </p>
                        )}

                      </div>

                    </article>

                  )
                )}

              </div>
            )}

          </div>

        </section>
      )}


      {/* =========================================================
          OPEN POSITIONS
      ========================================================= */}

      {career.openPositions?.length > 0 && (
        <section className="px-6 md:px-10 py-20 md:py-32">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-3xl mb-14 md:mb-20">

              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Opportunities
              </p>

              <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl text-sandstone">
                Open Positions
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-sandstone/60">
                Find your place in our growing hospitality team and help us
                create experiences guests remember.
              </p>

            </div>


            <div className="space-y-5">

              {career.openPositions.map(
                (
                  position: {
                    title?: string;
                    location?: string;
                    type?: string;
                    description?: string;
                    requirements?: string;
                    applyLabel?: string;
                    applyLink?: string;
                  },
                  index: number
                ) => (

                  <article
                    key={`${position.title}-${index}`}
                    className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10 lg:p-12 transition-all duration-500 hover:border-gold/30"
                  >

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

                      <div className="max-w-3xl">

                        <div className="flex flex-wrap items-center gap-3 mb-5">

                          <span className="text-xs uppercase tracking-[0.2em] text-gold/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {position.location && (
                            <span className="text-xs uppercase tracking-[0.15em] text-sandstone/40">
                              {position.location}
                            </span>
                          )}

                          {position.type && (
                            <span className="text-xs uppercase tracking-[0.15em] text-sandstone/40">
                              {position.type}
                            </span>
                          )}

                        </div>

                        <h3 className="font-[var(--font-cormorant)] text-4xl md:text-5xl text-sandstone">
                          {position.title || "Open Position"}
                        </h3>

                        {position.description && (
                          <p className="mt-5 text-base md:text-lg leading-relaxed text-sandstone/60">
                            {position.description}
                          </p>
                        )}

                        {position.requirements && (
                          <div className="mt-7">

                            <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-3">
                              What We're Looking For
                            </p>

                            <p className="text-sm md:text-base leading-relaxed text-sandstone/55 whitespace-pre-line">
                              {position.requirements}
                            </p>

                          </div>
                        )}

                      </div>


                      {position.applyLink && (
                        <div className="lg:pt-8 shrink-0">

                          <a
                            href={position.applyLink}
                            className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
                          >
                            {position.applyLabel || "Apply Now"}
                            <span>→</span>
                          </a>

                        </div>
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
          GENERAL APPLICATION
      ========================================================= */}

      {(career.generalApplicationTitle ||
        career.generalApplicationDescription ||
        career.generalApplicationEmail) && (
        <section className="px-6 md:px-10 py-20 md:py-32 bg-[#090909]">

          <div className="max-w-5xl mx-auto text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Don't See Your Role?
            </p>

            <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl leading-tight text-sandstone">
              {career.generalApplicationTitle ||
                "We'd Still Love to Hear From You"}
            </h2>

            {career.generalApplicationDescription && (
              <p className="mt-7 max-w-2xl mx-auto text-lg leading-relaxed text-sandstone/60">
                {career.generalApplicationDescription}
              </p>
            )}

            {career.generalApplicationEmail && (
              <a
                href={`mailto:${career.generalApplicationEmail}`}
                className="inline-flex mt-9 items-center gap-3 rounded-full border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
              >
                Send Your CV
                <span>→</span>
              </a>
            )}

          </div>

        </section>
      )}


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 md:px-10 py-24 md:py-36">

        <div className="max-w-7xl mx-auto rounded-3xl border border-gold/15 bg-white/[0.02] p-10 md:p-20 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
            {career.finalCtaTitle || "Build Your Journey With Us"}
          </p>

          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto text-sandstone">
            Great hospitality starts with great people.
          </h2>

          {career.finalCtaDescription && (
            <p className="mt-7 max-w-2xl mx-auto text-lg leading-relaxed text-sandstone/60">
              {career.finalCtaDescription}
            </p>
          )}

          {career.primaryCtaLabel && career.primaryCtaLink && (
            <a
              href={career.primaryCtaLink}
              className="inline-flex mt-9 items-center gap-3 rounded-full border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
            >
              {career.primaryCtaLabel}
              <span>→</span>
            </a>
          )}

        </div>

      </section>

    </main>
  );
}