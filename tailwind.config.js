module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        hero: "url('/images/hero.jpg')"
      }),
      animation: {
        spin: 'spin 20s linear infinite',
        beat: 'beat 1s ease-out infinite',
        eclipse: 'eclipse 4s ease-in-out infinite'
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' }
        },
        eclipse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 24px #EC4899)' },
          '50%': { filter: 'drop-shadow(0 0 16px #8B5CF6)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
