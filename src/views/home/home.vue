<template>
  <div class="home">
    <home-navbar></home-navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <home-search-box></home-search-box>
    
  </div>
</template>

<script setup>
  import homeSearchBox from './components/homeSearchBox.vue';
  import homeNavbar from './components/homeNavbar.vue';
  import useHomeStore from "@/store/modules/home"

  const homestore = useHomeStore()
  homestore.fetchHotSuggests()
</script>

<style lang="less" scoped>
  .banner {
    img {
      width: 100%;
    }
  }
  
</style>