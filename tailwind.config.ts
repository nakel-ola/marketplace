import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
        dark: "#1C1C1C",
        primary: {
          DEFAULT: "#0D6EFD",
          100: "#AFD0FF",
          200: "#E3F0FF",
        },
        green: {
          DEFAULT: "#00B517",
          200: "#C3FFCB",
        },
        orange: {
          DEFAULT: "#FF9017",
          200: "#FFE5BF",
        },
        red: {
          DEFAULT: "#FA3434",
        },
        gray: {
          100: "#F7FAFC",
          200: "#EFF2F4",
          300: "#DEE2E7",
          400: "#BDC4CD",
          500: "#8B96A5",
          600: "#505050",
          800: "#606060",
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
        warehouse: "url('/images/bg-warehouse.jpg')",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
