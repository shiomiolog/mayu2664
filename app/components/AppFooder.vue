<template>
  <footer class="border-t border-[#dbe7f0]">
    <div class="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {{ currentYear }} Mayu Kawashima</p>
      <a href="#top" class="transition-colors hover:text-[#397db8]">Back to top ↑</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
