/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
          colors: {
            pastel: {
              bg: '#FDFBF7',       // Very light warm background
              blue: '#D0E8F2',     // Soft pastel blue
              pink: '#F7D6E0',     // Soft pastel pink
              green: '#D4E2D4',    // Soft pastel green
              yellow: '#FFF3D4',   // Soft pastel yellow
              text: '#4A4A4A',     // Dark grey for readability
            }
          },
          borderRadius: {
            'apple': '1.5rem', // Large, smooth rounded corners
          },
          boxShadow: {
            'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
          }
        },
      },
      plugins: [],
    }