<template>
  <AppLayout :loading="loading" :SpecialStyle="false">
    <Hero :language="currentLanguage" :slides="slides" />
    <Brands :brands="brands" />
    <PopularCategories :categories="Categories" :products="Products" :lang="currentLanguage" />
    <Featured :shop="featured" />
  </AppLayout>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import Brands from "./components/Brands.vue";
import PopularCategories from "./components/PopularCategories.vue";
import Featured from "./components/Featured.vue";

import { ref, onMounted, computed } from "vue";
import { useMainStore } from "../../store/mainStore";
import api from '../../Services/apiclient';
import AppLayout from "../../Layouts/AppLayout.vue";

const allProducts = ref([]);
const allCategories = ref([]);
const brands = ref([]);
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
    allCategories.value = res.data.categories;
    allProducts.value = res.data.products;
    featuredData.value = res.data.feature;
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

const Products = computed(() => {
  return allProducts.value[currentLanguage.value] || [];
});

const Categories = computed(() => {
  return allCategories.value[currentLanguage.value] || [];
});

// watch(currentLanguage, () => {
//   getData()
// })

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