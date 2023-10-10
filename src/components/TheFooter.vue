<script setup>
import { ChevronUpIcon } from '@heroicons/vue/24/outline'

import { usePortfolioStore } from '../store/portfolio'

const store = usePortfolioStore()
</script>

<template>
  <div
    v-scroll-to="{
      el: '#header',
      duration: 1000
    }"
    :class="{ 'bg-gray-400': store.getNightTheme, 'bg-slate-100': !store.getNightTheme }"
  >
    <div class="content-container_frontpage">
      <div
		class=" mx-auto w-full rounded-sm py-4 flex justify-center duration-1000 cursor-pointer"
        :class="{
          'bg-gray-500 hover:bg-slate-200 text-gray-200 hover:text-gray-500': store.getNightTheme,
          'bg-gray-300 hover:bg-gray-500 text-gray-600 hover:text-gray-200': !store.getNightTheme
        }"
      >
        <ChevronUpIcon
          class="h-12"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');

.content-container_frontpage {
  max-width: 800px;
  margin: 0px auto;
  padding: 40px 15px;
  font-family: 'Arimo', sans-serif;
  letter-spacing: 3px;
}
</style>
