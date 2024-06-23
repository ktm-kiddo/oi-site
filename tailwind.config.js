  /** @type {import('tailwindcss').Config} */

  module.exports =  {
    content: ['./pages/*.{html,js, vue}',
      './components/*.{html,js, vue}',
      './components/HomeComponents/*.{html,js, vue}'
    ],
    theme: {
      extend: {
        colors: {
          'oi-blue': {
        DEFAULT: '#174A83',
        dark: '#0F3B6D',
      },
        }
      },
    },
    
    plugins: [
      '@tailwindcss/forms'
    ],
  }