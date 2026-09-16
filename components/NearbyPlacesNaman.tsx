"use client";

import { ArrowUpRight, MapPin } from "lucide-react";

const nearbyPlaces = [
  {
    name: "Marvel Water Park",
    category: "FAMILY",
    distance: "Approx. 2 km",
    description:
      "A fun-filled destination for families and a convenient leisure option close to the hotel.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Marvel+Water+Park,+Udaipur",
  },
  {
    name: "Citykart, Sector 12",
    category: "SHOPPING",
    distance: "Approx. 2 km",
    description:
      "A convenient shopping destination for everyday essentials, fashion and more.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Citykart+Sector+12,+Udaipur",
  },
  {
    name: "Reliance SMART Superstore",
    category: "SHOPPING",
    distance: "Approx. 2 km",
    description:
      "A nearby supermarket for groceries, essentials and everyday shopping.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Reliance+SMART+Superstore+Paras+Prime+Mall+Udaipur",
  },
  {
    name: "Udaipur City Railway Station",
    category: "TRANSPORT",
    distance: "Approx. 5 km",
    description:
      "Convenient access to Udaipur's main railway connection.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Udaipur+City+Railway+Station",
  },
  {
    name: "Lake Pichola",
    category: "LAKE",
    distance: "Approx. 6 km",
    description:
      "The iconic lake at the heart of Udaipur, surrounded by palaces, ghats and historic landmarks.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lake+Pichola,+Udaipur",
  },
  {
    name: "City Palace",
    category: "HERITAGE",
    distance: "Approx. 6 km",
    description:
      "Udaipur's magnificent royal palace complex overlooking Lake Pichola.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=City+Palace,+Udaipur",
  },
  {
    name: "Jagdish Temple",
    category: "HERITAGE",
    distance: "Approx. 6 km",
    description:
      "A historic temple celebrated for its intricate architecture and stone carvings.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jagdish+Temple,+Udaipur",
  },
  {
    name: "Jagmandir Island Palace",
    category: "PALACE",
    distance: "Approx. 6–7 km",
    description:
      "A historic island palace set beautifully in the waters of Lake Pichola.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jagmandir+Island+Palace,+Udaipur",
  },
  {
    name: "Saheliyon Ki Bari",
    category: "GARDEN",
    distance: "Approx. 7–8 km",
    description:
      "A historic garden known for fountains, marble architecture and royal-era charm.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Saheliyon+Ki+Bari,+Udaipur",
  },
  {
    name: "Gangaur Ghat",
    category: "GHAT",
    distance: "Approx. 6–7 km",
    description:
      "A scenic waterfront on Lake Pichola and a beautiful place to experience Udaipur's old-city atmosphere.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Gangaur+Ghat,+Udaipur",
  },
  {
    name: "Bagore Ki Haveli",
    category: "CULTURE",
    distance: "Approx. 6–7 km",
    description:
      "A historic haveli showcasing Mewar's art, culture and traditional heritage.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bagore+Ki+Haveli,+Udaipur",
  },
  {
    name: "Ambrai Ghat",
    category: "SUNSET",
    distance: "Approx. 7 km",
    description:
      "A picturesque lakeside viewpoint with beautiful views of the City Palace and Lake Pichola.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ambrai+Ghat,+Udaipur",
  },
  {
    name: "Monsoon Palace",
    category: "PALACE",
    distance: "Approx. 11–12 km",
    description:
      "A hilltop palace offering sweeping views of Udaipur and the surrounding Aravalli hills.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Monsoon+Palace,+Udaipur",
  },
];

export default function NearbyPlacesNaman() {
  return (
    <section className="relative overflow-hidden bg-[#11110f] py-24 text-[#f4ead7] md:py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#c9a45c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#c9a45c]">
              Explore Udaipur
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Stay connected
              <br />
              <span className="italic text-[#c9a45c]">
                to the city.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-white/60 md:text-lg">
              From everyday conveniences and family experiences to
              Udaipur&apos;s iconic lakes, palaces and heritage landmarks,
              Hotel Naman keeps you within easy reach of the city.
            </p>
          </div>

        </div>


        {/* Location Grid */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {nearbyPlaces.map((place, index) => (
            <article
              key={place.name}
              className="group relative bg-[#151512] p-7 transition-all duration-500 hover:bg-[#1c1c18] md:p-8"
            >

              {/* Top row */}
              <div className="mb-10 flex items-center justify-between">

                <span className="font-serif text-sm text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-medium tracking-[0.25em] text-[#c9a45c]/80">
                  {place.category}
                </span>

              </div>


              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a45c]/30 text-[#c9a45c] transition-all duration-500 group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c] group-hover:text-[#11110f]">
                <MapPin size={18} strokeWidth={1.5} />
              </div>


              {/* Place */}
              <h3 className="font-serif text-2xl text-[#f4ead7]">
                {place.name}
              </h3>

              {/* Distance */}
              <p className="mt-2 text-sm font-medium text-[#c9a45c]">
                {place.distance}
              </p>

              {/* Description */}
              {/*<p className="mt-4 min-h-[72px] text-sm leading-6 text-white/45">
                {place.description}
              </p>*/}


              {/* Google Maps */}
              <a
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 border-b border-[#c9a45c]/40 pb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#f4ead7] transition-all duration-300 hover:border-[#c9a45c] hover:text-[#c9a45c]"
              >
                View on Google Maps

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

            </article>
          ))}

        </div>


        {/* Note */}
        <div className="mt-8 flex items-center gap-2 text-xs text-white/30">
          <MapPin size={13} />

          <span>
            Distances are approximate and may vary depending on the route.
          </span>
        </div>

      </div>
    </section>
  );
}