/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "puck.config.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};