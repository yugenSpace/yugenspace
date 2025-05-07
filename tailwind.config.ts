import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff007a",
        secondary: "#ff007a",
        tertiary: "#ff007a",
        light: "#deebec",
        dark: "#0a192f",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-calsans)"],
        AmsterdamOne: "AmsterdamOne",
        GreatVibes: `'Great Vibes', cursive;`,
      },
      boxShadow: {
        toggle:
          "-2px -1px 2px 0px #ffffff, 2px 1px 12px 0px #d1d9e6, 1px 1px 1px 0px #d1d9e6 inset, -1px -1px 1px 0px #ffffff inset",
        indicator: "-2px -1px 5px 0px #ffffff, 2px 1px 4px 0px #d1d9e6",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        custom: "15.5px", // Extend for custom blur value
      },
      borderRadius: {
        custom: "10px", // Add custom radius
      },
      transitionDuration: {
        400: "400ms",
      },
      // backgroundImage: {
      //   'gradient-radial':
      //     'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      // },
      animation: {
        "text-animate-up":
          "text-animate-up 0.8s cubic-bezier(0, 0.55, 0.45, 1) forwards",
        slideUpFade: "slideUpFade 0.8s ease-out forwards",
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        zoom: "zoom 50s linear infinite",
        "shooting-star": "shooting-star 30s linear infinite",
        wave: "wave 1.5s infinite ease-in-out",
      },
      keyframes: {
        slideUpFade: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "text-animate-up": {
          "0%": { transform: "translate3d(0, 100%, 0)", opacity: "0" },
          "100%": { transform: "translate3d(0, 0, 0)", opacity: "1" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        "shooting-star": {
          "0%": {
            transform: "rotate(315deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(315deg) translateX(-1000px)",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": {
            // transform: "translateY(-1px)",
            scale: "1.1",
            color: "#991b1b",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
