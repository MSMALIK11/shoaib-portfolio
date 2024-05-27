/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#18181b",
        background: "#27272a",
        linkColor: "#fD7551",
        muted: "#A1A1AA",
        badge: "#2D3748"
      },
      fontSize: {
        md: '16px'
      }


    },
  },
  plugins: [],
}
