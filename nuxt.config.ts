// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/oi-site/'
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],
    target: 'static',
    ssr: false
});