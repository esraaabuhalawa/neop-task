<template>
  <!-- Footer -->
  <footer class="position-relative">
    <!-- Section: Links  -->
    <div class="container mt-5">
      <!-- Grid row -->
      <div class="row d-flex justify-content-center alifn-items-center mt-3">
        <!-- Grid column -->
        <div class="col-md-6 col-lg-2  mb-4">
          <!-- Links -->
          <h6 class="mb-4 text-uppercase">Menu</h6>
          <ul>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.about') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('menu.blogs') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.reviews') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.contact') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.community') }}</router-link>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6 col-lg-2 mb-4">
          <!-- Links -->
          <h6 class="mb-4 text-uppercase"> Cafe Location </h6>
          <ul>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.community') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.community') }}</router-link>
            </li>
            <li>
              <router-link to="/" class="text-capitalize">{{ $t('nav.community') }}</router-link>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-3 mb-4">
          <!-- Links -->
          <h6 class="mb-4 text-uppercase">{{ $t('nav.contact') }}</h6>
          <p>
            Do you have a <br /> question? Send it to<br />us!
          </p>
          <p>000000000</p>
        </div>
      </div>
      <!-- Grid row -->
      <!----->
      <div class="row d-flex justify-content-center">
        <div class="col-lg-7">
          <section class="d-flex flex-wrap gap-3 align-items-center justify-content-between border-top pt-4 pb-5 copyright">
            <!--Social Links-->
            <div class="follow-us">
              <div class="mt-2 d-flex gap-3">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <!------>
            <!-- Left -->
            <div>
              <router-link to="/" class="letter-2">{{ $t('privacy_policy') }}</router-link>
            </div>
            <!-- Left -->
          </section>
        </div>
      </div>
      <!----------------->
    </div>
    <!-- -->
    <div class="footer-img">
      <img src="/images/footer.svg" alt="footer img">
    </div>
  </footer>
  <!-- Footer -->
</template>

<style lang="scss" scoped>

.first-col {
  gap: 23px;
}

.letter-2 {
  letter-spacing: 2.42px;
}

.footer-img {
  position: absolute;
  bottom: 0px;

  &:lang(en) {
    right: 0;
  }

  &:lang(ar) {
    -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
            transform: scaleX(-1);
    left: 0;
  }
}

footer {
  margin-top: 6rem;
  padding-top: 57px;
  background: -webkit-gradient(linear, left top, left bottom, from((45deg)), color-stop(50%, #004876), to(#1e71a6));
  background: -o-linear-gradient((45deg), #004876 50%, #1e71a6);
  background: linear-gradient((45deg), #004876 50%, #1e71a6);

  a {
    color: rgba(255, 255, 255, 58.4%);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 8px;

    a:not(.nav-link) {
      text-decoration: none;
      display: inline-block;
      margin-bottom: 3px;
      position: relative;
      line-height: 1.2;
      color: rgba(255, 255, 255, 58.4%);

      &:hover {
        color: #fff;
        cursor: pointer;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}

h6,
p {
  &:lang(ar) {
    font-family: 'Tajawal', sans-serif;
  }

  &:lang(en) {
    font-family: "Cormorant Infant", serif;
  }
}

p {
  color: rgba(255, 255, 255, 58.4%);
}

h6 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.follow-us {
  a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 32px;
    height: 32px;
    padding-top: 3px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: transparent;

    i {
      font-size: 14px;
      color: #fff;
    }

    &:hover {
      background: #004876;
    }

    cursor: pointer;
    -webkit-transition: .4s ease-in-out;
    -o-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
  }

  a:hover {
    background: #fff;

    i {
      color: #004876
    }
  }
}

@media screen and (max-width: 1220px) {
  .footer-img {
    display: none;
  }
}
</style>