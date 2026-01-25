<script setup lang="ts">
// たったこれだけ！自動で composables フォルダの中身を見つけてくれます
const profile = useProfile();
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <div class="max-w-[1000px] mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <aside class="md:col-span-1">
          <div class="md:sticky md:top-12 space-y-6">
            <div
              class="w-50 h-50 mx-auto md:mx-0 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-100 overflow-hidden"
            >
              <img
                :src="profile.image"
                :alt="profile.name"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="text-center md:text-left">
              <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
              <p class="text-gray-500 font-medium">{{ profile.title }}</p>
              <div class="mt-4 text-sm leading-relaxed text-gray-600 space-y-1">
                <p>{{ profile.affiliation }}</p>
                <p>{{ profile.position }}</p>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-100 space-y-3">
              <div class="flex items-center gap-3 text-gray-500">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-5 h-5 text-gray-400"
                />
                <span class="text-sm">{{ profile.location }}</span>
              </div>

              <a
                v-for="link in profile.socials"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition"
              >
                <UIcon :name="link.icon" class="w-5 h-5" />
                <span class="text-sm">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </aside>

        <main class="md:col-span-2">
          <slot />
        </main>
      </div>

      <footer
        class="mt-20 pt-8 border-t border-gray-100 text-center text-xs text-gray-400"
      >
        &copy; {{ new Date().getFullYear() }} {{ profile.name }}.
      </footer>
    </div>
  </div>
</template>
