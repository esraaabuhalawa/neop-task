<template>
  <div>
    <div>
      <go-top />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import GoTop from './shared/components/GoTop.vue';
import { onMounted, ref } from 'vue';

// function updateHtmlLangAttribute() {
//   const storedLanguage = localStorage.getItem("language");
//   document
//     .querySelector("html")
//     .setAttribute("lang", storedLanguage || "ar");
// }

onMounted(() => {
 // updateHtmlLangAttribute();
  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 1000);
})
</script>

<style scoped></style>
