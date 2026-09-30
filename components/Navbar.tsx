"use client";

import { useState } from "react";
import { Phone, Calendar, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-gold/20">

      {/* MAIN NAVBAR */}
      <div className="max-w-[1400px] mx-auto flex items-center px-5 sm:px-6 lg:px-8 xl:px-10 py-3.5">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center shrink-0"
        >
          <Image
            src="/images/manavstayslogo.PNG"
            alt="Manav Stays & Hospitality"
            width={180}
            height={60}
            className="h-auto w-[120px] sm:w-[140px] lg:w-[150px]"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6 ml-6 xl:ml-10 text-[10px] xl:text-[11px] uppercase tracking-[0.12em] text-sandstone/80 font-medium">

          <Link
            href="/hotel-lalit"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            Hotel Lalit
            <span className="ml-1 text-gold/60">(Luxury Jacuzzi)</span>
          </Link>

          <Link
            href="/hotel-naman"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            Hotel Naman
            <span className="ml-1 text-gold/60">(Affordable)</span>
          </Link>

          <Link
            href="/blog"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            Travel Journal
          </Link>

          <Link
            href="/about"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            Contact Us
          </Link>

          <Link
            href="/careers"
            className="whitespace-nowrap hover:text-gold transition-colors"
          >
            Careers
          </Link>

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-5">

          {/* PHONE - DESKTOP */}
          <a
            href="tel:+918890002728"
            className="hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-[10px] uppercase tracking-[0.12em] text-gold hover:text-white transition-colors"
          >
            <Phone size={13} />
            <span>Call Now</span>
          </a>

          {/* BOOK NOW */}
          <a
            href="https://wa.me/918890002728?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Manav%20Stays"
            className="px-3.5 py-2.5 sm:px-4.5 bg-gold text-obsidian text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-semibold rounded-full hover:bg-gold-light transition-all shadow-gold flex items-center gap-1.5 whitespace-nowrap"
          >
            <Calendar size={13} />
            <span>Book Now</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-obsidian"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gold/20 bg-obsidian/98 backdrop-blur-xl">

          <nav className="flex flex-col px-6 py-5">

            <Link
              href="/hotel-lalit"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Hotel Lalit
              <span className="ml-2 text-gold/60">(Luxury Jacuzzi)</span>
            </Link>

            <Link
              href="/hotel-naman"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Hotel Naman
              <span className="ml-2 text-gold/60">(Affordable)</span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Travel Journal
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Contact Us
            </Link>

            <Link
              href="/careers"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Careers
            </Link>

            {/* PHONE */}
            <a
              href="tel:+918890002728"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-gold/10 py-4 text-xs uppercase tracking-[0.18em] text-gold"
            >
              <Phone size={15} />
              Call Now
            </a>

            {/* BOOK NOW */}
            <a
              href="https://wa.me/918890002728?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Manav%20Stays"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-widest text-obsidian"
            >
              <Calendar size={15} />
              Book Now
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}