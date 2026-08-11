<template>
    <footer class="relative overflow-hidden border-t border-[#b9d7ef] bg-[#f8fbfd]">
        <!-- 横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-75"
            aria-hidden="true" />

        <!-- 左側の赤い縦罫線 -->
        <div class="pointer-events-none absolute inset-y-0 left-[max(1.5rem,calc((100%-64rem)/2))] hidden w-px bg-[#efb8bf]/70 sm:block"
            aria-hidden="true" />

        <div
            class="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:pl-14 lg:px-8 lg:pl-16">
            <!-- 氏名・研究分野 -->
            <div>
                <p class="text-lg font-semibold text-slate-800">
                    川島 雅結
                </p>

                <p class="mt-2 text-sm leading-6 text-slate-500">
                    情報セキュリティを技術と法制度の両面から研究しています。
                </p>
            </div>

            <!-- リンク・著作権表示 -->
            <div class="sm:text-right">
                <nav aria-label="フッターナビゲーション">
                    <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        <li>
                            <a href="#contact"
                                class="border-b border-transparent text-slate-600 transition-colors hover:border-[#397db8] hover:text-[#397db8]">
                                お問い合わせ
                            </a>
                        </li>

                        <li>
                            <a href="https://researchmap.jp/mayu2664" target="_blank" rel="noopener noreferrer"
                                class="border-b border-transparent text-slate-600 transition-colors hover:border-[#397db8] hover:text-[#397db8]">
                                researchmap
                            </a>
                        </li>

                        <li>
                            <a href="https://orcid.org/0009-0008-4197-3331" target="_blank" rel="noopener noreferrer"
                                class="border-b border-transparent text-slate-600 transition-colors hover:border-[#397db8] hover:text-[#397db8]">
                                ORCID
                            </a>
                        </li>
                    </ul>
                </nav>

                <p class="mt-5 text-xs tracking-wide text-slate-400">
                    &copy; {{ currentYear }} Mayu Kawashima
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>