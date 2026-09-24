<template>
  <section id="research" aria-labelledby="research-heading" class="border-b border-[#dbe7f0]">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="research-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Research Interests
      </h2>

      <ul class="mt-9 grid gap-x-10 gap-y-3 text-slate-700 sm:grid-cols-2">
        <li v-for="interest in interests" :key="interest" class="flex gap-3 leading-7">
          <span class="text-[#397db8]" aria-hidden="true">—</span>
          <span>{{ interest }}</span>
        </li>
      </ul>

      <div class="mt-10 max-w-4xl space-y-5 leading-8 text-slate-600">
        <p>
          情報法、セキュリティ法制、プライバシー・データ保護法制などを横断し、情報通信基盤の安全性と信頼性を確保するとともに、一人ひとりが公平にその恩恵を受けられるための技術的・法制度的条件に関心を持っています。
        </p>
        <p>
          また、理工学分野において、多様な人々が能力を発揮しやすい環境の整備に貢献することを目指しています。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const interests = [
  "情報通信政策",
  "AIガバナンス",
  "AIセキュリティ",
  "システム監査",
  "プライバシー・データ保護法制",
  "セキュリティ法制",
  "情報法",
  "サイバーセキュリティ",
  "情報セキュリティ",
]
</script>
