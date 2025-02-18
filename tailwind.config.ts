import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/layout.tsx",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0.5",
            transform: "translateY(-40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        meteor: {
          "0%": {
            top: "-10vh",
            transform: "translateX(70px)",
            opacity: "1",
          },
          "100%": {
            top: "20vh",
            transform: "translateX(-20vh)",
            opacity: "1",
          },
        },
        floating: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 3px, 0)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 1s",
        meteor: "meteor 5s linear infinite",
        floating: "floating 1s linear infinite alternate",
      },
      fontFamily: {
        nanumMyungjo: ["var(--font-nanumMyungjo)", "sans-serif"],
        nanumPen: ["var(--font-nanumPen)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        star: "#ffff0090",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        star: "0px 0px 8px 2px #c77eff",
      },

      spacing: {
        4: "4px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    plugin(({ addComponents }) => {
      addComponents({
        ".star": {
          width: "4px",
          height: "4px",
          borderRadius: "9999px",
          backgroundColor: "#ffff0090",
          position: "absolute",
          boxShadow: "0px 0px 8px 2px #c77eff",
        },
      });
    }),
  ],
} satisfies Config;
