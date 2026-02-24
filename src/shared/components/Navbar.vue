<template>
  <div>
    <nav class="navbar navbar-expand-lg" id="navbar" ref="navbar" :class="{ 'scrolled': isScrolled || SpecialStyle }">
      <div class="container d-flex justify-content-between align-items-center gap-2 flex-nowrap">
        <div class="d-flex justify-content-between  align-items-center gap-md-5  small-nav">
          <router-link to="/" class="navbar-brand mx-2 mx-lg-0">
            <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.2135 18.9673C40.21 19.0096 40.21 19.0521 40.2135 19.0944C40.1774 19.52 40.0908 19.9399 39.9556 20.3457C39.4776 21.9306 38.4894 23.3192 37.1401 24.3016C35.7908 25.284 34.1538 25.807 32.4764 25.7915H32.149L32.0696 25.9186C31.6907 26.7018 31.2599 27.4594 30.7801 28.1868C30.3554 28.8234 29.867 29.4163 29.322 29.9565C28.3967 30.8978 27.3454 31.7102 26.1973 32.3714C25.0633 33.0195 23.8499 33.5222 22.5866 33.8673C21.6099 34.1185 20.615 34.295 19.6108 34.3952C18.6516 34.4879 17.6873 34.5174 16.7242 34.4832C16.1227 34.4666 15.5229 34.4111 14.9288 34.317C14.0927 34.2007 13.2669 34.0208 12.4589 33.7792C10.8289 33.3081 9.28765 32.5783 7.89587 31.6185C6.63742 30.7348 5.52346 29.6665 4.59266 28.4508C3.61548 27.1615 2.82742 25.743 2.25168 24.237C1.7713 22.9847 1.39314 21.6965 1.12085 20.3849C1.02165 19.9156 0.942336 19.4072 0.853061 18.9575C0.853061 18.8206 0.783588 18.6935 0.75383 18.5566C0.664554 18.0286 0.575279 17.5007 0.505843 16.9727C0.406648 16.2883 0.327343 15.5942 0.247987 14.9C0.247987 14.4992 0.178514 14.0983 0.148756 13.6975C0.089239 13.0326 0.0694242 12.3678 0.0495853 11.7421C0.0297463 11.1164 0.0495853 10.4906 0.0495853 9.87467C0.0495853 9.7769 0.0495853 9.67909 0.0495853 9.5911C0.0310785 9.55952 0.0145282 9.5269 0 9.49336V8.67213C0.0421244 8.60419 0.065966 8.52683 0.0693831 8.44728C0.0644985 8.37566 0.0644985 8.30371 0.0693831 8.23209C0.0929249 7.95089 0.199371 7.68262 0.375613 7.46028C0.551855 7.23793 0.790202 7.07129 1.06133 6.98074C1.25585 6.91419 1.46057 6.88114 1.66647 6.88299H11.7645C11.8499 6.89721 11.937 6.89721 12.0224 6.88299C12.0224 6.81455 12.0224 6.73625 12.0224 6.66781C12.0873 6.10562 12.224 5.55382 12.4291 5.02535C12.7842 4.05527 13.3371 3.16706 14.0536 2.41547C14.7701 1.66388 15.635 1.06471 16.5953 0.654978C17.423 0.294606 18.3104 0.0859974 19.214 0.0391459H19.4322H19.958H20.1266H20.6325C21.6199 0.150636 22.5745 0.456437 23.4397 0.938547C25.1314 1.85507 26.4103 3.36691 27.0207 5.17203L27.1099 5.41645C27.2091 5.41645 27.2488 5.29907 27.3083 5.23063L30.9091 1.1048C31.4363 0.489679 32.1808 0.0948025 32.9921 0C33.0416 0.00442634 33.0915 0.00442634 33.141 0H33.6667H33.746C34.3597 0.103567 34.9464 0.326149 35.472 0.654978L35.6208 0.762629L35.472 0.948333L32.2581 4.72221L25.7311 12.3873C25.5625 12.5828 25.3938 12.7784 25.2153 12.9544C24.299 13.8723 23.162 14.5469 21.9102 14.9154C20.6584 15.2839 19.3323 15.3344 18.0554 15.0622C16.7785 14.79 15.5921 14.2039 14.6067 13.3584C13.6213 12.513 12.8687 11.4357 12.4191 10.2266C12.4191 10.168 12.4192 10.1094 12.3398 10.0409H3.938C3.75548 10.0529 3.57704 10.0994 3.4123 10.1778C3.32119 10.2155 3.24388 10.2796 3.19071 10.3617C3.13755 10.4438 3.111 10.54 3.11467 10.6373C3.11467 11.7519 3.11467 12.8567 3.17418 13.9615C3.17418 14.7632 3.28331 15.5649 3.37259 16.3666C3.51414 17.5575 3.72613 18.7392 4.00745 19.9058C4.3942 21.5816 4.99761 23.2015 5.80287 24.7259C6.45577 25.959 7.29158 27.0892 8.28274 28.0793C9.66618 29.444 11.3697 30.4515 13.2425 31.0124C14.0844 31.2712 14.9526 31.4384 15.8314 31.511C16.377 31.511 16.9325 31.5697 17.4781 31.5697C18.1409 31.5798 18.8036 31.5471 19.462 31.4719C20.4498 31.3584 21.4214 31.1354 22.3585 30.8071C23.6221 30.3587 24.7969 29.6971 25.8303 28.8517C27.0595 27.8036 28.0905 26.549 28.8756 25.1462L28.9252 25.0387L28.7367 24.9214C27.0021 23.9891 25.6932 22.4402 25.0764 20.5901C25.0632 20.5246 25.0324 20.4639 24.9872 20.4142C24.888 20.512 24.8086 20.6195 24.7193 20.7172C23.5488 22.0567 22.3783 23.4059 21.1979 24.7453C20.7448 25.2771 20.1225 25.6424 19.4322 25.7817C19.0489 25.8548 18.655 25.8548 18.2717 25.7817C17.6673 25.6565 17.092 25.4211 16.5754 25.0876L16.506 25.0191C16.5754 24.9507 16.625 24.8823 16.6845 24.8138L19.829 21.1181C21.2971 19.4072 22.8049 17.6864 24.2234 15.9657C25.007 15.0466 25.7807 14.1179 26.5743 13.2086C27.8678 11.7114 29.7055 10.7741 31.6927 10.5982C32.5257 10.5133 33.3672 10.5662 34.1825 10.7546C35.4472 11.046 36.6172 11.6466 37.5846 12.5009C38.5519 13.3552 39.2854 14.4358 39.7176 15.6431C39.9256 16.1729 40.0559 16.7292 40.1044 17.2953C40.0999 17.3343 40.0999 17.3737 40.1044 17.4126L40.2135 18.9673ZM36.8112 18.1655C36.8112 17.3258 36.5584 16.5051 36.0849 15.8071C35.6115 15.1091 34.9385 14.5652 34.1513 14.2443C33.3641 13.9235 32.498 13.84 31.6626 14.0046C30.8272 14.1691 30.0601 14.5742 29.4584 15.1686C28.8568 15.763 28.4476 16.5199 28.2826 17.3437C28.1176 18.1674 28.2042 19.021 28.5316 19.7961C28.8589 20.5713 29.4123 21.2333 30.1216 21.6984C30.8308 22.1635 31.6641 22.4106 32.516 22.4086C33.0809 22.4086 33.6403 22.2989 34.162 22.0856C34.6838 21.8722 35.1577 21.5594 35.5566 21.1653C35.9556 20.7711 36.2718 20.3034 36.4871 19.7886C36.7023 19.2739 36.8125 18.7222 36.8112 18.1655ZM24.0349 7.53797C24.0349 6.69875 23.7824 5.87841 23.3093 5.18062C22.8363 4.48284 22.164 3.93893 21.3773 3.61777C20.5907 3.29662 19.725 3.21261 18.8899 3.37633C18.0548 3.54006 17.2877 3.94416 16.6857 4.53758C16.0836 5.131 15.6736 5.88708 15.5075 6.71018C15.3414 7.53328 15.4266 8.38647 15.7524 9.16181C16.0783 9.93715 16.6301 10.5999 17.3381 11.0661C18.046 11.5324 18.8783 11.7811 19.7298 11.7811C20.2955 11.7824 20.8559 11.6736 21.3788 11.4608C21.9017 11.248 22.3768 10.9355 22.7768 10.5412C23.1769 10.147 23.4939 9.67875 23.7098 9.16336C23.9257 8.64797 24.0362 8.09556 24.0349 7.53797Z"
                fill="#004876" />
            </svg>
          </router-link>
        </div>
        <!-------start of Language side----------->
        <div>
          <div class="gap-2 d-flex align-items-center">
            <div class="relative" ref="cartContainer">
              <!-- Cart Icon -->
              <span class="cart position-relative " @click="toggleCart">
                <svg class="w-6 h-6 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                    d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                </svg>

                <!-- Cart count badge -->
                <span class="cart-badge">{{ cartItems.length }}</span>
              </span>

              <!-- Dropdown menu -->
              <transition name="fade">
                <div v-if="openCart" class="cart-dropdown">
                  <div class="cart-header">Your Cart</div>
                  <ul class="cart-items">
                    <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
                      <span class="item-name">{{ item.product.name }}</span>
                      <span class="item-price">${{ item.product.price }}</span>
                      <span> qty :{{ item.quantity }}</span>
                    </li>
                    <li v-if="cartItems.length === 0" class="cart-empty">Your cart is empty</li>
                  </ul>
                  <div class="cart-footer">
                    <router-link to="/cart" class="cart-button">Go to Cart</router-link>
                    <span class="cart-total">Total: ${{ totalPrice }}</span>
                  </div>
                </div>

              </transition>
            </div>
            <!--Theme Switcher-->
            <button class="theme-btn" @click="themeStore.toggleTheme()">
              {{ themeStore.theme === 'light' ? '🌙' : '☀️' }}
            </button>
            <!--Language Switcher-->
            <div class="languagebtn" @click="toggleLanguage">
              <img v-if="$i18n.locale === 'ar'" class="img-fluid object-cover" src="https://flagcdn.com/w320/us.png"
                alt="US Flag" />
              <img v-else-if="$i18n.locale === 'en'" class="img-fluid" src="https://flagcdn.com/w320/sa.png"
                alt="eg Flag" />
            </div>
            <!--Open sidebar-->
            <span class="toggle-btn" @click="openMenu">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </span>
          </div>

        </div>
        <!--------End of Sign up part------------------>
      </div>
    </nav>
    <!-- Offcanvas Menu -->
    <button class="close-btn" @click="closeMenu" v-if="!hideButton">&times;</button>
    <div class="offcanvas-1" :class="{ active: isOpen }">
      <div class="offcanvas-header">
        <!--Login and sign up in small screens-->
        <ul class="d-flex flex-wrap gap-3 auth-sm list-unstyled">
          <li class="nav-item-1">
            <router-link :to="{ name: 'Home' }" class="nav-link-2 sign-in-sm">
              <span class="d-inline-block"> {{ $t('login') }}</span>
            </router-link>
          </li>
          <li class="nav-item-1">
            <router-link :to="{ name: 'Home' }" class="nav-link-2 sign-in-sm">
              <span class="d-inline-block">{{ $t('signup') }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-column align-items-between">
        <ul class="offcanvas-menu list-unstyled">
          <li>
            <router-link to="/" exact class="nav-link-1" aria-current="page" href="#">{{ $t('nav.home') }}</router-link>
          </li>

          <li>
            <router-link to="/courses" :class="{ active: $route.path.startsWith('/courses') }" class="nav-link-1"
              aria-current="page" href="#">{{ $t('nav.courses') }}</router-link>
          </li>

          <li>
            <router-link to="/resourses" :class="{ active: $route.path.startsWith('/resourses') }" class="nav-link-1"
              aria-current="page" href="#">{{ $t('nav.resources') }}</router-link>
          </li>

          <li>
            <router-link to="/blogs" :class="{ active: $route.path.startsWith('/blogs') }" exact class="nav-link-1"
              aria-current="page" href="#">{{ $t('nav.blogs') }}</router-link>
          </li>

          <li>
            <router-link to="/about" exact class="nav-link-1" aria-current="page" href="#">{{ $t('nav.about')
            }}</router-link>
          </li>
        </ul>

        <ul class="call-info list-unstyled">
          <li>
            <h4 class="text-capitalize-en">{{ $t('nav.contact') }}</h4>
            <p>+258747645345</p>
          </li>
          <li class="text-capitalize-en"> cairo - Egypt </li>
          <li> test@gmail.com </li>
          <li class="d-flex gap-2 mt-3 mb-3">
            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Overlay -->
    <div class="overlay-1" :class="{ active: isOpen }" @click="closeMenu"></div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '../../store/mainStore';
import { useProductStore } from '../../store/products';
import { useThemeStore } from '../../store/theme'

defineProps({
  SpecialStyle: {
    type: Boolean,
    default: false
  }
})
const store = useMainStore();
const themeStore = useThemeStore()
const { locale } = useI18n();
const isMobile = ref(window.innerWidth < 992);
const cartContainer = ref(null);

const handleResize = () => {
  isMobile.value = window.innerWidth < 992;
};

const toggleLanguage = () => {
  const newLang = locale.value === 'en' ? 'ar' : 'en'
  store.setLanguage(newLang, locale)
}

const productStore = useProductStore();
const cartItems = computed(() => productStore.cartItems);
const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + (item.quantity * item.product.price), 0))

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

let openCart = ref(false)
const toggleCart = () => {
  openCart.value = !openCart.value;
}

const isScrolled = ref(false);

const onScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}


const isOpen = ref(false)
const hideButton = ref(true)
const openMenu = () => {
  isOpen.value = true;
  hideButton.value = false
}

const closeMenu = () => {
  isOpen.value = false;
  hideButton.value = true
}

const handleClickOutside = (event) => {
  if (cartContainer.value && !cartContainer.value.contains(event.target)) {
    openCart.value = false;
  }
}


onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleClickOutside)
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', onScroll);
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  padding: 23px 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  -webkit-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.navbar.scrolled {
  background: var(--color-primary);
  padding: 13px 0;
  -webkit-box-shadow: -8px 6px 13px 4px #65656554;
  box-shadow: -8px 6px 13px 4px #65656554;

  .navbar-brand {
    svg path {
      fill: var(--bg-color);
    }
  }

  .theme-btn {
    border-radius: 50%;
    background: #000;
    border: none;
    width: 30px;
    height: 30px;
    color: #fff;
  }

  .toggle-btn {
    color: var(--bg-color);
  }

  .cart {
    background: var(--bg-color);

    svg {
      color: var(--color-primary);
    }
  }
}

.languagebtn {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  border-color: transparent;

  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

/* offcanvas Overlay */
.overlay-1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.4s ease;
  -o-transition: opacity 0.4s ease;
  transition: opacity 0.4s ease;
  z-index: 9999;
}

.overlay-1.active {
  opacity: 1;
  visibility: visible;
}

/* Offcanvas Menu */
.offcanvas-1 {
  position: fixed;
  top: 0;
  width: 400px;
  height: 100%;
  background-color: var(--card-bg);
  box-shadow: 2px 0 12px var(--shadow-color);
  transition: left 0.4s ease;
  z-index: 999999;
  padding: 20px;
}

[dir=rtl] {
  .offcanvas-1 {
    left: -400px;
  }

  .offcanvas-1.active {
    left: 0;
  }
}

[dir=ltr] {
  .offcanvas-1 {
    right: -400px;
  }

  .offcanvas-1.active {
    right: 0;
  }
}

.offcanvas-header {
  ul {
    margin-bottom: 8px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--card-bg);
  transition: all 0.3s ease;
}

.offcanvas-menu {
  margin-top: 20px;
  flex: 1;
  overflow-y: auto;
  max-height: 53vh;
  padding-bottom: 50px;

  li {
    margin-bottom: 12px;
    border: none;

    a.nav-link-1 {
      display: block;
      padding: 10px 10px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 5px;
      color: var(--text-color);
      text-decoration: none;
      transition: all 0.3s ease;

      &.router-link-exact-active,
      &.active {
        font-weight: 600;
        background: var(--color-primary);
        color: #ffffff;
      }

      &:hover {
        background: var(--color-primary);
        color: #ffffff;
      }
    }

  }
}

a.nav-link-2 {
  display: block;
  padding: 10px 10px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  color: var(--color-primary);
  text-decoration: none;
  -webkit-transition: .3s ease-in-out;
  -o-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}

.nav-link,
.nav-link-1,
.nav-link-2 {
  font-family: var(--font-rtl);
}

[dir=ltr] {

  .nav-link,
  .nav-link-1,
  .nav-link-2 {
    font-family: var(--font-ltr);
  }
}

.toggle-btn {
  margin: 0;
  color: #000;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.close-btn {
  position: fixed;
  top: 14px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--bg-color);
  border: none;
  font-size: 45px;
  cursor: pointer;
  z-index: 20000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding-bottom: 8px;
}

.call-info {
  width: 100%;
  position: sticky;
  bottom: 0;
  right: 0;
  background: var(--card-bg);
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  transition: all 0.3s ease;

  li,
  a {
    font-size: 16px;
    transition: color 0.3s ease;
  }

  li {
    color: var(--text-color);
    margin-bottom: 8px;

    h4 {
      color: var(--text-color);
      margin-bottom: 8px;
      font-weight: 600;
    }

    p {
      color: var(--text-secondary);
      margin: 0;
    }
  }

  a {
    color: var(--color-primary);

    i {
      font-size: 30px;
    }
  }
}

[dir=rtl] {
  .close-btn {
    right: 15px;
  }
}

[dir=ltr] {
  .close-btn {
    left: 15px;
  }

  .call-info {

    li,
    a {
      text-transform: capitalize;
    }
  }
}

///Cart Styling
.cart-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: #ffffff;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 700;
  box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
  }

  50% {
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5);
  }
}

.cart-dropdown {
  position: absolute;
  right: 0;
  margin-top: 0.75rem;
  width: 20rem;
  background-color: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px var(--shadow-color),
    0 10px 10px -5px var(--shadow-color);
  z-index: 50;
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-header {
  padding: 1.25rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.cart-items {
  max-height: 18rem;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: var(--card-bg);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 3px;

    &:hover {
      background: var(--text-secondary);
    }
  }
}

.cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border-light);
  transition: all 0.3s ease;
  flex-wrap: wrap;
  background-color: var(--card-bg);

  .item-name {
    font-weight: 600;
    color: var(--text-color);
    font-size: 0.9rem;
    flex: 1;
    min-width: 120px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .item-price {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 0.95rem;
    white-space: nowrap;
  }

  span {
    color: var(--text-secondary);
    font-size: 0.8rem;
    white-space: nowrap;

    &:last-child {
      color: var(--color-primary);
      font-weight: 600;
      background: rgba(77, 163, 217, 0.1);
      padding: 0.35rem 0.65rem;
      border-radius: 0.4rem;
      display: inline-block;
      width: fit-content;
      font-size: 0.75rem;
    }
  }

  &:hover {
    background-color: var(--bg-secondary);
    transform: translateX(4px);
  }

  &:last-child {
    border-bottom: none;
  }
}

.cart-empty {
  text-align: center;
  padding: 2rem 1rem;
  color: var(--text-tertiary);
  font-size: 0.95rem;
  font-weight: 500;
}

.cart-footer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  border-top: 2px solid var(--border-color);
  background: var(--bg-secondary);
}

.cart-button {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
    box-shadow: 0 10px 15px -3px rgba(77, 163, 217, 0.3);
    transform: translateY(-2px);
  }
}

.cart-total {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-primary);
  text-align: center;
  background: rgba(77, 163, 217, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.cart {
  background: linear-gradient(135deg, var(--color-primary) 0%, #0a5a8a 100%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 72, 118, 0.2);
  transition: all 0.3s ease;
  position: relative;

  svg {
    color: var(--bg-color);
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #0a5a8a 0%, var(--color-primary) 100%);
    box-shadow: 0 8px 20px rgba(0, 72, 118, 0.3);
    transform: scale(1.1) translateY(-2px);

    svg {
      transform: scale(1.15);
    }
  }

  &:active {
    transform: scale(0.95);
  }
}

.toggle-btn {
  &:hover {
    background-color: var(--color-hover);
    color: var(--bg-color);
  }
}

.cart,
.toggle-btn,
.languagebtn {
  -webkit-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

  &:hover {
    cursor: pointer;
    -webkit-transform: translateY(2px);
    -ms-transform: translateY(2px);
    transform: translateY(2px);
  }
}

/** End of Offcanavs menu*****/
.navbar-nav {
  gap: 25px;
}

.nav-link {
  font-size: 18px;
  font-weight: 400;
}

/***media queries */
@media screen and (max-width: 560px) {
  .dropdown-menu {
    width: 180px;
    top: 114%;
  }

  .offcanvas-1 {
    width: 250px;
  }
}

@media screen and (max-width: 992px) {
  .small-nav {
    width: 100%;
  }

  .navbar {
    padding: 0;
    padding-top: 10px;
  }
}

@media screen and (min-width:992.6px) and (max-width: 1200px) {
  .nav-link {
    font-size: 16px;
  }

  .navbar-nav {
    gap: 8px;
  }
}

@media screen and (min-width:1600px) {
  .navbar-nav {
    gap: 35px;
  }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>