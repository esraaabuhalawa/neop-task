import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'swiper/css'
import './assets/style/fonts.css'
import './style.css'


import { createPinia } from 'pinia'

import EN from "./locale/en.json";
import AR from "./locale/ar.json";
import { createI18n } from "vue-i18n";

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

// 1. Get initial values from localStorage directly
const storedLanguage = localStorage.getItem("language") || "ar"
const storedDirection = localStorage.getItem("direction") || "rtl"

// 2. Apply to DOM immediately
document.documentElement.lang = storedLanguage
document.documentElement.dir = storedDirection
document.body.dir = storedDirection

// 3. Create i18n instance
const i18n = createI18n({
  locale: storedLanguage,
  fallbackLocale: 'en',
  legacy: false, // Use Composition API mode
  globalInjection: true,
  messages: { en: EN, ar: AR },
})


//const storedLanguage = localStorage.getItem("language") || "ar";
// const initialLocale = storedLanguage;
// const i18n = createI18n({
//   locale: initialLocale,
//   fallbackLocale: 'en',
//   globalInjection: true,
//   messages: {
//     en: EN,
//     ar: AR,
//   },
// });

// // Save the default language and direction if they are not in localStorage
// if (!localStorage.getItem("language")) {
//   localStorage.setItem("language", "ar");
// }
// if (!localStorage.getItem("direction")) {
//   localStorage.setItem("direction", "rtl");
// }

// document.body.dir = localStorage.getItem("direction");

const app = createApp(App)
const pinia = createPinia()

app.use(
  Vue3Toastify,
  {
     autoClose: 3000,
    position: "top-right"
  },
).use(pinia).use(router).use(i18n).mount('#app')

