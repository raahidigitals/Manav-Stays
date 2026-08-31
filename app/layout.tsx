import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Manav Stays & Hospitality | Luxury Hotels & Dining in Udaipur",
  description:
    "Experience boutique luxury at Hotel Lalit featuring Rooftop Igloo dining and Dockyard Bar, or enjoy premium affordable stays at Hotel Naman, Udaipur.",
  keywords: [
    "Manav Stays Udaipur",
    "Hotel Lalit Udaipur",
    "Hotel Naman Udaipur",
    "Dockyard Bar Lounge Udaipur",
    "Rooftop Igloo Restaurant Udaipur",
    "Boutique Stays in Udaipur",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
     <body className="bg-obsidian text-sandstone font-sans antialiased selection:bg-gold selection:text-obsidian">
  <Navbar />
  {children}
  <Footer />

  <Script
    id="google-tag-manager"
    strategy="afterInteractive"
  >
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NQDJG9XB');
    `}
  </Script>
</body>
    </html>
  );
}
