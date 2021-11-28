module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',//false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50vh',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
