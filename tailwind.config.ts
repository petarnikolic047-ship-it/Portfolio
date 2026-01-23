import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      serif: ["var(--font-serif)"],
    },
    fontSize: {
      xs: ["var(--text-xs)", { lineHeight: "1.4" }],
      sm: ["var(--text-sm)", { lineHeight: "1.5" }],
      base: ["var(--text-base)", { lineHeight: "1.65" }],
      lg: ["var(--text-lg)", { lineHeight: "1.6" }],
      xl: ["var(--text-xl)", { lineHeight: "1.5" }],
      "2xl": ["var(--text-2xl)", { lineHeight: "1.35" }],
      "3xl": ["var(--text-3xl)", { lineHeight: "1.2" }],
      "4xl": ["var(--text-4xl)", { lineHeight: "1.1" }],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
} satisfies Config;
