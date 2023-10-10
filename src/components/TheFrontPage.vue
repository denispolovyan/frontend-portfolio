<script setup>
const imgClasses = 'h-14 w-14 sm:h-10 sm:w-10 rounded-full duration-500 hover:bg-gray-400'

import { usePortfolioStore } from '../store/portfolio'

const store = usePortfolioStore()

</script>

<template>
  <div class="font border-b border-slate-400" :class="{ 'bg-slate-200': store.getNightTheme, 'bg-slate-50': !store.getNightTheme }">
    <div class="content-container_frontpage relative lg:flex lg:flex-col lg:gap-8">
      <div class="lg:flex sm:flex-col sm:gap-2">
        <div>
          <div class="underline mb-8 text-stone-400 md:mb-6 sm:mb-4">Hello world !</div>
          <div
            class="text-5xl w-2/3 mb-12 z-20 lg:w-10/12 lg:mb-2 md:text-3xl md:w-3/4 sm:w-11/12 sm:mb-4"
          >
            I am a junior frontend developer. This is a site about me and my experience.
          </div>
        </div>
        <div
          class="flex gap-8 justify-start lg:absolute lg:flex-col lg:right-4 lg:gap-12 lg:top-20 md:gap-7 sm:static sm:flex-row sm:gap-6 xs:gap-4 sm:mb-2"
        >
          <div>
            <a href="https://github.com/denispolovyan" target="_blank">
              <img :class="imgClasses" src="../assets/img/social-medias/github.png" alt="github" />
            </a>
          </div>
          <div>
            <a href="https://instagram.com/denis_qb_?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
              <img :class="imgClasses" src="../assets/img/social-medias/instagram.png" alt="inst" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/denys-polovian-b311921a4/" target="_blank">
              <img
                :class="imgClasses"
                src="../assets/img/social-medias/linkedin.png"
                alt="linkedin"
            /></a>
          </div>
          <div>
            <a href="https://t.me/denisqb" target="_blank">
              <img
                :class="imgClasses"
                src="../assets/img/social-medias/telegram.png"
                alt="telegram"
              />
            </a>
          </div>
          <div>
            <a href="mailto:denispolovyan@gmail.com" target="_blank">
              <img :class="imgClasses" src="../assets/img/social-medias/email.png" alt="mail" />
            </a>
          </div>
        </div>
      </div>
      <div class="absolute top-16 right-0 z-1 text-center lg:static lg:pl-4 lg:w-3/4">
        <div class="relative">
          <img class="h-64 xs:h-48" src="../assets/img/me.png" alt="my photo" />
          <img class="spin-text absolute" src="../assets/img/rotate/text.png" alt="rotate text" />
          <img class="spin-text-1" src="../assets/img/rotate/text1.png" alt="rotate text" />
        </div>
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

/* text spin  */

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
.spin-text {
  position: absolute;
  top: 50%;
  left: 50%;
  animation: spin 10s infinite linear;
  transform-origin: left top;
}
.spin-text-1 {
  position: absolute;
  top: -24px;
  left: -24px;
  animation: spin 10s infinite linear;
  transform-origin: right bottom;
}

@media (max-width: 1023px) {
  .spin-text {
    top: 50%;
    left: 128px;
  }
  .spin-text-1 {
    top: -24px;
    left: -24px;
  }
}

@media (max-width: 450px) {
  .spin-text {
    width: 110px;
    height: 110px;
    top: 96px;
    left: 96px;
  }
  .spin-text-1 {
    width: 110px;
    height: 110px;
    top: -14px;
    left: -14px;
  }
}
</style>
