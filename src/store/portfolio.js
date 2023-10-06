import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', () => {
  const nightTheme = ref(false)
//   const doubleCount = computed(() => count.value * 2)
  function changeTheme() {
	nightTheme.value = !nightTheme.value
  }

  return { nightTheme, changeTheme }
})