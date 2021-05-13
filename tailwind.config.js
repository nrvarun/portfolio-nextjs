module.exports = {
  // mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "8xl": "6rem",
        "10xl": "8rem",
        "11xl": "11rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
