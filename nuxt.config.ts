// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // スタイルシート
  css: ["~/assets/css/main.css"],

  // モジュール
  modules: ["@nuxt/content", "@nuxt/ui"],

  // ヘッダー・メタデータ設定
  app: {
    head: {
      title: "mayu2664.jp - KAWASHIMA Mayuのポートフォリオサイト",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "KAWASHIMA Mayuのポートフォリオサイトです。",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // ▼▼▼ ここが今回追加する一番重要な設定です！ ▼▼▼
  nitro: {
    preset: "cloudflare-pages", // Cloudflare用の設定
    prerender: {
      crawlLinks: true, // リンクを辿ってページを作る
      routes: ["/"], // 「トップページ(/)を絶対に作れ！」という命令
      ignore: ["/200"], // エラー回避用
    },
  },
});
