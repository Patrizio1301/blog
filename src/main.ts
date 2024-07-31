import './assets/main.css'

import {VueKatex} from 'vue-katex';
import 'katex/dist/katex.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'


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


app.mount('#app')
