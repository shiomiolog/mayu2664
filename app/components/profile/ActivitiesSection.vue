<template>
    <!-- 活動・実績 -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <!-- セクション見出し -->
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    ACTIVITIES &amp; WORKS
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">活動・実績</span>
                </h2>
            </header>

            <div class="mt-14 space-y-14">
                <!-- 執筆・出版 -->
                <section class="grid gap-6 md:grid-cols-[13rem_1fr]">
                    <div>
                        <div class="relative inline-block -rotate-1 bg-[#fbe3e8] px-6 pb-4 pt-6 shadow-sm">
                            <span
                                class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-1 bg-white/60 shadow-sm"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.15em] text-[#b96778]">
                                PUBLICATIONS
                            </p>

                            <h3 class="mt-1 text-lg font-semibold text-slate-800">
                                執筆・出版
                            </h3>
                        </div>
                    </div>

                    <ul class="space-y-8 border-l-2 border-[#e7a3a3] pl-7">
                        <li class="relative">
                            <span
                                class="absolute -left-[2.1rem] top-2 size-3 rounded-full border-2 border-[#e7a3a3] bg-[#fffdf7]"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.14em] text-slate-400">
                                CONTRIBUTION
                            </p>

                            <h4 class="mt-2 text-lg font-semibold text-slate-800">
                                学術同人誌への寄稿
                            </h4>

                            <p class="mt-3 leading-8 text-slate-600">
                                学術同人誌に記事を寄稿しました。
                            </p>

                            <!-- 詳細ページを作成したら使用
            <NuxtLink
              to="/publications"
              class="mt-4 inline-flex text-sm font-medium text-[#397db8] underline decoration-[#9fc8e8] underline-offset-4"
            >
              詳細を見る
            </NuxtLink>
            -->
                        </li>
                    </ul>
                </section>

                <!-- 発表 -->
                <section class="grid gap-6 md:grid-cols-[13rem_1fr]">
                    <div>
                        <div class="relative inline-block rotate-[0.7deg] bg-[#dcefff] px-6 pb-4 pt-6 shadow-sm">
                            <span
                                class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-2 bg-white/60 shadow-sm"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.15em] text-[#397db8]">
                                PRESENTATIONS
                            </p>

                            <h3 class="mt-1 text-lg font-semibold text-slate-800">
                                発表
                            </h3>
                        </div>
                    </div>

                    <ul class="space-y-8 border-l-2 border-[#7db1dd] pl-7">
                        <li class="relative">
                            <span
                                class="absolute -left-[2.1rem] top-2 size-3 rounded-full border-2 border-[#7db1dd] bg-[#fffdf7]"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.14em] text-slate-400">
                                LIGHTNING TALKS
                            </p>

                            <h4 class="mt-2 text-lg font-semibold text-slate-800">
                                技術コミュニティでの発表
                            </h4>

                            <p class="mt-3 leading-8 text-slate-600">
                                技術系イベントやコミュニティにおいて、LTなどの発表を行っています。
                            </p>
                        </li>
                    </ul>
                </section>

                <!-- 研究・学習活動 -->
                <section class="grid gap-6 md:grid-cols-[13rem_1fr]">
                    <div>
                        <div class="relative inline-block -rotate-[0.5deg] bg-[#e4f2dc] px-6 pb-4 pt-6 shadow-sm">
                            <span
                                class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-2 bg-white/60 shadow-sm"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.15em] text-[#56835d]">
                                ACADEMIC ACTIVITIES
                            </p>

                            <h3 class="mt-1 text-lg font-semibold text-slate-800">
                                研究・学習活動
                            </h3>
                        </div>
                    </div>

                    <ul class="space-y-8 border-l-2 border-[#8ebd8e] pl-7">
                        <li class="relative">
                            <span
                                class="absolute -left-[2.1rem] top-2 size-3 rounded-full border-2 border-[#8ebd8e] bg-[#fffdf7]"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.14em] text-slate-400">
                                LEGAL STUDIES
                            </p>

                            <h4 class="mt-2 text-lg font-semibold text-slate-800">
                                放送大学での法学学修
                            </h4>

                            <p class="mt-3 leading-8 text-slate-600">
                                情報法・サイバーセキュリティ法制の研究に向けて、
                                法学の基礎を体系的に学んでいます。
                            </p>
                        </li>

                        <li class="relative">
                            <span
                                class="absolute -left-[2.1rem] top-2 size-3 rounded-full border-2 border-[#8ebd8e] bg-[#fffdf7]"
                                aria-hidden="true" />

                            <p class="text-xs tracking-[0.14em] text-slate-400">
                                ACADEMIC SOCIETIES
                            </p>

                            <h4 class="mt-2 text-lg font-semibold text-slate-800">
                                学会・研究コミュニティへの参加
                            </h4>

                            <p class="mt-3 leading-8 text-slate-600">
                                情報処理学会、電子情報通信学会、人工知能学会に所属し、
                                研究会や学術イベントを通じて知見を深めています。
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>