import { createApp } from 'vue'
// 创建一个 pinia 实例 (根 store) 并将其传递给应用
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
