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

  border-bottom: 2px solid #69c1f5 !important;
  padding-bottom: 0.4rem !important;
}

:deep(h1)::first-letter {
  color: #0a9aee !important;
  font-size: 2rem !important;
}

:deep(h2) {
  display: block !important;
  font-size: 1.6rem !important;
  font-weight: bold !important;
  color: #2c2c2c !important;

  margin-top: 1.15rem !important;
  margin-bottom: 1.15rem !important;

  border-bottom: 2px solid #69c1f5 !important;
  padding-bottom: 0.4rem !important;
}

:deep(h3) {
  position: relative !important;
  border-bottom: 5px solid #ddd !important;
  margin-top: 1rem !important;
  margin-bottom: 1.15rem !important;
  padding-bottom: 0.3rem !important;
  font-size: 1.4rem !important;
}

:deep(h3:before) {
  position: absolute !important;
  left: 0 !important;
  bottom: -5px !important;
  width: 20% !important;
  height: 5px !important;
  content: "" !important;
  background: #69c1f5 !important;
}

:deep(p) {
  color: #333 !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  margin-bottom: 1rem !important;
}

:deep(ul) {
  list-style-type: disc !important;
  margin-left: 1.5rem !important;
  margin-bottom: 0.5rem !important;
}

:deep(li) {
  font-size: 1.05rem !important;
  line-height: 1.45 !important;
  margin-bottom: 0.25rem !important;
  padding-left: 0.25rem !important;
  color: #374151 !important;
}

:deep(ul ul) {
  list-style-type: circle !important;
  margin-top: 0.25rem !important;
}
</style>
