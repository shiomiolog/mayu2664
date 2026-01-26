<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = "light";

useHead({
  // タイトル設定
  // メタデータ
  meta: [
    {
      name: "description",
      content: "Mayu.Kの技術者・研究者としてのポートフォリオサイトです。",
    },
  ],
  link: [
    {
      rel: "icon",
      href: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23111827' rx='12'/%3E%3Ctext x='50%25' y='58%25' font-family='sans-serif' font-weight='bold' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3EM%3C/text%3E%3C/svg%3E`,
    },
  ],
});
</script>

<style>
html {
  scroll-padding-top: 80px; /* ヘッダーの高さ(64px) + 余白 */
  scroll-behavior: smooth; /* スルスルっとスクロールさせる */
}
</style>
