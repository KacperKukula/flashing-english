<template>
    <h1>DASHBOARD</h1>
    <q-btn color="red" icon-right="mail" label="Logout" @click="logout(router)" />
</template>

<script>
import { logout } from '@/composables/authentication'
import { useRouter } from 'vue-router';

export default {
    name: 'DashboardView',
    setup() {

        const router = useRouter();

        return {
            logout,
            router
        }
    }
}
</script>