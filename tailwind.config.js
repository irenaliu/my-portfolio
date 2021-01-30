module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#333B50',
        secondary: '#08D30E',
        gray: {
          lightest: '#BEC7D5',
          DEFAULT: '#667182',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
