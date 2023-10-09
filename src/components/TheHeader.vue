<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'

import { usePortfolioStore } from '../store/portfolio'

const store = usePortfolioStore()

let nightTheme = ref(false)

const itemClasses =
  'whitespace-nowrap h-12 px-2 flex items-center rounded-sm duration-1000 cursor-pointer ssm:text-xs xs:px-1'

function changeTheme() {
  store.changeTheme()
  nightTheme.value = store.getNightTheme
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
  <div id="header" class="font border-b" :class="{ 'bg-gray-400': nightTheme, 'bg-slate-100': !nightTheme }">
    <div class="flex gap-3 h-40 items-center justify-between content-container ssm:h-28">
      <div>
        <img v-if="!nightTheme" class="w-20 ssm:w-16" src="../assets/logo.png" alt="logo" /><img
          v-else
          class="w-20 ssm:w-16"
          src="../assets/logoWhite.png"
          alt="logo"
        />
      </div>
      <div class="flex items-center gap-3 ssm:gap-2 xs:gap-2">
        <div
          :class="itemClasses"
          class="bg-gray-700 hover:bg-gray-500 text-white"
          v-scroll-to="{
            el: '#projects',
            duration: 800
          }"
        >
          projects
        </div>
        <div
          :class="itemClasses"
          class="bg-stone-700 hover:bg-stone-500 text-white"
          v-scroll-to="{
            el: '#about',
            duration: 1000
          }"
        >
          about me
        </div>
        <div class="flex gap-5 bold">
          <div
            @click="changeTheme()"
            class="w-32 justify-center gap-2 h-12 px-2 flex items-center rounded-sm duration-1000 cursor-pointer ssm:text-xs ssm:gap-1 ssm:w-24 xs:w-20"
            :class="{
              itemClasses,
              'bg-teal-900 text-white hover:bg-teal-700': nightTheme,
              'bg-orange-500  text-stone-100 hover:bg-orange-300': !nightTheme
            }"
          >
            <div>
              <SunIcon v-if="!nightTheme" class="h-8 ssm:h-5 ssm:w-5" />
              <MoonIcon v-else class="h-8 ssm:h-5 ssm:w-5" />
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
