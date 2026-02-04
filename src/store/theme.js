import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || 'light')

  const setTheme = (value) => {
    theme.value = value
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(
    theme,
    (newTheme) => {
      const html = document.documentElement
      html.classList.toggle('dark', newTheme === 'dark')
      localStorage.setItem('theme', newTheme)
    },
    { immediate: true }
  )

  return {
    theme,
    setTheme,
    toggleTheme
  }
})