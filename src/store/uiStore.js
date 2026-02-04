// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const useUIStore = defineStore('ui', () => {
//   const loading = ref(true)

//   const start = () => loading.value = true
//   const stop = () => loading.value = false

//   return { loading, start, stop }
// })
// stores/ui.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const loading = ref(false)

  // Instead of start/stop, we’ll expose a setter for interceptors
  const setLoading = (value) => {
    loading.value = value
  }

  return { loading, setLoading }
})
