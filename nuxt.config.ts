// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/device",
		"@nuxt/image",
		"@hypernym/nuxt-gsap",
	],
	tailwindcss: {
		cssPath: "~/assets/css/main.css",
	},
});
