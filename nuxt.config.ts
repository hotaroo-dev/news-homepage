// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    dir: '~/assets/images'
  },
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1.5rem',
            md: '2rem',
            lg: '2.5rem'
          }
        }
      }
    }
  },
  devtools: { enabled: true }
})
