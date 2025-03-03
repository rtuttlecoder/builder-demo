export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: '22squared',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/main.scss'],
	styleResources: {
		scss: ['@/assets/scss/_variables.scss'],
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
		'@nuxtjs/google-fonts',
		'@builder.io/sdk-vue/nuxt',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/style-resources'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js',
				autoprefixer: {},
			},
		},
	},

	fontawesome: {
		icons: {
			solid: true,
			brands: true,
		},
	},

	googleFonts: {
		families: {
			'Playfair+Display': true,
			'Work+Sans': true,
		},
		display: 'swap',
	},
};
