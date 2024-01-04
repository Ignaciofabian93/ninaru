import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#CAC37A",
              foreground: "#FFFFFF",
            },
          },
        },
        light: {},
      },
    }),
  ],
};
export default config;
