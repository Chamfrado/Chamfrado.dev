import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          bg: "#0a0f1f",
          cyan: "#08f7fe",
          pink: "#fe53bb",
          yellow: "#f5d300",
          green: "#00ff85",
        },
      },
      boxShadow: {
        neon: "0 0 30px rgba(8,247,254,.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
