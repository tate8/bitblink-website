/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#163967",
        secondary: "#D0E0EB",
        secondaryDark: "#8DAECB",
        secondaryText: "#333333",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
	},
	plugins: [],
}
