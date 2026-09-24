<template>
  <section id="memberships" aria-labelledby="memberships-heading" class="border-b border-[#dbe7f0]">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="memberships-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Memberships
      </h2>

      <ul class="mt-9 divide-y divide-[#dbe7f0] border-y border-[#dbe7f0]">
        <li v-for="membership in memberships" :key="membership.name" class="grid gap-1 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
          <span class="text-slate-800">{{ membership.name }}</span>
          <span class="text-sm leading-6 text-slate-500">{{ membership.english }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const memberships = [
  { name: "情報処理学会", english: "Information Processing Society of Japan (IPSJ)" },
  { name: "電子情報通信学会", english: "Institute of Electronics, Information and Communication Engineers (IEICE)" },
  { name: "人工知能学会", english: "Japanese Society for Artificial Intelligence (JSAI)" },
  { name: "一般社団法人 MyData Japan", english: "MyData Japan" },
]
</script>
