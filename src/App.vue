<template>
  <div>
    <div v-show="isLoading" class="loader-container">
      <PreLoader />
    </div>
    <div v-show="!isLoading">
      <go-top />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import PreLoader from "./shared/components/PreLoader.vue";
import GoTop from './shared/components/GoTop.vue';
import { onMounted, ref } from 'vue';

const isLoading = ref(true);


function updateHtmlLangAttribute() {
  const storedLanguage = localStorage.getItem("language");
  document
    .querySelector("html")
    .setAttribute("lang", storedLanguage || "ar");
}

onMounted(async () => {
  updateHtmlLangAttribute();
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
})
</script>

<style scoped></style>
