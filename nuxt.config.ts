// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // CSS設定
  css: ["~/assets/css/main.css"],

  // モジュール設定
  modules: ["@nuxt/ui"],
  app: {
    head: {
      htmlAttrs: { lang: "ja" },
      title: "mayu2664.jp - KAWASHIMA Mayu",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "川島雅結（KAWASHIMA Mayu）の研究者・技術者プロフィール。情報学、情報法、サイバーセキュリティ法制を研究しています。",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      ],
    },
  },
});
