<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'

import { usePortfolioStore } from '../store/portfolio'

const store = usePortfolioStore()

let nightTheme = ref(false)

const itemClasses = 'whitespace-nowrap h-12 px-2 flex items-center rounded-sm duration-1000 cursor-pointer'

function changeTheme() {
  store.changeTheme()
  nightTheme.value = !nightTheme.value
  localStorage.setItem('nightTheme', JSON.stringify(nightTheme.value))
}

onMounted(() => {
  const nightThemeLS = localStorage.getItem('nightTheme')
  if (JSON.parse(nightThemeLS)) {
    let parsedNightThemeLS = JSON.parse(nightThemeLS)
    nightTheme.value = parsedNightThemeLS
    if (parsedNightThemeLS != store.getNightTheme) {
      store.changeTheme()
    }
  }
})
</script>

<template>
  <div class="bg-blue-200 font">
    <div class="flex gap-5 h-40 items-center justify-between content-container">
      <div><img class="w-20" src="../assets/logo.png" alt="logo" /></div>
      <div class="flex items-center gap-4">
        <div :class="itemClasses" class="bg-blue-700 hover:bg-blue-400 text-white">projects</div>
        <div :class="itemClasses" class="bg-cyan-600 hover:bg-cyan-500 text-white">about me</div>
        <div class="flex gap-5 bold">
          <div
            @click="changeTheme()"
            class="w-32 justify-center gap-2 h-12 px-2 flex items-center rounded-sm duration-1000 cursor-pointer"
            :class="{
              itemClasses,
              'bg-teal-900 text-white hover:bg-teal-700': nightTheme,
              'bg-orange-500  text-stone-100 hover:bg-orange-300': !nightTheme
            }"
          >
            <div class="w-8">
              <SunIcon v-if="!nightTheme" class="h-8 w-8" />
              <MoonIcon v-else class="h-8 w-8" />
            </div>
            <p class="">{{ nightTheme ? 'night' : 'day' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');

.font {
  letter-spacing: 3px;
  font-family: 'Arimo', sans-serif;
  font-weight: 600;
}
</style>
