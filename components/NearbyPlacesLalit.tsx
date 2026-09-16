"use client";

import { ArrowUpRight, MapPin } from "lucide-react";

const nearbyPlaces = [
  {
    name: "Fateh Sagar Lake",
    category: "LAKE",
    distance: "Approx. 4.5 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Fateh+Sagar+Lake,+Udaipur",
  },
  {
    name: "Saheliyon Ki Bari",
    category: "HERITAGE",
    distance: "Approx. 4.0 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Saheliyon+Ki+Bari,+Udaipur",
  },
  {
    name: "Moti Magri",
    category: "HERITAGE",
    distance: "Approx. 4.5 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Moti+Magri,+Udaipur",
  },
  {
    name: "Shilpgram",
    category: "CULTURE",
    distance: "Approx. 5.5 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shilpgram,+Udaipur",
  },
  {
    name: "City Palace",
    category: "HERITAGE",
    distance: "Approx. 6.5–7 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=City+Palace,+Udaipur",
  },
  {
    name: "Lake Pichola",
    category: "LAKE",
    distance: "6.4 km drive",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Pichola,+Udaipur",
  },
  {
    name: "Jagdish Temple",
    category: "HERITAGE",
    distance: "Approx. 6.5 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jagdish+Temple,+Udaipur",
  },
  {
    name: "Bagore Ki Haveli",
    category: "CULTURE",
    distance: "Approx. 6.5–7 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bagore+Ki+Haveli,+Udaipur",
  },
  {
    name: "Gangaur Ghat",
    category: "GHAT",
    distance: "Approx. 6.5–7 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Gangaur+Ghat,+Udaipur",
  },
  {
    name: "Ambrai Ghat",
    category: "SUNSET",
    distance: "Approx. 7 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ambrai+Ghat,+Udaipur",
  },
  {
    name: "Monsoon Palace",
    category: "PALACE",
    distance: "Approx. 10–11 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Monsoon+Palace,+Udaipur",
  },
  {
    name: "Nexus Celebration Mall",
    category: "SHOPPING",
    distance: "Approx. 2 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nexus+Celebration+Mall,+Udaipur",
  },
  {
    name: "Urban Square Mall",
    category: "SHOPPING",
    distance: "Approx. 1 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Urban+Square+Mall,+Udaipur",
  },
  {
    name: "R.K. Circle",
    category: "CITY",
    distance: "Approx. 3.7 km",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=R.K.+Circle,+Udaipur",
  },
];

export default function NearbyPlaces() {
  return (
    <section className="relative overflow-hidden bg-[#11110f] py-20 text-[#f4ead7] md:py-24">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a45c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#c9a45c]">
              Explore Udaipur
            </p>

            <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">
              The city is{" "}
              <span className="italic text-[#c9a45c]">
                closer than you think.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-white/50 lg:text-right">
            Discover lakes, palaces, heritage landmarks and shopping
            destinations, all within easy reach of Hotel Lalit Imperial.
          </p>

        </div>


        {/* LOCATION GRID */}
        <div
          className="
            grid
            grid-cols-2
            gap-px
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-white/10
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >

          {nearbyPlaces.map((place, index) => (
            <article
              key={place.name}
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                bg-[#151512]
                p-5
                transition-all
                duration-300
                hover:bg-[#1c1c18]
                sm:min-h-[200px]
                sm:p-6
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <span className="font-serif text-xs text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[8px] font-medium tracking-[0.2em] text-[#c9a45c]/80">
                  {place.category}
                </span>

              </div>


              {/* ICON */}
              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a45c]/30 text-[#c9a45c] transition-all duration-300 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#11110f]">
                <MapPin size={15} strokeWidth={1.5} />
              </div>


              {/* NAME */}
              <h3 className="mt-4 font-serif text-lg leading-tight text-[#f4ead7]">
                {place.name}
              </h3>


              {/* DISTANCE */}
              <p className="mt-1 text-xs font-medium text-[#c9a45c]">
                {place.distance}
              </p>


              {/* MAP BUTTON */}
              <div className="mt-auto pt-5">

                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-[#c9a45c]
                  "
                >
                  Maps

                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

              </div>

            </article>
          ))}

        </div>


        {/* FOOTNOTE */}
        <div className="mt-5 flex items-center gap-2 text-[10px] text-white/25">
          <MapPin size={12} />

          <span>
            Distances are approximate and may vary depending on the route.
          </span>
        </div>

      </div>
    </section>
  );
}