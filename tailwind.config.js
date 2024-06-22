/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      'oi-blue': '#26497F'
        // dark: '1C3A69',
      
    },
    extend: {},
  },
}


module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
