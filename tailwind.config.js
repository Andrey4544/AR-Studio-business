/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["Playfair Display", "Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
}
