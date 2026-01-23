<template>
  <div v-if="loading" class="loader-container">
    <PreLoader />
  </div>
  <div v-else class="d-flex justify-content-between flex-column w-100 min-vh-100 position-relative">
    <div class="home-class"></div>
    <div class="bg-1">
      <Navbar></Navbar>
      <main class="main-content">
        <Hero :language="currentLanguage"  :slides="slides"/>
        <Brands :brands="brands" />
        <PopularCategories :categories="categories" :products="allProducts" :lang="currentLanguage" />
        <Featured :shop="featured"/>
      </main>
    </div>
    <FooterItem />
  </div>
</template>
<script setup>
import Navbar from "../../shared/components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Brands from "./components/Brands.vue";
import PopularCategories from "./components/PopularCategories.vue";
import FooterItem from "../../shared/components/FooterItem.vue";
import Featured from "./components/Featured.vue";

import PreLoader from "../../shared/components/PreLoader.vue";
import { ref, onMounted, watch , computed} from "vue";
import { useMainStore } from "../../store/language";
import api from '../../Services/apiclient';

const allProducts = ref([]);
const categories = ref([]);
const brands=ref([]);
const featuredData = ref({});
const loading = ref(true)
const langStore = useMainStore();
const currentLanguage = computed(() => langStore.currentLanguage);
const slidesData = ref({});

const getData = async () => {
  loading.value = true
  try {
    const res = await api.get('/data/Data.json');
    slidesData.value = res.data.slides;
    brands.value = res.data.brands;
    categories.value = res.data.categories;
    allProducts.value = res.data.products;
    featuredData.value = res.data.feature;

    console.log(featuredData.value)
    console.log(slides.value)
  } catch (err) {
    console.error('Error loading hero data', err);
  } finally {
   loading.value = false
  }
};

// Get slides based on current language
const slides = computed(() => {
  return slidesData.value[currentLanguage.value] || [];
});

const featured = computed(() => {
  return featuredData.value[currentLanguage.value] || [];
});

watch(currentLanguage, () => {
  getData()
})

onMounted(async () => {
  await getData();
});
</script>

<style lang="scss" scoped>
.home-class {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 90px;
  background-image: url("/images/bg-2.png");
  background-repeat: no-repeat;
  display: block;
  z-index: -1;

  &:lang(en) {
    left: 0;
  }

  &:lang(ar) {
    -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
            transform: scaleX(-1);
  }
}

.navbar {
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.bg-1 {
  position: relative;
}

.bg-1::before {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  width: 770px;
  height: 1300px;
  background-image: url('/images/bg-1.png');
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
}

.bg-1:lang(en):before {
  right: 0;
}

.bg-1:lang(ar):before {
  left: 0;
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}
</style>