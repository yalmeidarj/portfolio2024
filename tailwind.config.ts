import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          "background-dark": "#292524",
          midBackground: "#1e1b19",
          black: "#0c0b0b",
          title: "#0f9486",
          // titleD: "#0FA760",
          midTitle: "#042320",
          tittleDarker: "#0c766b",
          tittleLighter: "#2be9d5",
          "text-accent": "#0f9486",
          text: "#2e4750",
          "text-dark": "#f0faf8",
          borderColor: "#019e75",

          projectCardMix: "#042320",
          // projectCardMix: "#2e4750",
          projectCard: "#0c0b0b",
          // projectCard: "#2e4750",

          "background-light": "#F5F5F5",
          "midBackground-light": "#FEFEFE",
          "text-light": "#333333",
          "title-accent-light": "#ffa414",
          "text-accent-light": "#ff9f1c",
          // "text-accent-lightD": "#FFB71C",
          "borderColor-light": "#b48a09",
          "nav-light": "#e1d09c",
        },
        // custom: {
        //   primary: "#8BC6EC",
        //   background: "#f0faf8",
        //   "background-dark": "#292524",
        //   midBackground: "#1e1b19",
        //   black: "#0c0b0b",
        //   // title: "#b48a09",
        //   title: "#0f9486",
        //   text: "#2e4750",
        //   // primary: "#e8f8f5",
        //   secondary: "#d1e0dc",
        //   accent: "#ff9f1c",
        //   light: "#f0faf8",
        //   dark: "#000",
        //   "text-primary": "#2e4750",
        //   "text-secondary": "#547980",
        //   "text-light": "#d1e0dc",
        //   borderColor: "#019e75",
        //   // borderColor: "#e4b142",
        //   "border-secondary": "#a4bfb3",
        // },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        "dots-sm": "8px",
        "dots-md": "12px",
        "dots-lg": "16px",
      },
      patterns: {
        "green-100": "#f0fdf4",
        opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
        },
        sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
        },
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
  darkMode: "class",
};
export default config;
