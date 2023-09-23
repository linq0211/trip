<template>
  <div class="loading" v-if="mainStore.isLoading">
    <div class="loadingBg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .3);
  .loadingBg {
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("@/assets/img/home/loading-bg.png") 0 0 100% 100%;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>