<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { usePortfolioStore } from '../store/portfolio'

import { ref } from 'vue'

const store = usePortfolioStore()

let about = ref({
  experience: false,
  stack: false,
  info: false
})

const aboutArrowClasses =
  'bg-stone-100 p-2 rounded-sm w-9 h-9 cursor-pointer hover:bg-stone-700 duration-1000 hover:text-white'

const aboutCardClasses = 'text-2xl flex gap-4 items-center'
</script>

<template>
  <div
    id="about"
    :class="{
      'bg-slate-100': store.getNightTheme,
      'bg-slate-50': !store.getNightTheme
    }"
  >
    <div class="content-container_about flex flex-col">
      <div class="text-5xl mb-6 text-right">About me</div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.experience ? (about.experience = false) : (about.experience = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>Experience</p>
          </div>
          <div v-if="about.experience">1111</div>
        </div>

        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.stack ? (about.stack = false) : (about.stack = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>Stack</p>
          </div>
          <div v-if="about.stack">222</div>
        </div>

        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.info ? (about.info = false) : (about.info = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>More info</p>
          </div>
          <div v-if="about.info">333</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');

.content-container_about {
  max-width: 800px;
  margin: 0px auto;
  padding: 40px 15px;
  font-family: 'Arimo', sans-serif;
  letter-spacing: 3px;
}
</style>
