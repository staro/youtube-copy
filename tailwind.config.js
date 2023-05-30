/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		screens: {
			'lg': { max: '992px' },
			'md': { max: '768px' },
			'sm': { max: '480px' }
		},
		extend: {
			container: {
				center: true,
				padding: '24px'
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {
				main: '#0f0f0f',
				secondary: '#606060',
				lightblue: '#065fd4',
				darkred: '#ff0000'
			}
		},
	},
	plugins: [],
}

