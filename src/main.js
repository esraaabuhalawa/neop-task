import { createApp } from 'vue'
// import './style.scss'
import App from './App.vue'

import './assets/style/fonts.css'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'swiper/css'

import './assets/style/style.scss'

import { createPinia } from 'pinia'
import router from './router'

import EN from "./locale/en.json";
import AR from "./locale/ar.json";
import { createI18n } from "vue-i18n";

const storedLanguage = localStorage.getItem("language") || "ar";
const initialLocale = storedLanguage;
const i18n = createI18n({
  locale: initialLocale,
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: EN,
    ar: AR,
  },
});

// Save the default language and direction if they are not in localStorage
if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "ar");
}
if (!localStorage.getItem("direction")) {
  localStorage.setItem("direction", "rtl");
}

document.body.dir = localStorage.getItem("direction");

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(i18n).mount('#app')

//createApp(App).mount('#app')
