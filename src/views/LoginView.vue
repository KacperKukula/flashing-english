<template>
    <div class="login">
        <q-form class="login_form" @submit="logInByEmail(data, router)">
            <q-input type="text" class="primary" v-model="data.login" filled label="Login" label-color="primary" color="accent" text-color="red"
                :rules="rules" lazy-rules :input-style="{ color: 'white' }"/>
            <q-input type="password" class="primary" v-model="data.password" filled label="Password" label-color="primary" color="accent" text-color="red"
                :rules="rules" lazy-rules :input-style="{ color: 'white' }"/>
    
            <q-btn label="Submit" type="submit" color="accent"/>
        </q-form>

        <router-link to="/signup">Register</router-link>
    </div>
</template>

<script>
import { ref } from 'vue';
import { logInByEmail } from '@/composables/authentication';
import { useRouter } from "vue-router";

export default {
    name: 'LoginView',
    setup() {        
        const router = useRouter();
        const data = ref({
            login: '',
            password: ''
        });
        const rules = ref([
            val => val !== null && val !== '' || 'Required.'
        ]);

        // watch(data, (newVal) => {
        //     console.log(newVal);
        // }, { deep: true });

        return {
            data,
            rules,
            router,
            logInByEmail
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 90dvh;

    &_form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        
        padding: 2rem 2.5rem;
        background-color: $darkMask;
        border-radius: 1rem;
        width: clamp(20rem, 100%, 30rem);
    }
}
</style>
