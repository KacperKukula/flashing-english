import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, } from './Routes'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App).use(Quasar, quasarUserOptions)
app.use(createPinia())
app.use(router)
app.mount('#app')
