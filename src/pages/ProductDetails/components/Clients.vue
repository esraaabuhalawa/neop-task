<template>
    <section>
        <div class="mb-5 pb-5">
            <Swiper :loop="true" :key="direction" :modules="[Autoplay]" :spaceBetween="20"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="breakpoints" :dir="direction">
                <SwiperSlide v-for="slide in 9" :key="slide">
                    <ClientCard />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import ClientCard from '../../../shared/components/ClientCard.vue';

const breakpoints = {
    // when window width is >= 465px
    465: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
        slidesPerView: 2,
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