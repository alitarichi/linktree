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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(320deg, hsl(240deg 100% 20%) 0%, hsl(311deg 100% 25%) 29%, hsl(334deg 100% 40%) 43%, hsl(6deg 98% 61%) 57%, hsl(37deg 100% 50%) 71%, hsl(55deg 100% 50%) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
