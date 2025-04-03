const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        // Base Palette (Optional but good for reference)
        'palette-black': '#000000',
        'palette-navy': '#14213D',
        'palette-orange': '#FCA311', // Using the new orange hex
        'palette-gray': '#E5E5E5',
        'palette-white': '#FFFFFF',

        // Theme Roles
        'background-light': '#FFFFFF',
        'surface-light': '#E5E5E5',
        'text-light-primary': '#000000',
        'text-light-secondary': '#14213D',

        'background-dark': '#121212', // Using softer black
        'surface-dark': '#14213D',
        'text-dark-primary': '#FFFFFF',
        'text-dark-secondary': '#FFFFFF', // Opacity applied via class e.g., text-text-dark-secondary/60

        'accent': '#FCA311', // Primary Accent/CTA (New Orange)

        // You might want to keep old ones temporarily during refactoring, or remove them now.
        // For now, let's comment them out.
        // 'primary-light': '#F2F2F2', 
        // 'secondary-light': '#FFFFFF', 
        // 'ternary-light': '#F7F8FC', 
        // 'primary-dark': '#00060D', 
        // 'secondary-dark': '#1B2B40', 
        // 'ternary-dark': '#80A2A6', 
        // 'accent-orange': '#BF5934', 
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
