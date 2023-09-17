<template>
  <div class="app">
    <router-view></router-view>
    <tar-bar v-if="!$route.meta.hideTarBar"></tar-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import tarBar from "./components/tar-bar/tar-bar.vue"
import Loading from "./components/loading/loading.vue"

</script>


<style scoped>

</style>
