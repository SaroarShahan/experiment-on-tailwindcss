/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    spacing: {
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      11: "11rem",
      12: "12rem",
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase }) {
      addBase({
        html: {
          fontSize: "62.5%",
        },
        body: {
          fontSize: "1.6rem",
        },
      });
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
