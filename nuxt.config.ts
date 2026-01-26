// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // CSS設定
  css: ["~/assets/css/main.css"],

  // モジュール設定
  modules: ["@nuxt/content", "@nuxt/ui"],

  // ▼ これを入れると、Markdownファイルを自動でページとして扱ってくれます
  content: {
    documentDriven: true,
  },

  app: {
    head: {
      title: "mayu2664.jp - KAWASHIMA Mayu",
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

  // ▼ ここが「データベース警告」を消して表示させるための重要設定！
  nitro: {
    preset: "cloudflare-pages-static", // 静的サイトとしてビルドするよう明示
    prerender: {
      crawlLinks: true, // リンクをたどって全ページを生成
      routes: ["/"], // トップページを確実に生成
      ignore: ["/200"],
    },
  },
});
