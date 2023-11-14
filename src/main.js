import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { appAxios } from './api'
import { useImage } from './helpers'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$image = useImage
app.mount('#app')