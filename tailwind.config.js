module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero': "url('/images/hero.jpg')"
      })
    }
  },
  variants: {
    extend: {
      opacity: ['dark']
    }
  },
  plugins: []
}
