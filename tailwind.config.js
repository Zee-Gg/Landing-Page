/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', // White
        surface: '#ffffff', // White
        surfaceHighlight: '#f8fafc', // Slate 50
        border: '#e2e8f0', // Slate 200
        primary: '#0ea5e9', // Sky 500
        primaryHover: '#0284c7', // Sky 600
        secondary: '#6366f1', // Indigo 500
        textMain: '#020617', // Slate 950 (Darker)
        textMuted: '#475569', // Slate 600 (Darker)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
