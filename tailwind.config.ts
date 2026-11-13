import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sabc: {
          navy: "#002C5F",
          navyDark: "#001F43",
          dark: "#181b31",
          charcoal: "#121b1d",
          secondary: "#54595F",
          muted: "#7A7A7A",
          navLink: "#A0B6D0",
          accent: "#FE5D5B",
          amber: "#FFBC7D",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        slab: ["var(--font-roboto-slab)", "Roboto Slab", "serif"],
      },
      maxWidth: {
        sabc: "1140px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marqueeReverse 32s linear infinite",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;

