<template>
    <div class="loader-container d-flex justify-content-center align-items-center w-100" :class="{'min-vh-100':applyHeight}" >
        <span class="loader" :class="{'specialcase':!applyHeight}"></span>
    </div>
</template>

<script setup>
defineProps({
    applyHeight: {
        type: Boolean,
        default: true
    }
})
</script>
<style scoped>
.loader {
  width: 100px;
  height: 100px;
  border: 10px solid;
  border-color: #FF3D00 transparent;
  border-radius: 50%;
  display: inline-block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-animation: rotation 1s linear infinite;
          animation: rotation 1s linear infinite;
}
.loader.specialcase{
    width: 30px;
    height: 30px;
    border: 5px solid;
    border-color: #fff transparent;
}
@-webkit-keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
} 
</style>