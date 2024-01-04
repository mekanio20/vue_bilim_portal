import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { appAxios } from './api'
import { useImage } from './helpers'
import './style.css'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$image = useImage
app.mount('#app')