<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

import { usePortfolioStore } from '../store/portfolio'

const store = usePortfolioStore()

let projects = ref({
  optionsApi: false,
  compositionApi: false,
  nativeJs: false,
  landingPages: false
})

let exactProjects = ref({
  carousel: false,
  toDoList: false,
  forecast: false,
  films: false,
  fasiya: false,
  frontendPortfolio: false,
  onTrack: false,
  testToDoList: false,
  news: false,
  portfolio: false,
  business: false,
  relvise: false,
  agency: false
})
const projectCardClasse = 'text-2xl flex gap-4 items-center'
const projectArrowClasses =
  'bg-stone-100 p-2 rounded-sm w-9 h-9 cursor-pointer hover:bg-stone-700 duration-1000 hover:text-white'
const projectClasses = `cursor-pointer text-gray-500 hover:text-zinc-950 duration-500`
</script>

<template>
  <div
    :class="{
      'bg-slate-100': store.getNightTheme,
      'bg-slate-50': !store.getNightTheme
    }"
  >
    <div class="content-container_frontpage">
      <div class="text-right text-5xl mb-6 ssm:text-left">My projects</div>
      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-3">
          <div
            :class="projectCardClasse"
            @click="
              projects.compositionApi
                ? (projects.compositionApi = false)
                : (projects.compositionApi = true)
            "
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Vue (Composition Api)</p>
          </div>
          <div v-if="projects.compositionApi" class="flex flex-col gap-2">
            <p :class="projectClasses">
              <span
					 :class="{ 'text-red-400': exactProjects.onTrack }"
                @click="
                  exactProjects.onTrack
                    ? (exactProjects.onTrack = false)
                    : (exactProjects.onTrack = true)
                "
                >Advanced to do list</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.onTrack">
              <div class="flex flex-col gap-3 mb-6">
                <div
                  class="uppercase underline font-semibold"
                >
                  on track
                </div>
                <div>HTML CSS JS VUE LOCALSTORAGE TAILWIND</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/on_track/#activities"
                    >denispolovyan.github.io/on_track</a
                  >
                </div>
                <div>
                  Advanced to do list (mobile first). Create activities and set how much time per
                  day you want to spend doing them. You have timeline page where you have timer
                  which synchronized with activities page (where you create task and set time) so
                  you can create personal schedule for each hour.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-16">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-52"
                      src="../assets/img/projectsExamples/onTrackIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-48"
                      src="../assets/img/projectsExamples/onTrackMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p :class="projectClasses">
              <span
				  :class="{ 'text-red-400': exactProjects.frontendPortfolio }"
                @click="
                  exactProjects.frontendPortfolio
                    ? (exactProjects.frontendPortfolio = false)
                    : (exactProjects.frontendPortfolio = true)
                "
                >Frontend portfolio</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.frontendPortfolio">
              <div class="flex flex-col gap-3 mb-6">
                <div
                  class="uppercase underline font-semibold"
                >
                  on track
                </div>
                <div>HTML CSS JS VUE VUEX TAILWIND</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/frontend-portfolio/"
                    >denispolovyan.github.io/frontend-portfolio</a
                  >
                </div>
                <div>
                  My frontend developer portfolio. Here you can check all my experience: landing
                  pages, native js, vue. Also here is some info about me and my contacts for all live
                  cases so you can contact me if this page interested you.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-16">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-52"
                      src="../assets/img/projectsExamples/frontendPortfolioIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-48"
                      src="../assets/img/projectsExamples/frontendPortfolioMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            :class="projectCardClasse"
            @click="
              projects.optionsApi ? (projects.optionsApi = false) : (projects.optionsApi = true)
            "
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Vue (Options Api)</p>
          </div>
          <div v-if="projects.optionsApi" class="flex flex-col gap-2">
            <p><span :class="projectClasses">Art exhibition</span></p>
            <p><span :class="projectClasses">Weather app </span></p>
            <p><span :class="projectClasses">Cryptonomicon</span></p>
            <p><span :class="projectClasses">Photo carousel</span></p>
            <p><span :class="projectClasses">Films app</span></p>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            :class="projectCardClasse"
            @click="
              projects.landingPages
                ? (projects.landingPages = false)
                : (projects.landingPages = true)
            "
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Landing pages</p>
          </div>
          <div v-if="projects.landingPages" class="flex flex-col gap-2">
            <p><span :class="projectClasses">Portfolio</span></p>
            <p><span :class="projectClasses">Agency</span></p>
            <p><span :class="projectClasses">Business</span></p>
            <p><span :class="projectClasses">Relvise</span></p>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            :class="projectCardClasse"
            @click="projects.nativeJs ? (projects.nativeJs = false) : (projects.nativeJs = true)"
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Native JS</p>
          </div>
          <div v-if="projects.nativeJs" class="flex flex-col gap-2">
            <p><span :class="projectClasses">To do list </span></p>
            <p><span :class="projectClasses">News app</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');

.content-container_frontpage {
  max-width: 800px;
  margin: 0px auto;
  padding: 40px 15px;
  font-family: 'Arimo', sans-serif;
  letter-spacing: 3px;
}
</style>
