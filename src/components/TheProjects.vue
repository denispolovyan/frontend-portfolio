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
  carrousel: false,
  cryptonomicon: false,
  vueToDoList: false,
  forecast: false,
  films: false,
  fasiya: false,
  frontendPortfolio: false,
  onTrack: false,
  jsToDoList: false,
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

function openExactProject(project) {
  exactProjects.value[project] = !exactProjects.value[project]
}
</script>

<template>
  <div id="projects"
    :class="{
      'bg-slate-200': store.getNightTheme,
      'bg-slate-50': !store.getNightTheme
    }"
	 class="border-b border-slate-400"
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
                @click="openExactProject('onTrack')"
                >Advanced to do list</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.onTrack">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">on track</div>
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
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/onTrackIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
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
                @click="openExactProject('frontendPortfolio')"
                >Frontend portfolio</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.frontendPortfolio">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">on track</div>
                <div>HTML CSS JS VUE VUEX TAILWIND</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/frontend-portfolio/"
                    >denispolovyan.github.io/portfolio</a
                  >
                </div>
                <div>
                  My frontend developer portfolio. Here you can check all my experience: landing
                  pages, native js, vue. Also here is some info about me and my contacts for all
                  live cases so you can contact me if this page interested you.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/frontendPortfolioIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/frontendPortfolioMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 ">
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

            <p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.fasiya }"
                @click="openExactProject('fasiya')"
                >Art exhibition</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.fasiya">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">Fasiya</div>
                <div>HTML CSS JS VUE VUEX</div>
                <div class="italic underline">
                  <a target="_blank" href="https://fasiyaart.de/">fasiyaart.de</a>
                </div>
                <div>
                  Art exhibition app. My first real project where I created an app for exhibition in
                  Germany to show Ukrainian culture, traditions and art. It was non-profit project
                  for raising money on armed forces of Ukraine. It was a great experience and I will
                  cooperate with them for future projects.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/fasiyaIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/fasiyaMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.forecast }"
                @click="openExactProject('forecast')"
                >Weather app</span
              >
            </p>
            <div class=" mb-8" v-if="exactProjects.forecast">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">Forecast</div>
                <div>HTML CSS JS VUE</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/weatherApp/"
                    >denispolovyan.github.io/weather</a
                  >
                </div>
                <div>
                  Weather app (mobile first). You can watch weather for the entire world: hourly
                  forecast, day forecast, forecast right now. Also app has different additions:
                  wind, rain, humidity, sunrise and sunset.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/weatherIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/weatherMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.cryptonomicon }"
                @click="openExactProject('cryptonomicon')"
                >Cryptonomicon</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.cryptonomicon">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">Crypto app</div>
                <div>HTML CSS JS VUE LOCALSTORAGE TAILWIND</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/cryptonomicon"
                    >denispolovyan.github.io/crypto</a
                  >
                </div>
                <div>
                  Crypto app. My first Vue project which I was doing during learning it. Many
                  features I borrowed from the author but also added a lot on my own. Here you can
                  find cryptocurrency and watch how it changes (number and graph).
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/cryptonomiconPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/cryptonomiconMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.carrousel }"
                @click="openExactProject('carrousel')"
                >Photo carrousel</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.carrousel">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">Carrousel</div>
                <div>HTML CSS JS VUE VUEX BOOTSTRAP LOCALSTORAGE</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/carousel/#"
                    >denispolovyan.github.io/carrousel</a
                  >
                </div>
                <div>
                  Random pictures app. It was my first test task. Here I used https://picsum.photos/ for random photos. In this app you can change and generate new pictures, also you can click on a picture to add it and click at the added picture to remove it.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/carouselIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/carosuelMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.films }"
                @click="openExactProject('films')"
                >Films app</span
              >
            </p>
				<div class="border-b border-gray-300 mb-8" v-if="exactProjects.films">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">Films</div>
                <div>HTML CSS JS VUE VUEX VUE-ROUTER VUELIDATE LOCALSTORAGE</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/vuerouter/#/films"
                    >denispolovyan.github.io/films</a
                  >
                </div>
                <div>
                  Films app. Here you can read info about films and rate them. But these options and which films you can see depend on your age, whether you signed up and if you bought premium or not. All films you rated you will see in your account and (if you want) you can delete or change rates.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/filmsIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/filmsMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.vueToDoList }"
                @click="openExactProject('vueToDoList')"
                >To do list</span
              >
            </p>
				<div class="border-b border-gray-300 mb-8" v-if="exactProjects.vueToDoList">
              <div class="flex flex-col gap-3 mb-6">
                <div class="uppercase underline font-semibold">To do list</div>
                <div>HTML CSS JS VUE VUEX VUE-ROUTER VUELIDATE LOCALSTORAGE</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/vueTodo/"
                    >denispolovyan.github.io/vueTodo</a
                  >
                </div>
                <div>
                  To do list. My second test task. It is simple to do list but here are some interesting features: scale of progress and task stage filter. The second one means that you can filter tasks and watch all/done/undone.
                </div>
                <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/vueToDoIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/vueToDoMacbook.png"
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
              projects.landingPages
                ? (projects.landingPages = false)
                : (projects.landingPages = true)
            "
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Landing pages</p>
          </div>
          <div v-if="projects.landingPages" class="flex flex-col gap-2">
				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.portfolio }"
                @click="openExactProject('portfolio')"
                >Portfolio</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.portfolio">
              <div class="flex flex-col gap-3 mb-6">
                <div>HTML CSS JS</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/portfolio/">denispolovyan.github.io/portfolio</a>
                </div>
					 <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/portfolioIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/portfolioMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.business }"
                @click="openExactProject('business')"
                >Business</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.business">
              <div class="flex flex-col gap-3 mb-6">
                <div>HTML CSS</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/business/">denispolovyan.github.io/business</a>
                </div>
					 <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/businessIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/businessMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.relvise }"
                @click="openExactProject('relvise')"
                >Relvise</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.relvise">
              <div class="flex flex-col gap-3 mb-6">
                <div>HTML CSS</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/relvise/">denispolovyan.github.io/relvise</a>
                </div>
					 <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/relviseIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/relviseMacbook.png"
                      alt="project photo"
                    />
                  </div>
                </div>
              </div>
            </div>

				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.agency }"
                @click="openExactProject('agency')"
                >Agency</span
              >
            </p>
            <div class="border-b border-gray-300 mb-8" v-if="exactProjects.agency">
              <div class="flex flex-col gap-3 mb-6">
                <div>HTML CSS JS</div>
                <div class="italic underline">
                  <a target="_blank" href="https://denispolovyan.github.io/agency/">denispolovyan.github.io/agency</a>
                </div>
					 <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/agencyIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/agencyMacbook.png"
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
            @click="projects.nativeJs ? (projects.nativeJs = false) : (projects.nativeJs = true)"
          >
            <chevron-down-icon class="h-8" :class="projectArrowClasses" />
            <p>Native JS</p>
          </div>

          <div v-if="projects.nativeJs" class="flex flex-col gap-2">


				<p :class="projectClasses">
              <span
                :class="{ 'text-red-400': exactProjects.news }"
                @click="openExactProject('news')"
                >News app</span
              >
            </p>
            <div class=" mb-8" v-if="exactProjects.news">
              <div class="flex flex-col gap-3 mb-6">
                <div>HTML CSS JS BOOTSTRAP</div>
                <div class="italic underline">
                  <a target="_blank" href="https://news-app-nine-nu.vercel.app/">news-app-nine-nu.vercel.app</a>
                </div>
					 <div>
                  News app. App gets information from free API (100 news per 1 day). Here you can search for news using different categories, languages and countries. Also you can find posts by key words.
                </div>
					 <div class="flex ssm:flex-col ssm:gap-3">
                  <div class="ssm:text-center ssm:ml-14">
                    <img
                      class="h-72 md:h-64 sm:h-48 ssm:h-96 ssm:w-48"
                      src="../assets/img/projectsExamples/newsIPhone.png"
                      alt="project photo"
                    />
                  </div>
                  <div>
                    <img
                      class="h-72 md:h-64 sm:h-44"
                      src="../assets/img/projectsExamples/newsMacbook.png"
                      alt="project photo"
                    />
                  </div>
               </div> 
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

.content-container_frontpage {
  max-width: 800px;
  margin: 0px auto;
  padding: 40px 15px;
  font-family: 'Arimo', sans-serif;
  letter-spacing: 3px;
}
</style>
