// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // CSS設定
  css: ["~/assets/css/main.css"],

  // モジュール設定
  modules: ["@nuxt/content", "@nuxt/ui"],
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
});
