<script setup>
import TheHeader from './components/TheHeader.vue'
import TheFrontPage from './components/TheFrontPage.vue'
</script>

<template>
  <div class="wrapper">
    <the-header />
    <the-front-page />
  </div>
</template>

<style>
html{
	height: 100%;
}
#app{
	height: 100vh;
}
.wrapper{
	height: 100vh;

}
.content-container {
  max-width: 1030px;
  margin: 0px auto;
  padding: 0px 15px;
}
</style>
