/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .1s ease-in-out',
				scaleIn: 'scaleIn .1s ease-in-out',
			},
		}
	},
	plugins: []
}
