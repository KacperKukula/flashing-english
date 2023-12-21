<template>
  <navbar-component class="navbar" />
  <router-view />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
}

</style>
