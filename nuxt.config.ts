// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxt/eslint'],
  css: [
    '@/assets/css/reset.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
  ],
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
