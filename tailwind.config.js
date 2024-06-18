const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF7622',
				secondary: '#FFC107',
				accent: '#FF5722',
				success: '#4CAF50',
				info: '#03A9F4',
				warning: '#FFC107',
				danger: '#F44336',
				light: '#F5F5F5',
				dark: '#263238',
				white: '#FFFFFF',
				black: '#000000',
				grey: '#9E9E9E'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			addUtilities({
				'.custom-flex-col': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				},

				'.custom-flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				'.custom-flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'flex-start'
				},
				'.custom-flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'flex-end'
				},
				'.custom-flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				},
				'.custom-flex-around': {
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center'
				}
			})
		})
	]
}
