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
    extend: {
      colors: {
        blue: {
          1: '#1512BC'
        },
        blue2: {
          4: '#4442C3'
        },
        blue3: {
          3: 'rgba(68, 66, 195, 0.5)'
        },
        blue4: {
          4: '#222161'
        },
        darkblue: {
          1: '#D8D1FF'
        },
        darkerblue: {
          1: '#8B78FF'
        },
        bluer: {
          1: '#5335FF'
        },

        purple: {
          1: 'rgba(21, 18, 188, 0.2)'

        },
        darkerpurple: {
          1: '#BBAFFF'
        },

        grey: {
          1: '#A3A3A3'

        },
        grey2: {
          2: '#D6D6D6'
        },
        darkergrey: {
          1: '#567453'
        },
        grey3: {
          3: 'rgba(214, 214, 214, 0.5)'
        },

        darkerblack: {
          1: '#323232'
        },
        black2: {
          2: '#121212'
        },
        black1: {
          1: '#181818'
        },


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
