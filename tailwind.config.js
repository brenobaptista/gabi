module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        hero: "url('/images/hero.jpg')"
      }),
      animation: {
        spin: 'spin 20s linear infinite',
        beat: 'beat 1s ease-out infinite'
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' }
        }
      }
    }
  },
  plugins: []
}
