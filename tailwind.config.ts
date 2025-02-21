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
        avenir: ['AvenirRegular', 'sans-serif'],
        avenirHeavy: ['AvenirHeavy', 'sans-serif'],
        HelveticaBold: ['HelveticaBold', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
