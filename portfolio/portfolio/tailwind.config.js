/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',   // very light background
        surface: '#f1f5f9',      // card background
        primary: '#2563eb',      // Tailwind blue-600
        primaryHover: '#1d4ed8', // Tailwind blue-700
        accent: '#0ea5e9',       // Tailwind sky-500 (optional accent)
        text: '#1e293b',         // slate-800
        mutedText: '#64748b',    // slate-500
        border: '#e2e8f0',       // slate-200
      },
      fontSize: {
        md: '16px'
      }


    },
  },
  plugins: [],
}
