/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'almost-green': 'hsl(137, 100%, 67%);',
        'almost-grey': 'hsl(0, 0%, 10%)',
        'middle-gray': 'hsl(0, 0%, 20%)',
        'medium-red': 'hsl(0, 100%, 50%)'
      },
    },
  },
  plugins: [],
}

