import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    language: localStorage.getItem("language") || "ar",
    direction: localStorage.getItem("direction") || "rtl",

    loading: false,
    error: false,
  }),

  getters: {
    currentLanguage: state => state.language,
    currentDirection: state => state.direction,
  },

  actions: {
    updateLanguage(newLanguage) {
      this.language = newLanguage;
      localStorage.setItem('language', newLanguage);
    },
    updateDirection(newDirection) {
      this.direction = newDirection;
      localStorage.setItem('direction', newDirection);
    },
  },
})
