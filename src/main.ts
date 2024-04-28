import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { authenticationGuard, routes, } from './Routes'
import { plugin, defaultConfig } from '@formkit/vue'
import { Quasar } from 'quasar'

import quasarUserOptions from './quasar-user-options'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach(authenticationGuard);

const app = createApp(App).use(Quasar, quasarUserOptions)

//Using Pinia
app.use(createPinia())

//Using Vue router
app.use(router)

//Mounting app Vue
app.mount('#app')

// Using formkit
app.use(plugin, defaultConfig)