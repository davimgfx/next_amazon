import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        xxl: "1350px"
      },
      colors: {
        amazon_blue: "#131921",
        amazon_blue_light: "#232F3E",
        amazon_blue_more_light: "#485769",
        amazon_yellow: "#febd69",
        amazon_yellow_light: "#FFD814",
        amazon_red: "#CC0C39",
        lightText: "#ccc"
      },
      fontFamily:{
        bodyFamily: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
