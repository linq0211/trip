<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tar-bar v-show="!$route.meta.hideTarBar"></tar-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import tarBar from "./components/tar-bar/tar-bar.vue"
import Loading from "./components/loading/loading.vue"

</script>


<style scoped>

</style>
