import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', () => {
  const nightTheme = ref(false)
  const getNightTheme = computed(() => nightTheme)
  function changeTheme() {
	nightTheme.value = !nightTheme.value
  }

  return { nightTheme, changeTheme, getNightTheme }
})