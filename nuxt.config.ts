// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@nuxt/ui'
  ],
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'Ecommerce Store',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to our ecommerce store' }
      ]
    }
  }
});
