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
      title: "mayu2664.jp - KAWASHIMA Mayu",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "川島雅結（KAWASHIMA Mayu）の研究者・技術者プロフィール。情報学、情報法、サイバーセキュリティ法制を研究しています。",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
