export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        amiri: ['Amiri', 'serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        quantum: 'quantum-flow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'quantum-flow': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
