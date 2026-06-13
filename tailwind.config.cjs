/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1120px" },
    },
    extend: {
      fontFamily: {
        sans: [
          "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "SF Pro Display",
          "Helvetica Neue", "Inter", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif",
        ],
        mono: ["SF Mono", "JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        hairline: "hsl(var(--hairline))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          glow: "hsl(var(--brand-glow))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      maxWidth: {
        content: "1080px",
        prose: "720px",
      },
      boxShadow: {
        soft: "0 1px 2px hsl(220 9% 10% / 0.04), 0 8px 24px -12px hsl(220 9% 10% / 0.10)",
        float: "0 30px 60px -24px hsl(220 9% 10% / 0.22)",
        glow: "0 0 0 1px hsl(var(--brand) / 0.4), 0 0 40px -8px hsl(var(--brand) / 0.4)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      keyframes: {
        "accordion-down": { from: { height: 0 }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: 0 } },
        aurora: {
          "0%": { transform: "translate3d(-6%, -4%, 0) scale(1)" },
          "50%": { transform: "translate3d(6%, 4%, 0) scale(1.15)" },
          "100%": { transform: "translate3d(-6%, -4%, 0) scale(1)" },
        },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "auroraDrift 22s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
}
