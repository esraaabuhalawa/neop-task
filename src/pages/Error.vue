<template>
  <div class="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
    <h1 class="display-4 fw-bold ">
      {{ $t('oopsTitle') }}
    </h1>
    <p class="lead mb-4 ">
      {{ $t('oopsDescription') }}
    </p>
    <button class="btn px-4" @click="goHome">
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
<style lang="scss" scoped>
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
  background: #004876;
  color: white;
  border-radius: 20px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 20px;
  border: 0px solid #979797;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #6f4336;
  }
}
</style>
