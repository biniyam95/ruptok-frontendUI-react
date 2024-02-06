/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors:{
        'SlateGray':'#f1f4f9',
        'forestGreen':'#064333',
        'searchColor':'#dee5ed',
        'lightForestGreen':'#215c4a'

      }
    },
  },
  plugins: [],
}

