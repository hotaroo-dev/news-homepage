// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          md: '1.5rem',
          lg: '2rem'
        }
      }
    }
  },
  devtools: { enabled: true }
})
