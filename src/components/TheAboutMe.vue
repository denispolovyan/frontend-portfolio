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
      <div class="text-5xl mb-6 text-right ssm:text-left">About me</div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.experience ? (about.experience = false) : (about.experience = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>Additional experience</p>
          </div>
          <div v-if="about.experience" class="border-b border-gray-300 pb-6">
            <div class="flex flex-col gap-6 w-10/12 ssm:w-full">
              <div>
                <p class="text-xl">Nuxt (basics)</p>
                <a
                  target="_blank"
                  class="italic underline"
                  href="https://github.com/denispolovyan/nuxt"
                  >github.com/denispolovyan/nuxt</a
                >
              </div>

              <div>
                <p class="text-xl">Pyhton (basics)</p>
                <a
                  target="_blank"
                  class="italic underline"
                  href="https://github.com/denispolovyan/pythonList"
                  >github.com/denispolovyan/python</a
                >
              </div>

              <div>
                <p class="text-xl">Django (basics)</p>
                <a
                  target="_blank"
                  class="italic underline"
                  href="https://github.com/denispolovyan/firstDjangoProject"
                  >github.com/denispolovyan/django</a
                >
              </div>

              <div>
                <p class="text-xl">PHP (basics)</p>
                <div>
                  I had no real projects using PHP, but i finished two courses:
                  <br />
                  <a
                    target="_blank"
                    class="italic underline"
                    href="https://www.youtube.com/playlist?list=PLDyJYA6aTY1m5zGQVcEYIoSFz2GD8u7cC"
                    >youtube.com/php/course1</a
                  >
                  <br />
                  <a
                    target="_blank"
                    class="italic underline"
                    href="https://www.youtube.com/playlist?list=PLd2_Os8Cj3t-CoUEdoAiYc1sj21FH79no"
                    >youtube.com/php/course2</a
                  >
                </div>
              </div>

              <div>
                <p class="text-xl">SQL (basics)</p>
                <div>
                  I had no real projects using SQL, but i finished two courses:
                  <br />
                  <a
                    target="_blank"
                    class="italic underline"
                    href="https://www.youtube.com/playlist?list=PL0lO_mIqDDFVnLvR39VpEtphQ8bPJ-xR9"
                    >youtube.com/sql/course1</a
                  >
                  <br />
                  <a
                    target="_blank"
                    class="italic underline"
                    href="https://www.youtube.com/playlist?list=PLDyJYA6aTY1lPhlF2iHiLlkDW6bd39VmE"
                    >youtube.com/sql/course2</a
                  >
                </div>
              </div>

              <div>
                <p class="text-xl">Figma (basics)</p>
                <div>
                  I do not create full website designs, i use Figma for microtasks: create logo,
                  create components, work with templates, work with plugins to expand CSS
                  possibilities.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.stack ? (about.stack = false) : (about.stack = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>Stack</p>
          </div>
          <div
            v-if="about.stack"
            class="flex flex-col gap-2 w-10/12 ssm:w-full border-b border-gray-300 pb-6"
          >
            <div class="text-slate-800">HTML CSS SCSS TAILWIND JS VUE VUEX PINIA VUEROUTER</div>
            <div class="text-slate-400">PHP PYTHON DJANGO SQL MYSQL NUXT</div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.info ? (about.info = false) : (about.info = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>More info</p>
          </div>
          <div v-if="about.info" clas="border-b border-gray-300 pb-6">
            <div>
              I am an electronics design engineer student at the National Technical University of Ukraine
              “Igor Sikorsky Kyiv Polytechnic Institute”. All I know about IT I learned myself so I am not used to get needed information from somebody, I know how to find it myself. Frontend for me is not just an easy way to IT, I like to discover new technologies, combine it and contemplate the result. I have that amazing feeling when the code starts running and I want to feel that again and again. That's why I am open to work as a Junior Frontend Developer.
            </div>
          </div>
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