<template>
  <header
    class="sticky top-0 w-full shadow-sm bg-white/90 backdrop-blur-sm z-50"
  >
    <div
      class="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between"
    >
      <NuxtLink to="/" class="text-lg font-bold text-gray-900"
        >mayu2664.jp</NuxtLink
      >

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-gray-500 hover:text-blue-600 transition"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="md:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          variant="ghost"
          @click="isOpen = true"
        />
      </div>

      <Transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-white px-6 py-4 md:hidden"
        >
          <div
            class="h-16 flex items-center justify-between mb-8 border-b border-gray-100 -mx-6 px-6 -mt-4"
          >
            <span class="text-lg font-bold text-gray-900">Menu</span>
            <UButton
              icon="i-heroicons-x-mark"
              color="gray"
              variant="ghost"
              size="lg"
              @click="isOpen = false"
            />
          </div>

          <nav class="flex flex-col gap-6 items-center mt-12">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-xl font-bold text-gray-800 hover:text-blue-600 transition py-2"
              @click="isOpen = false"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const navLinks = [{ label: "Contact", href: "#contact" }];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
