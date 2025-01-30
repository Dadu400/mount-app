import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
      },
      fontFamily: {
        sans: ["AvenirRegular", "sans-serif"],
        avenir: ['AvenirRegular', 'sans-serif'],
        avenirHeavy: ['AvenirHeavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
