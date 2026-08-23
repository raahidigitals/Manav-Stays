
import {client, urlFor} from "../lib/sanity";
import GalleryRotator from "./GalleryRotator";
import { MapPin, Phone, GlassWater, UtensilsCrossed, Sparkles } from "lucide-react";

export default async function PropertyLalit() {
const property = await client.fetch(
  `*[_type == "property" && slug.current == "hotel-lalit-imperial"][0]{
    name,
    tagline,
    heroImage,
    gallery,
    description,
    location,
    rooms,
    amenities,
    bookingUrl
  }`
);
  return (
    <section id="lalit" className="py-24 px-6 md:px-12 bg-obsidian border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest">
              <Sparkles size={12} />
              <span>Ultra Luxury Segment • 12 Suites</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-sandstone font-light leading-tight">
              Hotel Lalit Imperial <br />
              <span className="font-normal">& Dockyard Bar Lounge</span>
            </h2>

            <p className="text-sandstone/70 text-sm md:text-base font-light leading-relaxed">
              Designed for discerning travellers seeking privacy and high-end lifestyle experiences. Featuring 12 curated luxury suites, an open-air rooftop restaurant, and Udaipur's exclusive <strong className="text-gold">Rooftop Igloo Seating</strong> experience.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/15">
              <div className="flex items-start gap-3">
                <GlassWater className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-sandstone">Dockyard Bar</h4>
                  <p className="text-xs text-sandstone/60">Craft cocktails & high-end ambiance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UtensilsCrossed className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-sandstone">Rooftop Igloos</h4>
                  <p className="text-xs text-sandstone/60">Exclusive igloo dining experience</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-sandstone/70">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                <span>Sohan Sadan, N.H.8, Bhuwana Bypass, Near PNB, Udaipur - 313001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <a href="tel:+919351835522" className="hover:text-gold transition-colors">
                  +91 93518 35522
                </a>
              </p>
            </div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-8">
  <a
    href="#booking"
    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-obsidian text-xs uppercase tracking-widest text-center min-w-[240px]"
  >
    Reserve Hotel Lalit Suite
  </a>

  <a
    href="https://wa.me/8890002755?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20table%20availability%20and%20rates%20at%20Dockyard%20Bar"
    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-obsidian text-xs uppercase tracking-widest text-center min-w-[240px]"
  >
    Reserve Table at Dockyard Bar
  </a>
</div>
          </div>
           <GalleryRotator
  name={property.name}
  images={
    property?.gallery?.map((image: any) =>
      urlFor(image).width(800).height(600).url()
    ) ?? []
  }
/>   

        </div>
          
        </div>
         </section>
  );
}
