import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/ja";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
});
app.mount('#app')
