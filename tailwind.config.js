/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "system-ui", "sans-serif"],
      },
    },
  },
};
