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
              <h2 class="mb-3">Welcome to Our Shop</h2>
              <p>The coffee you want, when you want it</p>
            </div>
            <!----Row Start -->
            <div class="row g-4">
              <div class="col-md-6 col-lg-6">
                <div class="d-flex gap-3 align-items-center shop-col">
                  <div class="feature-icon mb-3">
                    <img src="/images/1.svg" alt="" />
                  </div>
                  <div class="shop-desc">
                    <h3 class="fw-bold mb-2">quality</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6">
                <div class="d-flex gap-3 align-items-center shop-col">
                  <div class="feature-icon mb-3">
                    <img src="/images/2.svg" alt="" />
                  </div>
                  <div class="shop-desc">
                    <h3 class="fw-bold mb-2">Easy</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6">
                <div class="d-flex gap-3 align-items-center shop-col">
                  <div class="feature-icon mb-3">
                    <img src="/images/3.png" alt="" />
                  </div>
                  <div class="shop-desc">
                    <h3 class="fw-bold mb-2">taste</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6">
                <div class="d-flex gap-3 align-items-center shop-col">
                  <div class="feature-icon mb-3">
                    <img src="/images/4.svg" alt="" />
                  </div>
                  <div class="shop-desc">
                    <h3 class="fw-bold mb-2">quick</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---Shop Section end--->

      <!--------Gif section------>
      <div class="d-flex justify-content-end gif-container">
        <img src="/images/beans-animation.gif" class="img-fluid" alt="beans" />
      </div>
      <!---------->
    </div>
  </section>
</template>
<style lang="scss" scoped>
.shop-section::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background: url(/images/Blob.png) no-repeat;
}

.shop-section:lang(en)::after {
    right: 0;
}
.shop-section:lang(ar)::after {
  left: 0;
   transform: scaleX(-1);
}
.img-container img{
    &:lang(ar){
        transform: scaleX(-1);
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
    color: #3b2f2f;
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
      color: #004876;
    }

    p {
      color: #3b2f2f;
      font-weight: 400;
      font-size: 1rem;
    }
  }
}

.feature-icon {
  flex-shrink: 0;
  width: 81px;
  height: 81px;
  background: #6f4336;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.feature-icon:hover {
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