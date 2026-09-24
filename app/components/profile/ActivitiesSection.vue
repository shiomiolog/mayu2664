<template>
  <section id="activities" aria-labelledby="activities-heading" class="border-b border-[#dbe7f0]">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="activities-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Activities
      </h2>

      <div class="mt-10 space-y-10">
        <section v-for="group in activities" :key="group.title" class="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <h3 class="text-sm font-medium text-[#397db8]">{{ group.title }}</h3>
          <div>
            <p class="leading-7 text-slate-800">{{ group.name }}</p>
            <p class="mt-2 leading-7 text-slate-500">{{ group.description }}</p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activities = [
  { title: "Publications", name: "学術同人誌への寄稿", description: "学術同人誌に記事を寄稿しました。" },
  { title: "Presentations", name: "技術コミュニティでの発表", description: "技術系イベントやコミュニティにおいて、LTなどの発表を行っています。" },
  { title: "Legal Studies", name: "放送大学での法学学修", description: "情報法・サイバーセキュリティ法制の研究に向けて、法学の基礎を体系的に学んでいます。" },
  { title: "Communities", name: "学会・研究コミュニティへの参加", description: "研究会や学術イベントを通じて知見を深めています。" },
]
</script>
