<script setup lang="ts">
const profile = useProfile();
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <AppHeader class="h-16" />

    <div class="max-w-[1000px] mx-auto px-6">
      <div class="flex flex-col md:flex-row md:gap-12 items-start relative">
        <aside class="w-full md:w-1/4 md:sticky top-[64px] self-start h-fit">
          <div class="pt-6 md:pt- pb-6 md:pb-12 space-y-2 md:space-y-6">
            <div
              class="w-40 h-40 md:w-52 md:h-52 mx-auto md:mx-0 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-100 overflow-hidden"
            >
              <img
                :src="profile.image"
                :alt="profile.name"
                class="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div class="text-center md:text-left">
              <h1 class="text-xl md:text-2xl font-bold mt-1 md:mt-0">
                {{ profile.name }}
              </h1>

              <p
                class="text-gray-500 font-medium text-xs md:text-sm leading-tight"
              >
                {{ profile.title }}
              </p>

              <div
                class="mt-1.5 md:mt-4 text-[11px] md:text-sm leading-tight text-gray-600 space-y-0.5 md:space-y-1"
              >
                <p>{{ profile.affiliation }}</p>
                <p>{{ profile.position }}</p>
              </div>
            </div>

            <div
              class="pt-3 md:pt-6 border-t border-gray-100 space-y-2 md:space-y-3"
            >
              <div class="flex items-center gap-3 text-gray-500">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                />
                <span class="text-xs md:text-sm">{{ profile.location }}</span>
              </div>
              <a
                v-for="link in profile.socials"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition font-medium"
              >
                <UIcon :name="link.icon" class="w-4 h-4 md:w-5 md:h-5" />
                <span class="text-xs md:text-sm">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </aside>

        <main class="w-full md:w-3/4 md:pt-2 min-h-[130vh]">
          <slot />
        </main>
      </div>
    </div>

    <footer
      class="mt-12 pt-6 border-t border-gray-100 text-center text-xs text-gray-400 pb-6"
    >
      &copy; {{ new Date().getFullYear() }} {{ profile.name }}.
    </footer>
  </div>
</template>
