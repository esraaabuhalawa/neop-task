<template>
  <div class="rating-component">
    <star-rating
      :rating="localRating"
      :read-only="true"
      :increment="0.01"
      :star-size="20"
      :rtl="isRTL"
      :show-rating="false"
      active-color="#F6C144"
      inactive-color="#D1D5DB"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import StarRating from 'vue-star-rating'
import { useMainStore } from '../../store/language';

// Props - capture the return value
const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
});

// Store
const store = useMainStore();

// Reactive local rating - use ref()
const localRating = ref(props.rating);

// Watch for prop changes
watch(() => props.rating, (newVal) => {
  localRating.value = newVal;
});

// RTL computed based on current language
const isRTL = computed(() => store.currentLanguage === 'ar');
</script>

<style>
.vue-star-rating-star {
  overflow: hidden !important;
}

.rating-container {
  overflow: hidden !important;
  max-width: 400px !important;
  direction: rtl;
  display: flex;
}
</style>