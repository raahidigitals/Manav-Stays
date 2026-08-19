"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby6-jeWoPvujTgacXgaA04tveZmpxsHk-G8VDx_NW5gBHKd2DZ1xj3S2madSf5dCxs/exec";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedProperty, setSelectedProperty] = useState("Hotel Lalit");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    rooms: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          property: selectedProperty,
          name: formData.name,
          phone: formData.phone,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          adults: formData.adults,
          children: formData.children,
          rooms: formData.rooms,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Booking enquiry error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 px-6 md:px-12 bg-obsidian border-t border-gold/20"
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            Direct Reservation Guarantee
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-sandstone font-light mt-2">
            Book Direct with Manav Stays
          </h2>

          <p className="text-sandstone/60 text-sm font-light mt-2">
            Zero booking fees, best room rates guaranteed, and instant confirmation.
          </p>
        </div>

        <div className="bg-obsidian-card p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-gold">

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2
                size={48}
                className="text-gold mx-auto mb-4"
              />

              <h3 className="font-serif text-3xl text-sandstone mb-2">
                Booking Inquiry Received
              </h3>

              <p className="text-sandstone/70 text-sm font-light">
                Thank you for your enquiry. Our reservation manager will
                contact you shortly on WhatsApp or phone to confirm your stay.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* PROPERTY */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold mb-3 font-medium">
                  Select Property *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <button
                    type="button"
                    onClick={() => setSelectedProperty("Hotel Lalit")}
                    className={`py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold border transition-all ${
                      selectedProperty === "Hotel Lalit"
                        ? "bg-gold text-obsidian border-gold shadow-gold"
                        : "bg-obsidian text-sandstone/70 border-gold/20 hover:border-gold/50"
                    }`}
                  >
                    Hotel Lalit (Ultra Luxury)
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProperty("Hotel Naman")}
                    className={`py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold border transition-all ${
                      selectedProperty === "Hotel Naman"
                        ? "bg-gold text-obsidian border-gold shadow-gold"
                        : "bg-obsidian text-sandstone/70 border-gold/20 hover:border-gold/50"
                    }`}
                  >
                    Hotel Naman (Affordable)
                  </button>

                </div>
              </div>

              {/* NAME + PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Guest Full Name *
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Phone / WhatsApp Number *
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

              </div>

              {/* DATES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Check-in Date *
                  </label>

                  <input
                    name="checkIn"
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Check-out Date *
                  </label>

                  <input
                    name="checkOut"
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

              </div>

              {/* GUESTS + ROOMS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Adults *
                  </label>

                  <input
                    name="adults"
                    type="number"
                    min="1"
                    required
                    value={formData.adults}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Children
                  </label>

                  <input
                    name="children"
                    type="number"
                    min="0"
                    value={formData.children}
                    onChange={handleChange}
                    placeholder="e.g. 1"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-sandstone/60 mb-2 font-medium">
                    Rooms *
                  </label>

                  <input
                    name="rooms"
                    type="number"
                    min="1"
                    required
                    value={formData.rooms}
                    onChange={handleChange}
                    placeholder="e.g. 1"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/20 text-sandstone text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gold text-obsidian rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-all shadow-gold flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending Enquiry...</span>
                ) : (
                  <>
                    <span>Request Direct Reservation</span>
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          )}

          {/* CONTACT */}
          <div className="mt-8 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between text-xs text-sandstone/60 gap-4">
            <span>
              Direct Desk: Hotel Lalit: +91 93518 35522
            </span>

            <span>
              Hotel Naman: +91 88902 54529
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}