import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

import sessionManager from '@/composables/session/sessionManager';
import { EnumSession } from '@/composables/session/model/EnumSession';
import { RouteLocationNormalized } from 'vue-router';

export const routes = [
    {
        path: '/login',
        component: LoginView,
        meta: {
            protected: false,
        },
    },
    {
        path: '/signup',
        component: RegistrationView,
        meta: {
            protected: false,
        },
    },
    {
        path: '/home',
        component: HomeView,
        meta: {
            protected: false,
        },
    },

    //Protected
    {
        path: '/dashboard',
        component: DashboardView,
        meta: {
            protected: true,
        },
    },
    
    //{ path: '*', redirect: '/' }
]

export function authenticationGuard(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    const isUserLogged = !!sessionManager.get(EnumSession.LOGGED);
    const isNextPageProtected = !!to.meta?.protected;

    if(!isUserLogged && isNextPageProtected) {
        return { path: '/login' };
    } else {
        return true;
    }
}