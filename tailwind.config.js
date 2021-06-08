module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        'background': '#090909'
      },
      spacing: {
        '110': '110%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
