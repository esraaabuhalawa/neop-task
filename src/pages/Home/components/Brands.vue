<template>
    <section class="mb-5 pb-5">
            <Swiper :loop="true" :key="direction" :modules="[Autoplay]" :spaceBetween="0"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="breakpoints" :dir="direction">
                <!-- <SwiperSlide v-for="slide in 7" :key="slide">
                    <div class="img-container d-flex justify-content-evenly" >
                        <img src="/images/coffee.svg"  alt="brand image">
                         <img src="/images/bean.svg"  alt="brand image">
                    </div>
                </SwiperSlide> -->
                    <SwiperSlide v-for="brand in brands" :key="brand.id">
      <div class="img-container d-flex justify-content-evenly">
        <img 
          v-for="(image, index) in brand.images" 
          :key="index" 
          :src="image" 
          alt="brand image"
        >
      </div>
    </SwiperSlide>
            </Swiper>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';

defineProps({
  brands: Array
})
const breakpoints = {
    // when window width is >= 465px
    465: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
        slidesPerView: 5,
        spaceBetween: 40,
    },
}
const direction = ref(localStorage.getItem('direction') || 'ltr')

onMounted(() => {
    window.addEventListener('direction-localstorage-changed', (event) => {
        direction.value = event.detail.storage
    })
})
</script>