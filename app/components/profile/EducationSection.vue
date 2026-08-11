<template>
    <!-- 学歴 -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    EDUCATION
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">学歴</span>
                </h2>
            </header>

            <dl class="mt-10 divide-y divide-[#b9d7ef] border-y border-[#b9d7ef] bg-white/25">
                <!-- 2026年4月：放送大学大学院 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2026-04" class="text-sm font-medium text-[#397db8]">
                            2026年4月
                        </time>
                    </dt>

                    <dd>
                        <p class="font-medium leading-7 text-slate-800">
                            放送大学大学院 文化科学研究科 文化科学専攻（修士課程） 修士選科生
                        </p>
                        <p class="text-sm leading-6 text-slate-500">
                            修士選科生として入学
                        </p>
                    </dd>
                </div>

                <!-- 2026年4月：放送大学 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2026-04" class="text-sm font-medium text-[#397db8]">
                            2026年4月
                        </time>
                    </dt>

                    <dd>
                        <p class="font-medium leading-7 text-slate-800">
                            放送大学 教養学部 教養学科 社会と産業コース 学士編入
                        </p>
                        <p class="text-sm leading-6 text-slate-500">
                            3年次編入学
                        </p>
                    </dd>
                </div>

                <!-- 2026年3月：サイバー大学卒業 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2026-03" class="text-sm font-medium text-[#397db8]">
                            2026年3月
                        </time>
                    </dt>

                    <dd>
                        <p class="font-medium leading-7 text-slate-800">
                            サイバー大学 IT総合学部 IT総合学科 卒業
                        </p>
                        <p class="text-sm leading-6 text-slate-500">
                            学士（IT総合学）
                        </p>
                    </dd>
                </div>

                <!-- 2024年4月：復学 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2024-04" class="text-sm font-medium text-[#397db8]">
                            2024年4月
                        </time>
                    </dt>

                    <dd class="font-medium leading-7 text-slate-800">
                        サイバー大学 IT総合学部 IT総合学科 復学
                    </dd>
                </div>

                <!-- 2023年4月：休学 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2023-04" class="text-sm font-medium text-[#397db8]">
                            2023年4月
                        </time>
                    </dt>

                    <dd class="font-medium leading-7 text-slate-800">
                        サイバー大学 IT総合学部 IT総合学科 休学
                    </dd>
                </div>

                <!-- 2021年4月：サイバー大学入学 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2021-04" class="text-sm font-medium text-[#397db8]">
                            2021年4月
                        </time>
                    </dt>

                    <dd class="font-medium leading-7 text-slate-800">
                        サイバー大学 IT総合学部 IT総合学科 入学
                    </dd>
                </div>

                <!-- 2021年3月：N高等学校卒業 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2021-03" class="text-sm font-medium text-[#397db8]">
                            2021年3月
                        </time>
                    </dt>

                    <dd class="font-medium leading-7 text-slate-800">
                        N高等学校 普通科（通信制）卒業
                    </dd>
                </div>

                <!-- 2018年4月：N高等学校入学 -->
                <div class="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt>
                        <time datetime="2018-04" class="text-sm font-medium text-[#397db8]">
                            2018年4月
                        </time>
                    </dt>

                    <dd class="font-medium leading-7 text-slate-800">
                        N高等学校 普通科（通信制）入学
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>