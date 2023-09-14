<template>
  <div class="app">
    <router-view></router-view>
    <tar-bar v-if="!$route.meta.hideTarBar"></tar-bar>
  </div>
</template>

<script setup>
import tarBar from "./components/tar-bar/tar-bar.vue"

</script>


<style scoped>

</style>
