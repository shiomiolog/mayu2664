<template>
  <main class="content-root">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<style scoped>
:deep(h1) {
  display: block !important;
  font-size: 1.8rem !important;
  font-weight: bold !important;
  color: #2c2c2c !important;

  margin-top: 1.15rem !important;
  margin-bottom: 0.75em !important;

  border-bottom: 2px solid #3b82f6 !important;
  padding-bottom: 0.4rem !important;
}

:deep(h1)::first-letter {
  color: #3b82f6 !important;
  font-size: 2rem !important;
}
:deep(h2) {
  display: block !important;
  font-size: 1.6rem !important;
  font-weight: bold !important;
  color: #2c2c2c !important;

  margin-top: 1.15rem !important;
  margin-bottom: 1.15rem !important;

  border-bottom: 2px solid #3b82f6 !important;
  padding-bottom: 0.4rem !important;
}

/* 本文の読みやすさ */
:deep(p) {
  color: #333 !important;
  font-size: 1.15rem !important;
  line-height: 1.5 !important;
  margin-bottom: 2rem !important;
}

/* リスト全体の余白とスタイル */
:deep(ul) {
  list-style-type: disc !important; /* 黒丸を強制表示 */
  margin-left: 1.5rem !important; /* 左側にインデント（隙間）を作る */
  margin-bottom: 1rem !important; /* 下方向への隙間 */
}

/* 各リスト項目の調整 */
:deep(li) {
  font-size: 1.15rem !important;
  line-height: 1.35 !important;
  margin-bottom: 0.25rem !important; /* 項目同士の隙間 */
  padding-left: 0.25rem !important; /* 黒丸と文字の間の微調整 */
  color: #374151 !important; /* 本文に近いグレー */
}

/* ネストされた（入れ子）リストがある場合 */
:deep(ul ul) {
  list-style-type: circle !important; /* 2階層目は白丸にする */
  margin-top: 0.25rem !important;
}
</style>
