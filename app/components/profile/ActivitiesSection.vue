<template>
  <section id="activities" aria-labelledby="activities-heading" class="border-b border-[#dbe7f0]">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="activities-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Activities
      </h2>

      <div class="mt-10">
        <section
          v-for="group in visibleOutputGroups"
          :key="group.title"
          class="activity-group grid gap-5 sm:grid-cols-[12rem_1fr] sm:gap-10"
        >
          <header>
            <h3 class="font-medium text-[#397db8]">{{ group.title }}</h3>
            <p class="mt-1 text-sm text-slate-500">{{ group.label }}</p>
          </header>

          <ul class="divide-y divide-[#dbe7f0] border-y border-[#dbe7f0]">
            <li v-for="item in group.items" :key="item.name" class="py-7">
              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="leading-7 text-slate-800 transition-colors hover:text-[#397db8] hover:underline"
              >
                {{ item.name }} ↗
              </a>
              <p v-else class="leading-7 text-slate-800">{{ item.name }}</p>
              <p class="mt-2 leading-7 text-slate-500">{{ item.description }}</p>
            </li>
          </ul>
        </section>

        <section class="activity-group grid gap-5 sm:grid-cols-[12rem_1fr] sm:gap-10">
          <header>
            <h3 class="font-medium text-[#397db8]">Academic Activities</h3>
            <p class="mt-1 text-sm text-slate-500">研究活動</p>
          </header>

          <ul class="divide-y divide-[#dbe7f0] border-y border-[#dbe7f0]">
            <li v-for="item in academicActivities" :key="item.name" class="py-7">
              <p class="leading-7 text-slate-800">{{ item.name }}</p>
              <p class="mt-2 leading-7 text-slate-500">{{ item.description }}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ActivityItem {
  name: string
  description: string
  url?: string
}

interface ActivityGroup {
  title: string
  label: string
  items: ActivityItem[]
}

const outputGroups: ActivityGroup[] = [
  {
    title: "Papers",
    label: "論文",
    items: [],
  },
  {
    title: "Presentations",
    label: "講演・口頭発表",
    items: [
      {
        name: "技術コミュニティでの発表",
        description: "技術系イベントやコミュニティにおいて、LTなどの発表を行っています。",
      },
    ],
  },
  {
    title: "Books",
    label: "書籍等出版物",
    items: [
      {
        name: "セキスペ大石泉と学ぶ組織の情報セキュリティ論",
        description: "『学術アイドルマスター 合同 Vol.3』所収、pp.55–68、学術アイドルマスター合同準備会、2026年8月16日。分担執筆（査読なし）。",
        url: "https://researchmap.jp/mayu2664/books_etc/54568449",
      },
    ],
  },
]

const visibleOutputGroups = outputGroups.filter((group) => group.items.length > 0)

const academicActivities: ActivityItem[] = [
  {
    name: "放送大学での法学学修",
    description: "情報法・セキュリティ法制の研究に向けて、法学の基礎を体系的に学んでいます。",
  },
  {
    name: "学会・研究コミュニティへの参加",
    description: "研究会や学術イベントを通じて知見を深めています。",
  },
]
</script>

<style scoped>
.activity-group + .activity-group {
  margin-top: 2rem;
}
</style>
