"use client";

import { MapPin, Phone, ShieldCheck, Wifi, Coffee } from "lucide-react";

export default function PropertyNaman() {
  return (
    <section id="naman" className="py-24 px-6 md:px-12 bg-obsidian-card border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Naman Premium Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 mt-8">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Naman Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Premium Affordable • 24 Comfort Rooms</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-sandstone font-light leading-tight">
              Hotel Naman <br />
              <span className="italic text-gold font-normal">Comfort & Accessibility</span>
            </h2>

            <p className="text-sandstone/70 text-sm md:text-base font-light leading-relaxed">
              Located in the commercial heart of Hiran Magri, Sector 14, Hotel Naman offers 24 well-appointed, modern rooms tailored for corporate guests, leisure families, and value-conscious travellers looking for uncompromised quality.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/15">
              <div className="flex items-start gap-3">
                <Wifi className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-sandstone">High-Speed Wi-Fi</h4>
                  <p className="text-xs text-sandstone/60">Seamless work & leisure streaming</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Coffee className="text-gold mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-sandstone">In-House Dining</h4>
                  <p className="text-xs text-sandstone/60">Fresh meals & 24/7 room service</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-sandstone/70">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                <span>Plot 293, 100 Feet Rd, Near CA Circle, Opp GST Bhavan, Sector 14, Udaipur - 313002</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <a href="tel:+918890254529" className="hover:text-gold transition-colors">
                  +91 88902 54529
                </a>
              </p>
            </div>

            <a
              href="https://bookingengine.stayflexi.com/?hotel_id=29583"
              className="inline-block px-8 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold-light transition-all shadow-gold"
            >
              Book Hotel Naman Room
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
