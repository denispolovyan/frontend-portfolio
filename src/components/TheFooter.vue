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
		class=" mx-auto w-3/4 ssm:w-11/12 rounded-md py-4 flex justify-center duration-1000 cursor-pointer"
        :class="{
          'bg-gray-500 hover:bg-stone-200 text-gray-200 hover:text-gray-700': store.getNightTheme,
          'bg-stone-500 hover:bg-gray-300 text-gray-200 hover:text-gray-800': !store.getNightTheme
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
