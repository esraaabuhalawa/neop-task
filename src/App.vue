<template>
  <div>
      <go-top />
      <router-view />
  </div>
</template>

<script setup>
import goTop from './shared/components/Layout/GoTop.vue';
import { onMounted,} from 'vue';

onMounted(() => {
 
})
</script>

<style scoped></style>
