<template>
  <div class="d-flex justify-content-between flex-column w-100 min-vh-100 position-relative">
    <div class="home-class"></div>
    <div class="bg-1">
      <Navbar></Navbar>
      <main class="main-content">
        <Hero />
        <Brands/>
        <PopularCategories />
        <!-- <PopularLocations /> -->
        <Featured></Featured>
        <!-- <Clients /> -->
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
</script>
<style lang="scss" scoped>
  .home-class{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 90px;
    background-image: url("/images/bg-2.png");
    background-repeat: no-repeat;
    display: block;
    z-index: -1;
    &:lang(en){
      left: 0;
    }
        &:lang(ar){
        transform: scaleX(-1);
    }
  }

.navbar {
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
  transform: scaleX(-1);
}
</style>