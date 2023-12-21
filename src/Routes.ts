import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'

export const routes = [
    { path: '/login', component: LoginView },
    { path: '/', component: DashboardView },
    //{ path: '*', redirect: '/' }
]