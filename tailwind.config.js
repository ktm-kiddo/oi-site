/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      'oi-blue': {
        DEFAULT: '#26497F',
        dark: '##1C3A69',
      },
    },
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
