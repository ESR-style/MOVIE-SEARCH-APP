module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#3d3d3d',
          600: '#4d4d4d',
          500: '#5d5d5d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};