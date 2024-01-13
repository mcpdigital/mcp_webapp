import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./tw_gradients/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    theme: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "dark",
      "forest",
      "aqua",
      "dracula",
      "night",
      "dim",
      "sunset",
      "corporate",
    ],
  },
};
export default config;
