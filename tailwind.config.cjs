module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        purple: {
          50: "#f5f0ff",
          100: "#ede3ff",
          200: "#d8c6fc",
          300: "#c5a4f5",
          400: "#ad7ce9",
          500: "#9452dc",
          600: "#7939c6",
          700: "#6329a9",
          800: "#52258b",
          900: "#38205c",
          950: "#25163f",
        },
      },
    },
  },
  plugins: [],
};
