/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
      colors: {
        primary: '#FF6000',
        secondary: '#454545',
        subprimary: '#FFA559',
        additional: '#FFE6C7'
      },
      transitionTimingFunction: {
        'in-smooth': 'cubic-bezier(0, 0.55, 0.45, 1)'
      }
    },
	},
	plugins: [],
}
