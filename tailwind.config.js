/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      colors: {
        background: "#020617",
        foreground: "#e2e8f0",
        primary: "#3b82f6",
        secondary: "#64748b",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}