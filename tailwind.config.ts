import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "387px",
      md: "768px",
      lg: "976px",
      xl: "1401px",
    },
    colors: {
      primary: "#0970cd",
      secondary: "#0198e9",
      tertiary: "#333333",
      gd: {
        // Define the gradient colors here
        start: "#FF7A00",
        end: "#FFB800",
      },
      red: "#FF5555",
      stoke: "#e9e9e9",
      bg: "#fafafa",
    },
  },
  plugins: [],
};
export default config;