<template>
    <!-- 関心領域 -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <!-- セクション見出し -->
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    INTERESTS
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">関心領域</span>
                </h2>
            </header>

            <!-- 大枠 -->
            <div class="mt-12 text-center">
                <div class="relative inline-block -rotate-1 bg-[#fff3a8] px-8 pb-4 pt-6 shadow-sm">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xl font-semibold tracking-wide text-slate-800">
                        情報セキュリティ
                    </p>

                    <p class="mt-1 text-xs tracking-[0.16em] text-slate-500">
                        INFORMATION SECURITY
                    </p>
                </div>
            </div>

            <!-- 法・政策／技術 -->
            <div class="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
                <!-- 法・政策分野 -->
                <section class="md:border-r-2 md:border-[#e7a3a3] md:pr-10">
                    <h3 class="relative inline-block px-1 text-lg font-semibold text-[#397db8]">
                        <span class="absolute inset-x-0 bottom-0 h-2 -rotate-1 bg-[#ffe58a]/60" aria-hidden="true" />
                        <span class="relative">法・政策分野</span>
                    </h3>

                    <p class="mt-2 text-xs tracking-[0.14em] text-slate-400">
                        LAW &amp; POLICY
                    </p>

                    <ul class="mt-7 space-y-5">
                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                サイバーセキュリティ法制
                            </p>
                        </li>

                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                データ保護法制
                            </p>
                        </li>

                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                ITガバナンス
                            </p>
                        </li>

                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                システム監査
                            </p>
                        </li>
                    </ul>
                </section>

                <!-- 技術分野 -->
                <section class="border-t-2 border-[#e7a3a3] pt-10 md:border-t-0 md:pl-10 md:pt-0">
                    <h3 class="relative inline-block px-1 text-lg font-semibold text-[#397db8]">
                        <span class="absolute inset-x-0 bottom-0 h-2 -rotate-1 bg-[#ffe58a]/60" aria-hidden="true" />
                        <span class="relative">技術分野</span>
                    </h3>

                    <p class="mt-2 text-xs tracking-[0.14em] text-slate-400">
                        TECHNOLOGY
                    </p>

                    <ul class="mt-7 space-y-5">
                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                低レイヤー技術／システムプログラミング
                            </p>

                            <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-500">
                                <li>・オペレーティングシステム</li>
                                <li>・CPUアーキテクチャ</li>
                                <li>・ハイパーバイザー</li>
                            </ul>
                        </li>

                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                システム工学／システムアーキテクチャ
                            </p>
                        </li>

                        <li class="border-l-2 border-[#7db1dd] pl-4">
                            <p class="font-medium text-slate-700">
                                ネットワーク工学
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>

    <!-- 研究・専攻分野 -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <!-- セクション見出し -->
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    ACADEMIC FIELDS
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">研究・専攻分野</span>
                </h2>
            </header>

            <!-- 情報学／法学 -->
            <div class="mt-12 grid gap-10 md:grid-cols-2">
                <!-- 情報学 -->
                <article class="relative rotate-[0.5deg] bg-[#dcefff] px-7 pb-7 pt-9 shadow-sm">
                    <span class="absolute -top-2 left-1/2 h-4 w-20 -translate-x-1/2 -rotate-2 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#397db8]">
                        INFORMATICS
                    </p>

                    <h3 class="mt-2 text-xl font-semibold text-slate-800">
                        情報学
                    </h3>

                    <p class="mt-4 leading-8 text-slate-600">
                        情報セキュリティ、コンピュータシステム、ネットワークなどを
                        技術的な基礎としています。
                    </p>

                    <p class="mt-5 border-t border-[#9fc8e8] pt-4 text-sm text-slate-500">
                        学士（IT総合学）
                    </p>
                </article>

                <!-- 法学 -->
                <article class="relative -rotate-[0.5deg] bg-[#fbe3e8] px-7 pb-7 pt-9 shadow-sm">
                    <span class="absolute -top-2 left-1/2 h-4 w-20 -translate-x-1/2 rotate-1 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#b96778]">
                        LAW
                    </p>

                    <h3 class="mt-2 text-xl font-semibold text-slate-800">
                        法学
                    </h3>

                    <p class="mt-4 leading-8 text-slate-600">
                        現在は、情報法とサイバーセキュリティ法制の研究に向けて、
                        民法・刑法・行政法などの基礎を学んでいます。
                    </p>

                    <p class="mt-5 border-t border-[#e6b8c2] pt-4 text-sm text-slate-500">
                        放送大学で学修中
                    </p>
                </article>
            </div>

            <!-- 現在の研究関心 -->
            <article
                class="relative mx-auto mt-14 max-w-3xl rotate-[0.3deg] bg-[#e4f2dc] px-7 pb-7 pt-9 shadow-sm sm:px-9">
                <span class="absolute -top-2 left-1/2 h-4 w-24 -translate-x-1/2 bg-white/60 shadow-sm"
                    aria-hidden="true" />

                <p class="text-xs font-medium tracking-[0.16em] text-[#56835d]">
                    CURRENT RESEARCH INTEREST
                </p>

                <h3 class="mt-2 text-xl font-semibold text-slate-800">
                    現在の研究関心
                </h3>

                <p class="mt-4 leading-8 text-slate-600">
                    情報セキュリティを支える技術と法制度の関係、とりわけ、
                    正当な脆弱性調査を支える民事・刑事上の制度設計に関心があります。
                </p>
            </article>
        </div>
    </section>
</template>