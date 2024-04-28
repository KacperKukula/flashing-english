<template>
    <nav class="nav">
        <router-link class="nav-cell" to="/home">Home</router-link>
        <router-link class="nav-cell" to="/login">Login</router-link>
        <router-link class="nav-cell" to="/dashboard">Dash</router-link>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    padding: 0 30%;
    background-color: rgba($color: #000000, $alpha: 0.25);

    &-cell {
        min-width: 4rem;
        color: #ffffff;
    }
}
</style>
