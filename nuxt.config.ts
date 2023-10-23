// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@element-plus/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        // '@nuxtjs/supabase'
    ],
    elementPlus: { /** Options */ },
    plugins: ['~/plugins/gsap'],
    runtimeConfig: {
        public: {
          stripePk: process.env.STRIPE_PK_KEY,
          appName: process.env.APP_NAME
        }
    },
    // css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    build: {
      transpile: ["vuetify",],
    },
    app: {
        head: {
          link: [
            {
              rel: "stylesheet",
              href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
            },
          ],
        }
      }
})
