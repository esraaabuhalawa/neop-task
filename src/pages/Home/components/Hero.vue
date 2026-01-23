<template>
  <section class="hero-section d-flex justify-content-center align-items-center position-relative py-lg-5">
    <!-- <div class="container pt-5"> -->
    <Swiper :loop="true" :key="direction" :modules="[Autoplay, Navigation]" :spaceBetween="20"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" @slideChange="onSlideChange" :breakpoints="breakpoints"
      :dir="direction" navigation>
      <SwiperSlide v-for="slide , index in slides" :key="slide.id">
        <div class="container pt-5">
          <div class="row align-items-center min-vh-50">

            <!-- TEXT -->
            <div class="col-lg-6">
              <div class="col-container mb-4 mb-lg-0">
                <h1 class="mb-4 capitalize">
                  <span :class="{'first-letter': language === 'en' && index === 0 }">{{ slide.title.charAt(0) }}</span>{{ slide.title.slice(1) }}<br />
                  {{ slide.subtitle }}
                </h1>

                <p class="description mb-4 mx-4">
                  {{ slide.description }}
                </p>

                <div class="d-flex align-items-center">
                  <button class="shop-btn">
                    <span>{{ slide.discountText }}</span>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </button>

                  <router-link :to="slide.link" class="cart">
                    <!-- cart svg -->
                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- IMAGE -->
            <div class="col-lg-6">
              <div class="position-relative d-flex justify-content-end">
                <div class="hero-circle d-flex position-relative justify-content-center align-items-center">
                  <img :src="slide.image" alt="coffee" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

    <!---circle div-->
    <div class="circle">
      <img src="/images/fruit.png" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
defineProps({
  slides: {
    type: Array,
  },
    language:{
      type:String
    }
})

const breakpoints = {
  // when window width is >= 465px
  465: {
    slidesPerView: 1,
    centeredSlides: true,
  },
};
const direction = ref(localStorage.getItem("direction") || "ltr");

const activeNav = ref("next"); // 'prev' | 'next'

const onSlideChange = (swiper) => {
  activeNav.value = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
};


onMounted(async () => {
  window.addEventListener("direction-localstorage-changed", (event) => {
    direction.value = event.detail.storage;
  });
});

watch(activeNav, () => {
  document
    .querySelector(".swiper-button-next")
    ?.classList.toggle("active", activeNav.value === "next");

  document
    .querySelector(".swiper-button-prev")
    ?.classList.toggle("active", activeNav.value === "prev");
});
</script>
<style lang="scss" scoped>
.col-container {
  &:lang(en) {
    padding-left: 4.4rem;
  }

  &:lang(ar) {
    padding-right: 4.4rem;
  }
}

h1 {
  font-weight: 700;
  font-size: 6rem;
  line-height: 102%;
  letter-spacing: 8px;
  color: #004876;
}

.first-letter {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 42%;
    background-image: url("/images/heading-bean.png");
    background-repeat: no-repeat;
    display: block;
    z-index: 5;
  }
}

.first-letter:lang(en)::before {
  right: -39%;
}

/* Arabic / RTL */
.first-letter:lang(ar)::before {
  left: -39%;
}


.hero-section:lang(ar)::after {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}

.circle:lang(ar)::before {
  right: 0;
}

.circle {
  position: relative;

  &:lang(ar) {
    -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
            transform: scaleX(-1);
  }
}

.circle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 12%;
  background-image: url("/images/cup.png");
  background-repeat: no-repeat;
  display: block;
  z-index: 5;
}

.cart {
  background: #004876;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

  svg {
    color: white;
    width: 22px;
  }

  &:hover {
    background-color: #6f4336;
  }
}

.shop-btn {
  &:lang(en) {
    font-family: "Quicksand", sans-serif;
  }

  &:lang(ar) {
    font-family: "Tajawal", sans-serif;
  }

  margin: 0px 13px;
  display: inline-block;
  height: 46px;
  width: 205px;
  padding: 10px 12px;
  border: 1px solid #6f4336;
  color: #6f4336;
  border-radius: 16px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 140%;
  }

  svg {
    &:lang(ar) {
      -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
              transform: rotate(180deg);
    }
  }

  &:hover {
    background: #6f4336;

    svg,
    span {
      color: #fff;
    }
  }
}

.description {
  color: #292625;
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 21px;
}

/********Images section***********/
.hero-section {
  height: 100vh;
  overflow: hidden;
}

.hero-circle {
  width: 29rem;
  height: 29rem;
  background: -webkit-gradient(linear, left top, right top, from(#004876), color-stop(80%, #1e71a6));
  background: -o-linear-gradient(left, #004876, #1e71a6 80%);
  background: linear-gradient(to right, #004876, #1e71a6 80%);
  border-radius: 50%;
  -webkit-animation: float 3s ease-in-out infinite;
          animation: float 3s ease-in-out infinite;

  img {
    position: relative;
    right: 20px;
    bottom: 20px;
    width: 112%;
  }
}

@-webkit-keyframes float {
  0%,
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }

  50% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
  }
}

@keyframes float {
  0%,
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }

  50% {
    -webkit-transform: translateY(-20px);
            transform: translateY(-20px);
  }
}

/******Slider Button styling*****************/
/* Top/position and size of buttons */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  top: 20%;
  color: #004876;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

:deep(.swiper-button-next.active::after),
:deep(.swiper-button-prev.active::after) {
  background: #004876;
  color: #fff;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1);
}

/* Prev arrow */
:deep(.swiper-button-prev::after) {
  content: "\f061";
  /* Unicode Font Awesome arrow left */
}

/* Next arrow */
:deep(.swiper-button-next::after) {
  content: "\f060";
  /* Unicode Font Awesome arrow right */
}

/* RTL flip */
:deep(.swiper-rtl .swiper-button-next::after) {
  content: "\f061";
}

:deep(.swiper-rtl .swiper-button-prev::after) {
  content: "\f060";
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  font-size: 14px;
  padding: 8px;
  top: 20%;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #004876;
  background: #fff;
}

:deep(.swiper-button-prev) {
  left: 98%;
}

:deep(.swiper-button-next) {
  left: 95.5%;
}

/* Optional: adjust position in RTL */
:deep(.swiper-rtl .swiper-button-prev) {
  right: 98%;
}

:deep(.swiper-rtl .swiper-button-next) {
  right: 95.5%;
}

:deep(.swiper-button-disabled::after) {
  background: #004876;
  color: #fff;
  opacity: 1;
}

/*****************************/
@media (max-width: 1300px) {
 :deep(.swiper-button-prev) ,:deep(.swiper-button-next),:deep(.swiper-rtl .swiper-button-prev) ,
 :deep(.swiper-rtl .swiper-button-next) {
    display: none;
  }
}
@media (max-width: 992px) {
  .hero-circle {
    width: 300px;
    height: 300px;
  }
  .col-container,
  .hero-circle-container {
    margin-top: 50px;
    margin-bottom: 20px;
    padding-bottom: 40px;
  }

  .hero-section {
     margin-top: 50px;
    padding-top: 80px;
    padding-bottom: 120px;
  }
}
</style>