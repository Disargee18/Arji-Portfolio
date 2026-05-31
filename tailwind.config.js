/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        bauhaus: {
          yellow: '#FFD600',
          red: '#FF3B30',
          blue: '#1E4DFF',
        }
      }
    },
  },
  plugins: [],
}
