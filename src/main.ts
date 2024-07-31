import './assets/main.css'

import katexvue3 from "katex-vue3";

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App) .use(katexvue3, {
    flag: [
      { left: "$", right: "$" },
      { left: "$$", right: "$$" }
    ],
    options: {
      displayMode: false, // 是否显示为公式模式
      throwOnError: false, //设置为true时，将在控制台抛出错误，而不是输出错误信息
      errorColor: "#FF0000" // 错误信息的颜色
    }
  })

app.use(createPinia())
app.use(router)


app.mount('#app')
