<template>
    <!-- 所属学会 -->
    <section class="relative border-t border-[#b9d7ef]">
        <!-- 大学ノート風の横罫線 -->
        <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(#dcecf7_1px,transparent_1px)] bg-[size:100%_2.25rem] opacity-70"
            aria-hidden="true" />

        <div class="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <header>
                <p class="text-xs tracking-[0.2em] text-slate-400">
                    ACADEMIC SOCIETIES
                </p>

                <h2 class="relative mt-2 inline-block px-1 text-2xl font-semibold text-slate-800">
                    <span class="absolute inset-x-0 bottom-0 h-3 -rotate-1 bg-[#ffe58a]/70" aria-hidden="true" />
                    <span class="relative">所属学会・団体</span>
                </h2>
            </header>

            <ul class="mt-10 grid gap-6 sm:grid-cols-2">
                <!-- 情報処理学会 -->
                <li
                    class="relative rotate-[0.4deg] bg-[#dcefff] px-6 pb-6 pt-8 shadow-sm transition-transform duration-200 hover:rotate-0">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-2 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#397db8]">
                        IPSJ
                    </p>

                    <h3 class="mt-2 font-semibold leading-7 text-slate-800">
                        情報処理学会
                    </h3>

                    <p class="mt-1 text-sm leading-6 text-slate-500">
                        Information Processing Society of Japan
                    </p>
                </li>

                <!-- 電子情報通信学会 -->
                <li
                    class="relative -rotate-[0.4deg] bg-[#e4f2dc] px-6 pb-6 pt-8 shadow-sm transition-transform duration-200 hover:rotate-0">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-1 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#56835d]">
                        IEICE
                    </p>

                    <h3 class="mt-2 font-semibold leading-7 text-slate-800">
                        電子情報通信学会
                    </h3>

                    <p class="mt-1 text-sm leading-6 text-slate-500">
                        Institute of Electronics, Information and Communication Engineers
                    </p>
                </li>

                <!-- 人工知能学会 -->
                <li
                    class="relative rotate-[0.3deg] bg-[#fbe3e8] px-6 pb-6 pt-8 shadow-sm transition-transform duration-200 hover:rotate-0 sm:col-span-2 lg:col-span-1">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-1 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#b96778]">
                        JSAI
                    </p>

                    <h3 class="mt-2 font-semibold leading-7 text-slate-800">
                        人工知能学会
                    </h3>

                    <p class="mt-1 text-sm leading-6 text-slate-500">
                        Japanese Society for Artificial Intelligence
                    </p>
                </li>

                <!-- MyData Japan -->
                <li
                    class="relative -rotate-[0.3deg] bg-[#fff0bf] px-6 pb-6 pt-8 shadow-sm transition-transform duration-200 hover:rotate-0">
                    <span class="absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-2 bg-white/60 shadow-sm"
                        aria-hidden="true" />

                    <p class="text-xs font-medium tracking-[0.16em] text-[#9a792d]">
                        MYDATA JAPAN
                    </p>

                    <h3 class="mt-2 font-semibold leading-7 text-slate-800">
                        一般社団法人MyDataJapan
                    </h3>

                    <p class="mt-1 text-sm leading-6 text-slate-500">
                        MyData Japan
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>