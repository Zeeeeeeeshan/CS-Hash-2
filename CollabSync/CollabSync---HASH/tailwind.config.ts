
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        // Custom CollabSync colors
        neon: {
          blue: "#0ef",
          purple: "#b380ff",
          pink: "#ff61b0",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(14, 255, 255, 0.5), 0 0 15px rgba(14, 255, 255, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(14, 255, 255, 0.8), 0 0 30px rgba(14, 255, 255, 0.5)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-right": "fade-in-right 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 3s infinite",
        "float": "float 6s ease infinite",
        "breathe": "breathe 8s ease infinite",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
      boxShadow: {
        "neon-sm": "0 0 5px rgba(14, 255, 255, 0.5), 0 0 10px rgba(14, 255, 255, 0.3)",
        "neon-md": "0 0 10px rgba(14, 255, 255, 0.5), 0 0 20px rgba(14, 255, 255, 0.3)",
        "neon-lg": "0 0 15px rgba(14, 255, 255, 0.5), 0 0 30px rgba(14, 255, 255, 0.3)",
        "neon-purple": "0 0 15px rgba(179, 128, 255, 0.5), 0 0 30px rgba(179, 128, 255, 0.3)",
        "neon-pink": "0 0 15px rgba(255, 97, 176, 0.5), 0 0 30px rgba(255, 97, 176, 0.3)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      backdropBlur: {
        "glass": "blur(16px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
