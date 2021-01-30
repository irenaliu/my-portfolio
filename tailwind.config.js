module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#333B50',
        secondary: '#08D30E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
