// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1.0',
            title: '// 𝐩𝐡𝐧𝐭𝐦𝐳_',
            meta: [
                { name: 'author', content: 'nguyen hieu minh' },
                { name: 'keywords', content: 'phntmz, nguyen hieu minh' }
            ],
        }
    },
    css: ['~/app.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: false,
    typescript: {
        shim: false,
    },
})
