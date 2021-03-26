module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        sCyan: '#2acfcf',
        sDarkViolet: '#3b3054',
        sRed: '#f46262',
        sGrey: '#bfbfbf',
        sGreyViolet: '#9e9aa7',
        sVeryDarkBlue: '#35323e',
        sVeryDarkViolet: '#232127',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
