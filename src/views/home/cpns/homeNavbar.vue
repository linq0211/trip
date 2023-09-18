<template>
  <div class="nav-bar">
    <div class="navText">
      <span class="text">弘源旅途</span>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
  .nav-bar {
    .navText {
      height: 44px;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        color: var(--primary-color);
        font-size: 16px;
      }
    }
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>