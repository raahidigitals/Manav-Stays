import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C86B",
          dark: "#AA8820",
        },
        obsidian: {
          DEFAULT: "#0B0C0E",
          card: "#141619",
          light: "#1C1F24",
        },
        sandstone: {
          DEFAULT: "#F9F8F3",
          muted: "#E2DFC2",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
