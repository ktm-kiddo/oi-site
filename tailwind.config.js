  /** @type {import('tailwindcss').Config} */
  const defaultTheme = require('tailwindcss/defaultTheme')

  module.exports =  {
    content: ['./pages/*.{html,js, vue}',
      './components/*.{html,js, vue}',
      './components/HomeComponents/*.{html,js, vue}',
      './pages/*.{html, js, vue}'
    ],
    theme: {
      extend: {
        colors: {
          'oi-blue': {
        DEFAULT: '#174A83',
        dark: '#0F3B6D',
          },
        },
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
  
      },
    },
    
    plugins: [
      '@tailwindcss/forms'
    ],
  }

 