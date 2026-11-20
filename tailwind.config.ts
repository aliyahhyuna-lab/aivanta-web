import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#06141A",
        ink: "#0D232B",
        gold: "#FFC83D",
        teal: "#197184",
        mute: "#A9BBC1",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 200, 61, 0.35), 0 10px 40px -10px rgba(255, 200, 61, 0.55)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
