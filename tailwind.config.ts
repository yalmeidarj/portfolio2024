import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          "text-accent": "#0f9486",
          text: "#2e4750",
          "text-dark": "#f0faf8",
          borderColor: "#019e75",

          "background-light": "#F5F5F5",
          "midBackground-light": "#FEFEFE",
          "text-light": "#333333",
          "title-accent-light": "#b48a09",
          "text-accent-light": "#ff9f1c",
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
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
