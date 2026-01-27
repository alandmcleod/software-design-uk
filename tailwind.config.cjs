const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// 1. Extend the font family to include professional, modern fonts
			fontFamily: {
				// Set 'Inter' as the default sans-serif font
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				// Add 'Lora' as a beautiful serif font option for headings or body
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
			},
			// 2. Define a clear, reusable brand color palette
			colors: {
				'primary': {
					DEFAULT: '#2563EB', // A strong, professional blue
					'light': '#60A5FA',
					'dark': '#1D4ED8',
				},
				'brand': {
					'text': '#111827',     // Dark gray for headings and important text
					'body': '#374151',     // Softer gray for body text
					'background': '#F9FAFB', // A very light, clean off-white
					'border': '#E5E7EB',   // For subtle borders and dividers
				}
			},
			// 3. Add specific typography styles for the 'prose' class
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.brand.body'),
						'--tw-prose-headings': theme('colors.brand.text'),
						'--tw-prose-lead': theme('colors.brand.body'),
						'--tw-prose-links': theme('colors.primary.DEFAULT'),
						'--tw-prose-bold': theme('colors.brand.text'),
						'--tw-prose-counters': theme('colors.primary.dark'),
						'--tw-prose-bullets': theme('colors.primary.dark'),
						'--tw-prose-hr': theme('colors.brand.border'),
						'--tw-prose-quotes': theme('colors.brand.text'),
						'--tw-prose-quote-borders': theme('colors.brand.border'),
						'--tw-prose-captions': theme('colors.brand.body'),
						'--tw-prose-code': theme('colors.primary.dark'),
						'--tw-prose-pre-code': theme('colors.white'),
						'--tw-prose-pre-bg': theme('colors.brand.text'),
						'--tw-prose-th-borders': theme('colors.brand.border'),
						'--tw-prose-td-borders': theme('colors.brand.border'),
					},
				},
			}),
		},
	},
	plugins: [
		// 4. Add the official Tailwind CSS Typography plugin
		require('@tailwindcss/typography'),
	],
};