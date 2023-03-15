/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'h1': { fontSize: '32px', fontWeight: 'bold' },
				'h2': { fontSize: '24px', fontWeight: 'bold' },
				'h3': { fontSize: '18px', fontWeight: 'bold' },
				'h4': { fontSize: '16px', fontWeight: 'bold' },
				'h5': { fontSize: '14px', fontWeight: 'bold' },
				'h6': { fontSize: '12px', fontWeight: 'bold' },
			})
		})
	],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'blue_bg': '#184995',
			'blue_box': '#B17AA1',
			'blue_content': '#F5B6A4',
			'text': '#fff',
			"content": '#18191C'
		},
		spacing: {
			'1': '8px',
			'2': '12px',
			'3': '16px',
			'4': '24px',
			'5': '32px',
			'6': '48px',
		}, borderRadius: {
			'4xl': '2rem',
		}, fontFamily: {
			'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
		}
	},

}

