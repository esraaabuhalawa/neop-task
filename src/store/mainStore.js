// stores/main.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    language: localStorage.getItem("language") || "ar",
    direction: localStorage.getItem("direction") || "rtl",
  }),

  getters: {
    currentLanguage: state => state.language,
    currentDirection: state => state.direction,
  },

  actions: {
    setLanguage(newLanguage, i18nLocale) {
      this.language = newLanguage
      this.direction = newLanguage === 'ar' ? 'rtl' : 'ltr'
      
      // Persist to localStorage
      localStorage.setItem('language', newLanguage)
      localStorage.setItem('direction', this.direction)
      
      // Update DOM
      document.documentElement.lang = newLanguage
      document.documentElement.dir = this.direction
      document.body.dir = this.direction
      
       window.dispatchEvent(
        new CustomEvent('direction-localstorage-changed', {
          detail: {
            storage: localStorage.getItem('direction'),
          },
        })
      )

      // Update i18n if provided
      if (i18nLocale) {
        i18nLocale.value = newLanguage
      }
    },
  },
})