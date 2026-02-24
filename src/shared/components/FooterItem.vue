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
          <section
            class="d-flex flex-wrap gap-3 align-items-center justify-content-between border-top pt-4 pb-5 copyright">
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
    transform: scaleX(-1);
    left: 0;
  }
}

footer {
  margin-top: 6rem;
  padding-top: 57px;
  padding-bottom: 20px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #1e71a6 100%);
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.95);
  position: relative;
  // overflow: hidden;

  a {
    color: rgba(255, 255, 255, 0.72);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.8);
      transition: width 0.3s ease;
    }

    &:hover {
      color: #ffffff;

      &::after {
        width: 100%;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    margin-bottom: 10px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateX(4px);
    }

    a:not(.nav-link) {
      text-decoration: none;
      display: inline-block;
      margin-bottom: 3px;
      position: relative;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.72);
      transition: all 0.3s ease;

      &:hover {
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}

h6,
p {
  &:lang(ar) {
    font-family: var(--font-rtl);
  }

  &:lang(en) {
    font-family: "Cormorant Infant", serif;
  }
}

p {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  margin-bottom: 12px;
  transition: color 0.3s ease;
}

h6 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.follow-us {
  display: flex;
  gap: 12px;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding-top: 3px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background: transparent;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;

    i {
      font-size: 16px;
      color: #ffffff;
      transition: all 0.3s ease;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #ffffff;
      border-radius: 50%;
      transform: scale(0.8);
      opacity: 0;
      transition: all 0.4s ease;
    }

    &:hover {
      background: #ffffff;
      transform: scale(1.15);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

      i {
        color: var(--color-primary);
        transform: scale(1.1);
      }

      &::before {
        transform: scale(1.2);
        opacity: 0;
      }
    }

    cursor: pointer;
  }
}

.copyright {
  border-color: rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  padding-bottom: 10px;

  p {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

/* Dark mode specific enhancements */
html.dark footer {
  background: linear-gradient(135deg, #1a3a52 0%, #0a2540 100%);
  border-top: 1px solid rgba(77, 163, 217, 0.2);

  a {
    color: rgba(125, 184, 232, 0.8);

    &::after {
      background-color: rgba(125, 184, 232, 0.6);
    }

    &:hover {
      color: #7db8e8;

      &::after {
        width: 100%;
      }
    }
  }

  h6 {
    color: #e0f2fe;
  }

  p {
    color: rgba(207, 217, 233, 0.8);
  }

  .follow-us a {
    border-color: rgba(125, 184, 232, 0.5);

    i {
      color: #7db8e8;
    }

    &:hover {
      background: rgba(77, 163, 217, 0.2);
      border-color: #7db8e8;
      box-shadow: 0 8px 16px rgba(77, 163, 217, 0.25);

      i {
        color: #7db8e8;
      }
    }
  }

  .copyright {
    border-color: rgba(77, 163, 217, 0.2);
  }
}

@media screen and (max-width: 1220px) {
  .footer-img {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  footer {
    padding-top: 40px;
    margin-top: 4rem;
  }

  h6 {
    font-size: 16px;
    margin-bottom: 12px;
  }

  p {
    font-size: 13px;
  }

  .follow-us {
    justify-content: center;
  }

  ul li {
    margin-bottom: 8px;
  }
}
</style>