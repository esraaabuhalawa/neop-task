<template>
    <section>
        <div class="mb-5 pb-3">
            <Swiper :loop="true" :key="direction" :modules="[Autoplay]" :centeredSlides="false" :spaceBetween="20"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :breakpoints="breakpoints" :dir="direction">
                <SwiperSlide v-for="slide in 9" :key="slide">
                    <div class="card border-0 overflow-hidden">
                        <div class="img-container">
                            <img src="../../assets/images/villa.jpg" class="img-container" alt="location png">
                        </div>
                        <div class="card-body w-100 text-center">
                            <h5 class="card-title text-capitalize">Location name</h5>
                            <p class="card-text">1,230 Properties</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


        <section class="py-4 bg-light">
            <div class="container">
                <div class="d-flex gap-3 justify-content-center flex-wrap" id="categoryFilter">
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn active">
                        <i class="bi bi-cup-hot me-2"></i>Coffee
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Espresso
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Latte
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Cappuccino
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Mocha
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Cold Brew
                    </button>
                    <button class="btn btn-outline-secondary rounded-pill px-4 category-btn">
                        <i class="bi bi-cup-hot me-2"></i>Tea
                    </button>
                </div>
            </div>
        </section>
    </section>

</template>

<script setup>

import { onMounted, ref } from 'vue';

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';

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
        slidesPerView: 4,
        spaceBetween: 40,
    },
}
const direction = ref(localStorage.getItem('direction') || 'ltr')

onMounted(() => {
    window.addEventListener('direction-localstorage-changed', (event) => {
        direction.value = event.detail.storage
    })
})

// const onSwiper = (swiper) => {
//     console.log(swiper)
// }

// const onSlideChange = () => {
//     console.log('slide change')
// }
</script>
<style lang="scss" scoped>
.category-btn {
    transition: all 0.3s ease;
}

.category-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.category-btn.active {
    background-color: var(--primary-color) !important;
    color: white !important;
    border-color: var(--primary-color) !important;
}


.img-container {
    // height: 403px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

.card {
    position: relative;
    z-index: 1;
    border-radius: 20px;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
        z-index: 2;
    }
}

.card-body {
    position: absolute;
    bottom: 10px;
    left: 0;
    text-align: center;
    z-index: 5;
}

.card-title {
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    line-height: 40px;
}

.card-text {
    color: rgba(255, 255, 255, 0.90);
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    line-height: 40px;
}
</style>