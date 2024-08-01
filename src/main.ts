import './assets/main.css'

// Quasar globally
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import VueKatex from '@hsorby/vue3-katex';
import 'katex/dist/katex.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {Quasar} from 'quasar'



import App from './App.vue'
import router from './router'

const app = createApp(App).use(VueKatex, {
    mhchem: true,
    globalOptions: {
    //... Define globally applied KaTeX options here
    }
  });

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
