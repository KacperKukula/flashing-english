<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    background-color: rgba($color: #000000, $alpha: 0.25);

    a {
        min-width: 4rem;
        color: #ffffff;
    }
}
</style>
