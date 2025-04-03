const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        // Updated Light Mode
				'primary-light': '#F2F2F2', // New 5
				'secondary-light': '#FFFFFF', // Keep white
				'ternary-light': '#F7F8FC', // Keep current light grey-blue

        // Updated Dark Mode
				'primary-dark': '#00060D', // New 1
				'secondary-dark': '#1B2B40', // New 2
				'ternary-dark': '#80A2A6', // New 3

        // Added Accent Color
        'accent-orange': '#BF5934', // New 4
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};
