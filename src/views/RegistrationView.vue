<template>
    <div class="form">
        <FormKit type="group" v-model="address">
            <FormKit type="text" name="Login" label="Login"/>
            <FormKit type="text" name="Email" label="Email"/>
            <FormKit type="password" name="Password" label="Password"/>
            <FormKit type="password" name="Reapet password" label="Reapet password"/>
            <FormKit type="submit" label="Register" />
        </FormKit>
    </div>
</template>

<script>
import { FormKit } from '@formkit/vue';
import { ref } from 'vue';

export default {
    name: 'RegistrationView',
    components: {
        FormKit,
    },
    setup() {
        const address = ref({
            street: '',
        });
        return {
            address,
        };
    },
}
</script>

<style>
.form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 90dvh;
}
</style>