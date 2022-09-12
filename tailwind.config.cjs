/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "Lato", "sans-serif"],
    },
    extend: {
      fontFamily: {
        gothic: ["'DwarvenAxe'"],
      },
      colors: {
        radiant: "#f5ebc6",
        blight: "#bdc241",
        bleed: "#c41c1c",
        stun: "#c99c45",
        debuff: "#c3630f",
        move: "#4c8ba2",
      },
      backgroundImage: {
        index: "url('/index.webp')",
        backdrop: "url('/background.webp')",
        navbg: "url('/navbg.webp')",
      },
    },
  },
  plugins: [],
};
