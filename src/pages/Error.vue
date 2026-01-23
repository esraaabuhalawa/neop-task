<template>
  <div class="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
    <h1 class="display-4 fw-bold ">
      {{ $t('oopsTitle') }}
    </h1>
    <p class="lead mb-4 ">
      {{ $t('oopsDescription') }}
    </p>
    <button class="btn btn-primary  px-4 main-button" @click="goHome">
      {{ $t('backToHome') }}
    </button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
<style scoped>
h1 {
  font-size: 50px;
  font-weight: 500;
  line-height: 96px;
}

p {
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
}

button {
  border-radius: 40px;
  width: fit-content;
  padding: 20px;
  border: 0px solid #979797;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
