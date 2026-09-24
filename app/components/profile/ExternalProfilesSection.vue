<template>
  <section id="links" aria-labelledby="links-heading" class="border-b border-[#dbe7f0]">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 id="links-heading" class="text-2xl font-normal text-[#172033]">
        <span class="text-[#397db8]">##</span> Links
      </h2>

      <ul class="mt-9 grid border-t border-[#dbe7f0] sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
        <li
          v-for="(link, index) in links"
          :key="link.name"
          class="border-b border-[#dbe7f0]"
          :class="index === 0 ? 'sm:col-span-2 lg:col-span-3' : ''"
        >
          <a :href="link.url" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-6 py-5">
            <span>
              <span class="block text-slate-800 transition-colors group-hover:text-[#397db8]">{{ link.name }}</span>
              <span class="mt-1 block text-sm text-slate-500">{{ link.description }}</span>
            </span>
            <span class="text-[#397db8]" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  { name: "Portfolio", description: "制作物・技術活動", url: "https://portfolio.shiomiolog.com/" },
  { name: "researchmap", description: "研究者プロフィール・研究業績", url: "https://researchmap.jp/mayu2664" },
  { name: "ORCID", description: "0009-0008-4197-3331", url: "https://orcid.org/0009-0008-4197-3331" },
  { name: "GitHub", description: "@shiomiolog", url: "https://github.com/shiomiolog" },
  { name: "LinkedIn", description: "Professional profile", url: "https://www.linkedin.com/in/mayu2664/" },
  { name: "X / Twitter", description: "@mayu2664", url: "https://x.com/mayu2664" },
  { name: "Facebook", description: "Social profile", url: "https://www.facebook.com/people/%E5%B7%9D%E5%B3%B6%E9%9B%85%E7%B5%90/pfbid0TL8xS4WyFD2oDofAxCR94tRHkpueqoTCVSuA1N94Q27PP2XzFBMWmQUNUfhArixyl/" },
]
</script>
