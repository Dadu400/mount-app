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
        AvenirRegular: ['AvenirRegular', 'sans-serif'],
        AvenirHeavy: ['AvenirBold', 'sans-serif'],
        AvenirMediumCn: ['AvenirMediumCn', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
