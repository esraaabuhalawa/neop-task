<template>
  <div
    class="rating-component"
    :dir="isRTL ? 'rtl' : 'ltr'"
  >
    <span
      v-for="star in 5"
      :key="star"
      class="star"
      :class="{ filled: star <= localRating }"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useMainStore } from '../../store/language'

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

// Store
const store = useMainStore()

// Local reactive rating
const localRating = ref(props.rating)

// RTL reactive
const isRTL = ref(true)
const currentLanguage = computed(() => store.currentLanguage)

watch(
  currentLanguage,
  (newLang) => {
    isRTL.value = newLang === 'ar'
  },
  { immediate: true }
)

// Watch for prop changes
watch(
  () => props.rating,
  (newVal) => {
    localRating.value = newVal
  }
)
</script>

<style scoped>
.rating-component {
  display: inline-flex;
  gap: 4px;
  font-size: 20px;
  user-select: none;
}

.star {
  color: #D1D5DB; /* inactive */
}

.star.filled {
  color: #F6C144; /* active */
}
</style>
