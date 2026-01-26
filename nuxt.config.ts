// nuxt.config.ts
export default defineNuxtConfig({
  // future ブロックは削除します
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/ui"],
  app: {
    head: {
      // ▼ ここにサイト名を設定
      title: "mayu2664.jp - KAWASHIMA Mayuのポートフォリオサイト",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // SEO用の説明文も入れておくと親切です
        {
          name: "description",
          content: "KAWASHIMA Mayuのポートフォリオサイトです。",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // Cloudflare設定は一旦コメントアウトのままでOKです
  // nitro: {
  //   preset: 'cloudflare-pages'
  // }
});
