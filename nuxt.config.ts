// nuxt.config.ts
export default defineNuxtConfig({
  // future ブロックは削除します
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/ui'],

  // Cloudflare設定は一旦コメントアウトのままでOKです
  // nitro: {
  //   preset: 'cloudflare-pages'
  // }
})