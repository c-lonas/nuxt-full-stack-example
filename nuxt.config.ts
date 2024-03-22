// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/supabase'
  ],
  supabase: {
    url: 'YOUR_SUPABASE_URL', // Replace with your Supabase Project URL
    key: 'YOUR_SUPABASE_ANON_KEY' // Replace with your Supabase anon key
  },
})
