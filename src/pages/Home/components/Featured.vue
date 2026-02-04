<template>
  <!-- Features Section -->
  <section class="py-5 shop-section position-relative">
    <div class="container">
      <!----Shop Section start------>
      <div class="row d-flex align-items-center">
        <!-----first column------>
        <div class="col-lg-5">
          <div class="img-container">
            <img src="/images/group-1.svg" alt="" />
          </div>
        </div>

        <!----Second Column---->
        <div class="col-lg-7">
          <div class="shop-content">
            <div class="heading">
              <h2>{{ shop?.heading?.title }}</h2>
              <p>{{ shop?.heading?.subtitle }}</p>
            </div>
            <!----Row Start -->
            <div class="row g-4">
              <div v-for="feature in shop?.features" :key="feature?.id" class="col-md-6 col-lg-6">
                <div class="d-flex gap-3 align-items-center shop-col">
                  <div class="feature-icon mb-3">
                    <img :src="feature?.icon" alt="" />
                  </div>
                  <div class="shop-desc">
                    <h3 class="fw-bold mb-2">{{ feature?.title }}</h3>
                    <p>{{ feature?.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---Shop Section end--->

      <!--------Gif section------>
      <div class="d-flex justify-content-end gif-container overflow-hidden">
        <img src="/images/beans-animation.gif" class="img-fluid" alt="beans" />
      </div>
      <!---------->
    </div>
  </section>
</template>
<script setup>
defineProps({ shop: Object }, { shopHeading: Object })
</script>
<style lang="scss" scoped>
.shop-section::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
  background: url(/images/Blob.png) no-repeat;
}

.shop-section:lang(en)::after {
  right: 0;
}

.shop-section:lang(ar)::after {
  left: 0;
  -webkit-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  transform: scaleX(-1);
}

.img-container img {
  position: relative;
  z-index: -1;

  &:lang(ar) {
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
  }
}

@media screen and (max-width:992px) {
  .img-container {
    overflow: hidden;
  }
}

@media screen and (min-width:992px) and (max-width:1300px) {
  .img-container img {
    width: 625px;
  }
}

.shop-content {
  &:lang(en) {
    padding-left: 20px;
  }

  &:lang(ar) {
    padding-right: 20px;
  }
}

.heading {
  margin-bottom: 2.3125rem;

  h2,
  p {
    color: var(--color-secondary);
    line-height: 100%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 16px;
  }
}

.shop-col {
  .shop-desc {
    h3 {
      font-weight: 700;
      font-size: 1rem;
      color: var(--color-primary);
    }

    p {
      color: var(--color-secondary);
      font-weight: 400;
      font-size: 1rem;
    }
  }
}

.feature-icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 81px;
  height: 81px;
  background: #6f4336;
  border-radius: 50%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.feature-icon:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.gif-container {
  margin-top: -40px;

  img {
    max-width: 100%;
    height: 193px;
  }
}
</style>