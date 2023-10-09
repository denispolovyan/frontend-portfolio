import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.directive('scroll-to', VueScrollTo)

app.mount('#app')
