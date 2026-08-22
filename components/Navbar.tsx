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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-12">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/images/manavstayslogo.PNG"
            alt="Manav Stays & Hospitality"
            width={180}
            height={60}
            className="h-auto w-[125px] sm:w-[150px] md:w-[180px]"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest text-sandstone/80 font-medium">
          <Link
            href="/hotel-lalit"
            className="hover:text-gold transition-colors"
          >
            Hotel Lalit (Luxury)
          </Link>

          <Link
            href="/hotel-naman"
            className="hover:text-gold transition-colors"
          >
            Hotel Naman (Affordable)
          </Link>

          <Link
            href="/blog"
            className="hover:text-gold transition-colors"
          >
            Travel Journal
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* PHONE - DESKTOP */}
          <a
            href="tel:+919950767925"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span>+91 99507 67925</span>
          </a>

          {/* BOOK STAY */}
          <a
            href="https://wa.me/message/TKAO3SO455LAL1?text=Hello%20Manav%20Stays%2C%20I%20would%20like%20to%20book%20a%20stay."
            className="px-4 py-2.5 sm:px-5 bg-gold text-obsidian text-[10px] sm:text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold-light transition-all shadow-gold flex items-center gap-2"
          >
            <Calendar size={14} />
            <span>Book Stay</span>
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

          <nav className="flex flex-col px-6 py-6">

            <Link
              href="/hotel-lalit"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.2em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Hotel Lalit
              <span className="ml-2 text-gold/60">(Luxury)</span>
            </Link>

            <Link
              href="/hotel-naman"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.2em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Hotel Naman
              <span className="ml-2 text-gold/60">(Affordable)</span>
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="border-b border-gold/10 py-4 text-xs uppercase tracking-[0.2em] text-sandstone/80 hover:text-gold transition-colors"
            >
              Travel Journal
            </Link>

            <a
              href="tel:+919950767925"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-gold/10 py-4 text-xs uppercase tracking-[0.2em] text-gold"
            >
              <Phone size={15} />
              +91 99507 67925
            </a>

            <a
              href="https://wa.me/message/TKAO3SO455LAL1?text=Hello%20Manav%20Stays%2C%20I%20would%20like%20to%20book%20a%20stay."
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-widest text-obsidian"
            >
              <Calendar size={15} />
              Book Stay
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}