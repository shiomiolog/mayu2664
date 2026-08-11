<template>
    <!-- 外部プロフィール -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    EXTERNAL PROFILES
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">外部プロフィール</span>
                </h2>

                <p class="mt-5 max-w-2xl leading-7 text-slate-600">
                    研究活動や日々の発信について、各プロフィールからご覧いただけます。
                </p>
            </header>

            <div class="mt-10 grid gap-10 lg:grid-cols-2">
                <!-- 研究プロフィール -->
                <section>
                    <h3 class="text-sm font-semibold tracking-[0.12em] text-[#397db8]">
                        RESEARCH PROFILES
                    </h3>

                    <ul class="mt-5 divide-y divide-[#b9d7ef] border-y border-[#b9d7ef]">
                        <li>
                            <a href="https://researchmap.jp/mayu2664" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center justify-between gap-4 px-2 py-5 transition-colors hover:bg-[#dcefff]/55">
                                <div>
                                    <p class="font-semibold text-slate-800">
                                        researchmap
                                    </p>
                                    <p class="mt-1 text-sm text-slate-500">
                                        研究者プロフィール・研究業績
                                    </p>
                                </div>

                                <span class="text-lg text-[#397db8] transition-transform group-hover:translate-x-1"
                                    aria-hidden="true">
                                    →
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="https://orcid.org/0009-0008-4197-3331" target="_blank" rel="noopener noreferrer"
                                class="group flex items-center justify-between gap-4 px-2 py-5 transition-colors hover:bg-[#e4f2dc]/60">
                                <div>
                                    <p class="font-semibold text-slate-800">
                                        ORCID
                                    </p>
                                    <p class="mt-1 text-sm text-slate-500">
                                        0009-0008-4197-3331
                                    </p>
                                </div>

                                <span class="text-lg text-[#56835d] transition-transform group-hover:translate-x-1"
                                    aria-hidden="true">
                                    →
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>

                <!-- SNS・技術活動 -->
                <section>
                    <h3 class="text-sm font-semibold tracking-[0.12em] text-[#b96778]">
                        SOCIAL &amp; DEVELOPMENT
                    </h3>

                    <ul class="mt-5 grid grid-cols-2 gap-4">
                        <!-- Twitter -->
                        <li>
                            <a href="https://x.com/mayu2664" target="_blank" rel="noopener noreferrer"
                                class="group block h-full rotate-[0.3deg] bg-[#dcefff] px-5 py-5 shadow-sm transition-transform hover:rotate-0 hover:-translate-y-0.5">
                                <p class="text-xs font-medium tracking-[0.14em] text-[#397db8]">
                                    @mayu2664
                                </p>
                                <p class="mt-2 font-semibold text-slate-800">
                                    Twitter
                                </p>
                            </a>
                        </li>

                        <!-- Facebook -->
                        <li>
                            <a href="https://www.facebook.com/people/%E5%B7%9D%E5%B3%B6%E9%9B%85%E7%B5%90/pfbid0TL8xS4WyFD2oDofAxCR94tRHkpueqoTCVSuA1N94Q27PP2XzFBMWmQUNUfhArixyl/"
                                target="_blank" rel="noopener noreferrer"
                                class="group block h-full -rotate-[0.3deg] bg-[#fbe3e8] px-5 py-5 shadow-sm transition-transform hover:rotate-0 hover:-translate-y-0.5">
                                <p class="text-xs font-medium tracking-[0.14em] text-[#b96778]">
                                    SOCIAL
                                </p>
                                <p class="mt-2 font-semibold text-slate-800">
                                    Facebook
                                </p>
                            </a>
                        </li>

                        <!-- LinkedIn -->
                        <li>
                            <a href="https://www.linkedin.com/in/mayu2664/" target="_blank" rel="noopener noreferrer"
                                class="group block h-full -rotate-[0.2deg] bg-[#e4f2dc] px-5 py-5 shadow-sm transition-transform hover:rotate-0 hover:-translate-y-0.5">
                                <p class="text-xs font-medium tracking-[0.14em] text-[#56835d]">
                                    PROFESSIONAL
                                </p>
                                <p class="mt-2 font-semibold text-slate-800">
                                    LinkedIn
                                </p>
                            </a>
                        </li>

                        <!-- GitHub -->
                        <li>
                            <a href="https://github.com/shiomiolog" target="_blank" rel="noopener noreferrer"
                                class="group block h-full rotate-[0.2deg] bg-[#fff0bf] px-5 py-5 shadow-sm transition-transform hover:rotate-0 hover:-translate-y-0.5">
                                <p class="text-xs font-medium tracking-[0.14em] text-[#9a792d]">
                                    @shiomiolog
                                </p>
                                <p class="mt-2 font-semibold text-slate-800">
                                    GitHub
                                </p>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>