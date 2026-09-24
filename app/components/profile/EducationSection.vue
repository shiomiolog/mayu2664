<template>
  <section
    id="education"
    aria-labelledby="education-heading"
    class="border-b border-[#dbe7f0]"
  >
    <div class="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="education-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Education / Biography
      </h2>

      <ol class="mt-10 border-l border-[#397db8]">
        <li
          v-for="school in education"
          :key="`${school.period}-${school.program}`"
          class="education-item"
        >
          <div class="education-date border-b border-[#9fc8e8] text-slate-500">
            {{ school.period }}
          </div>

          <div class="education-marker rounded-full bg-[#397db8]" aria-hidden="true" />

          <div class="education-details">
            <h3 class="font-medium text-[#172033]">
              {{ school.institution }}
            </h3>
            <p class="text-slate-600">{{ school.program }}</p>
            <p class="text-slate-600">{{ school.status }}</p>
            <p v-if="school.note" class="text-slate-500">
              {{ school.note }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const education = [
  {
    period: "2026/4 - 現在",
    institution: "放送大学",
    program: "大学院文化科学研究科",
    status: "（修士課程）修士選科生",
  },
  {
    period: "2026/4 - 現在",
    institution: "放送大学",
    program: "教養学部 教養学科 社会と産業コース",
    status: "全科履修生",
  },
  {
    period: "2021/4 - 2026/3",
    institution: "サイバー大学",
    program: "IT総合学部 IT総合学科",
    status: "学士（IT総合学）",
    note: "2023/4 休学・2024/4 復学",
  },
  {
    period: "2018/4 - 2021/3",
    institution: "学校法人角川ドワンゴ学園 N高等学校",
    program: "普通科",
    status: "卒業",
  },
]
</script>

<style scoped>
.education-item {
  margin-block: 0.75rem;
}

.education-date,
.education-details {
  padding-left: 1rem;
  line-height: 1.75rem;
}

.education-marker {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: -0.25rem;
  margin-left: -0.25rem;
}
</style>
