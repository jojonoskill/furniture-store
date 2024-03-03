/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
			'light-orange': '#FF7F3F',
			white: '#ffffff',
			black: '#000000'
		},
    extend: {
		},
  },
  plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
	}
	]
}