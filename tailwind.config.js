module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '-2xl': { raw: '(max-width: 1535px)' },
        '-xl': { raw: '(max-width: 1279px)' },
        '-lg': { raw: '(max-width: 1023px)' },
        '-md': { raw: '(max-width: 767px)' },
        '-sm': { raw: '(max-width: 639px)' }
      }
    }
  },
  variants: {},
  plugins: []
};
