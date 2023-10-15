<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { usePortfolioStore } from '../store/portfolio'

import { ref } from 'vue'

const store = usePortfolioStore()

let about = ref({
  experience: false,
  stack: false,
  info: false,
  files: false
})

const aboutArrowClasses =
  'bg-stone-100 p-2 rounded-sm w-9 h-9 cursor-pointer hover:bg-stone-700 duration-1000 hover:text-white'

const aboutCardClasses = 'text-2xl flex gap-4 items-center cursor-pointer'

const linkClasses = 'hover:text-red-500 duration-700 italic underline'
</script>

<template>
  <div
    id="about"
    class="border-b"
    :class="{
      'bg-slate-200': store.getNightTheme,
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
                <a target="_blank" :class="linkClasses" href="https://github.com/denispolovyan/nuxt"
                  >https://github.com/nuxt</a
                >
              </div>

              <div>
                <p class="text-xl">Pyhton (basics)</p>
                <a
                  :class="linkClasses"
                  target="_blank"
                  href="https://github.com/denispolovyan/pythonList"
                  >https://github.com/python</a
                >
              </div>

              <div>
                <p class="text-xl">Django (basics)</p>
                <a
                  :class="linkClasses"
                  target="_blank"
                  href="https://github.com/denispolovyan/firstDjangoProject"
                  >https://github.com/django</a
                >
              </div>

              <div>
                <p class="text-xl">PHP (basics)</p>
                <div>
                  I had no real projects using PHP, but i finished two courses:
                  <br />
                  <a
                    :class="linkClasses"
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLDyJYA6aTY1m5zGQVcEYIoSFz2GD8u7cC"
                    >https://youtube.com/php/course1</a
                  >
                  <br />
                  <a
                    :class="linkClasses"
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLd2_Os8Cj3t-CoUEdoAiYc1sj21FH79no"
                    >https://youtube.com/php/course2</a
                  >
                </div>
              </div>

              <div>
                <p class="text-xl">SQL (basics)</p>
                <div>
                  I had no real projects using SQL, but i finished two courses:
                  <br />
                  <a
                    :class="linkClasses"
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PL0lO_mIqDDFVnLvR39VpEtphQ8bPJ-xR9"
                    >https://youtube.com/sql/course1</a
                  >
                  <br />
                  <a
                    :class="linkClasses"
                    target="_blank"
                    href="https://www.youtube.com/playlist?list=PLDyJYA6aTY1lPhlF2iHiLlkDW6bd39VmE"
                    >https://youtube.com/sql/course2</a
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
            <div class="flex flex-col gap-2">
              <p>
                I am an electronics design engineer student at the National Technical University of
                Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”. All I know about IT I learned
                myself so I am not used to get needed information from somebody, I know how to find
                it. Frontend for me is not just an easy way to IT, I like to discover new
                technologies, combine it and the result. I have that amazing feeling when the code
                starts running and I want to feel that again and again.
              </p>
              <p>
                That's why I am open to work as a Junior Frontend Developer. As I am a student and
                have a lot of energy - one of my goals is to find a cheerful and communicative team.
                I have an intermediate English level so I can communicate with foreign customers or
                international team.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div
            :class="aboutCardClasses"
            @click="about.files ? (about.files = false) : (about.files = true)"
          >
            <chevron-down-icon class="h-8" :class="aboutArrowClasses" />
            <p>Files</p>
          </div>
          <div
            v-if="about.files"
            class="flex flex-col gap-2 w-10/12 ssm:w-full border-b border-gray-300 pb-6"
          >
            <div>
              <p class="text-xl">CV/Resume</p>
              <div>
                <a
                  :class="linkClasses"
                  target="_blank"
                  href="https://drive.google.com/file/d/1QJCNnJNybdQLApZ3FF8ccQLWDKnrkMBw/view?usp=sharing"
                  >https://drive.google.com/CV</a
                >
              </div>
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
  padding: 70px 15px 40px 15px;
  font-family: 'Arimo', sans-serif;
  letter-spacing: 3px;
}
</style>
