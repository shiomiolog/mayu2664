<template>
  <section id="top" class="flex min-h-[100svh] items-center border-b border-[#dbe7f0]">
    <div class="mx-auto w-full max-w-5xl px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div class="flex items-center gap-6 sm:gap-8">
        <div class="size-28 shrink-0 overflow-hidden rounded-full sm:size-32 lg:size-36">
          <img
            src="/images/profile-avatar-288.png"
            srcset="/images/profile-avatar-288.png 2x, /images/profile-avatar-432.png 3x"
            alt="川島雅結のプロフィール画像"
            width="144"
            height="144"
            fetchpriority="high"
            decoding="async"
            class="size-full object-cover object-top [image-rendering:auto]"
          >
        </div>

        <div>
          <h1 class="text-4xl font-normal tracking-tight text-[#172033] sm:text-5xl">
            川島 雅結
          </h1>
          <p class="mt-2 text-xl text-slate-500">KAWASHIMA Mayu</p>
          <p class="mt-1 text-base text-slate-400">@mayu2664</p>
        </div>
      </div>

      <div class="mt-10 space-y-1 text-base leading-7 text-slate-800">
        <p>情報セキュリティ / 情報法</p>
        <p class="text-slate-500">Information Security / Information Law</p>
      </div>

      <p class="mt-8 max-w-4xl leading-8 text-slate-600">
        情報セキュリティを技術と法制度の両面から捉え、安全で信頼できる情報通信基盤について研究しています。
      </p>

      <nav class="mt-8" aria-label="主要な外部プロフィール">
        <ul class="space-y-1 text-[#397db8]">
          <li><a href="https://researchmap.jp/mayu2664" target="_blank" rel="noopener noreferrer" class="hover:underline">researchmap ↗</a></li>
          <li><a href="https://orcid.org/0009-0008-4197-3331" target="_blank" rel="noopener noreferrer" class="hover:underline">ORCID ↗</a></li>
          <li><a href="https://github.com/shiomiolog" target="_blank" rel="noopener noreferrer" class="hover:underline">GitHub ↗</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>
