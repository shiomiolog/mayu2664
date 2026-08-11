<template>
    <section class="relative overflow-hidden">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div
            class="relative mx-auto grid max-w-5xl items-start gap-12 px-6 pt-16 pb-24 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-20 lg:px-8">
            <!-- 左：アイコン・名前・肩書 -->
            <div class="flex flex-col items-center text-center">
                <img src="/images/profile.png" alt="川島雅結のアイコン"
                    class="size-32 rounded-full border-4 border-[#fffdf7] object-cover shadow-sm ring-2 ring-[#9fc8e8] sm:size-40">

                <h1 class="mt-7 bg-[#fffdf7]/90 px-3 text-3xl font-semibold tracking-wider text-slate-800 sm:text-4xl">
                    川島 雅結
                </h1>

                <p class="mt-1 bg-[#fffdf7]/90 px-3 text-sm tracking-wide text-slate-500 sm:text-base">
                    KAWASHIMA Mayu
                </p>

                <div class="relative mt-6 -rotate-1 bg-[#fff3a8] px-5 pb-3 pt-5 text-center shadow-sm">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-sm font-medium tracking-wide text-slate-600 sm:text-base">
                        情報学・法学を学ぶ学生
                    </p>

                    <p class="mt-1 text-xs tracking-wide text-slate-500 sm:text-sm">
                        学士（IT総合学）
                    </p>
                </div>
            </div>

            <!-- 右：研究方針・自己紹介 -->
            <div
                class="relative space-y-10 border-t-2 border-[#e7a3a3] pt-10 md:border-l-2 md:border-t-0 md:py-4 md:pl-12">
                <section>
                    <h2 class="relative inline-block px-1 text-sm font-semibold tracking-[0.18em] text-[#397db8]">
                        <span class="absolute inset-x-0 bottom-0 h-2 bg-[#ffe58a]/70" aria-hidden="true" />
                        <span class="relative">研究方針</span>
                    </h2>

                    <p class="mt-4 bg-[#fffdf7]/90 px-1 text-base leading-9 text-slate-700 sm:text-lg">
                        情報セキュリティを技術と法制度の両面から捉え、
                        安全で信頼できる情報通信基盤について研究しています。
                    </p>
                </section>

                <section>
                    <h2 class="relative inline-block px-1 text-sm font-semibold tracking-[0.18em] text-[#397db8]">
                        <span class="absolute inset-x-0 bottom-0 h-2 bg-[#ffe58a]/70" aria-hidden="true" />
                        <span class="relative">自己紹介</span>
                    </h2>

                    <p class="mt-4 bg-[#fffdf7]/90 px-1 leading-9 text-slate-700">
                        情報学を基礎として、現在は放送大学で法学を学んでいます。
                        サイバーセキュリティに関わる技術と法制度の関係に関心があります。
                    </p>
                </section>
            </div>
        </div>
    </section>
</template>