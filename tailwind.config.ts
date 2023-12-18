import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".search-input": {
          border: "none",
          outline: "none",
        },
        ".primary-color": {
          color: "#05264e",
        },
        ".secondary-color": {
          color: "#4f5e64",
        },
        ".additional-color": {
          color: "#66789c",
        },
        ".extra-color": {
          color: "#3c65f5",
        },
        ".primary-btn": {
          "background-color": "#3c65f5",
          "border-radius": "8px",
          color: "rgb(255,255,255)",
          padding: "10px 18px",
          transition: "0.3s",
        },
        ".secondary-btn": {
          "border-radius": "8px",
          color: "gray",
          "text-decoration": "underline",
          padding: "10px 18px",
          transition: "0.3s",
        },
        ".primary-hover-effect": {
          transform: "translateY(-2px)",
        },
        ".primary-bg": {
          "background-color": "#eff2fb",
        },
      });
    }),
  ],
};
export default config;
