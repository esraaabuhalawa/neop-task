<template>
  <div class="d-flex flex-column min-vh-100">

    <!-- Loader -->
    <div v-if="loading" class="loader-container">
      <PreLoader />
    </div>

    <!-- Content -->
    <template v-else>
      <Navbar :SpecialStyle="specialStyle" />

      <main class="flex-fill">
        <slot />
      </main>

      <FooterItem />
    </template>

  </div>
</template>

<script setup>
import Navbar from "../shared/components/Navbar.vue"
import FooterItem from "../shared/components/FooterItem.vue"
import PreLoader from "../shared/components/PreLoader.vue"

defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  specialStyle: {
    type: Boolean,
    default: true
  }
})
</script>
