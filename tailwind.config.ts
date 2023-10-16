import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1C1C1C",
        primary: {
          DEFAULT: "#0D6EFD",
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
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
