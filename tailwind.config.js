module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero': "url('/images/hero.jpg')"
      }),
      animation: {
        spin: 'spin 20s linear infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
