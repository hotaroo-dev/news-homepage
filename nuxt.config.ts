// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  devtools: { enabled: true },
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
  }
})
