/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kawaii': {
          pink: '#FFC7C7',
          blue: '#C8E7FF', 
          lavender: '#E4D9FF',
          cream: '#FFF9F0',
          peach: '#FFE5E5',
          mint: '#E5FFF5'
        }
      },
      fontFamily: {
        'kawaii': ['Fredoka One', 'cursive'],
        'cute': ['Quicksand', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-soft': 'pulse 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}