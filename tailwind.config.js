module.exports = {
  mode: 'jit',
  darkMode: 'class',
  variants: {},
  plugins: [require('flowbite/plugin')],
  purge: {
    content: ['./public/**/*.html', 'src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js']
  },
  theme: {
    color: { primary: '#ff6644' },
    extend: {
      animation: {
        fib: 'fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      },
      boxShadow: {
        debug: '0 0 0 1px red',
        white: '0 0 0 1px white'
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  }
}
