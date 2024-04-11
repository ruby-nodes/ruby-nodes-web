import type { Config } from "tailwindcss";
import { fluidExtractor, fluidCorePlugins, FluidConfig } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/stories/**/*.{js,ts,jsx,tsx}",
    ],
    extract: fluidExtractor(),
  },
  safelist: ["leading-6"],
  theme: {
    fontSize: {
      "2xl": "4.063rem",
      "2xl-clamped": "2.188rem",
      xl: "2.5rem",
      "xl-clamped": "1.875rem",
      lg: "1.563rem",
      md: "1.25rem",
      sm: "0.938rem",
      xs: "0.75rem",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    colors: {
      "c-primary": "#B32C3C",
      "c-primary-hover": "#C94747",
      "c-bg": "#060815",
      "c-text": "#FFFFFF",
      "c-text-inactive": "#A3A6BE",
      "c-container": "#10121F",
      "c-container-accent": "#1C1E2C",
      "c-container-accent-hover": "#323441",
      "c-menu-border": "#353B52",
      "c-accordion-border": "#8D1927",
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        xxl: "4rem",
      },
      screens: {
        xl: "81.25rem",
      },
    },
    borderRadius: {
      md: "1.25rem",
      lg: "2rem",
    },
    fluid: {
      defaultScreens: ["20rem", "81.25rem"],
    } satisfies FluidConfig,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), fluidCorePlugins],
};
export default config;
