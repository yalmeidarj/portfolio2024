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
        blue: "#1fb6ff",
        background: {
          light: "#f4f4f4",
          dark: "#0e0e0e",
        },
        primary: {
          light: "#5878cc",
          dark: "#3f7fbf",
        },
        secondary: {
          light: "black",
          dark: "#7b8794",
        },

        "text-primary": {
          light: "#2d3748",
          dark: "#fff",
        },
        "text-secondary": {
          light: "#7b8794",
          dark: "#cbd5e1",
        },
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
