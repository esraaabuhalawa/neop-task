<template>
    <section class="my-5 pt-3">
        <div>
            <h2 class="capitalize mb-2">{{ $t('reviews.title') }}</h2>
        </div>
        <Swiper :loop="true" :key="direction" :modules="[Autoplay]" :spaceBetween="25"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="breakpoints" :dir="direction">
            <SwiperSlide v-for="slide in reviews" :key="slide">
                <ClientCard :review="slide" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import ClientCard from '../../../shared/components/ClientCard.vue';

const props = defineProps({
    reviews:{
        type: Array
    }
})
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
<style scoped>
h2 {
    font-size: 2rem;
    color: var(--color-secondary);
}
</style>