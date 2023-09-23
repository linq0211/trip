<template>
  <div class="home" ref="homeRef">
    <home-navbar></home-navbar>
    <home-search-box></home-search-box>
    <home-category></home-category>
    <div class="searchBar" v-if="isShowSearchBar">
      <search-bar></search-bar>
    </div>
    <home-content></home-content>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<script setup>
  import homeSearchBox from './cpns/homeSearchBox.vue'
  import homeNavbar from './cpns/homeNavbar.vue'
  import useHomeStore from "@/store/modules/home"
  import homeCategory from "./cpns/homeCategory.vue"
  import homeContent from './cpns/homeContent.vue'
  import useScroll from '@/hooks/useScroll'
  import searchBar from '@/components/search-bar/search-bar.vue'
  import { computed, watch, ref, onActivated } from 'vue'

  // 发送首页的网络请求
  const homestore = useHomeStore()
  homestore.fetchHotSuggests()
  homestore.fetchCategories()
  homestore.fetchHouseList()

  // 监听window窗口滚动
  const homeRef = ref()
  const { isReachBottom, scrollTop } = useScroll(homeRef)
  watch(isReachBottom, (newValue) => {
    if (newValue) {
      homestore.fetchHouseList().then(res => {
        isReachBottom.value = false
      })
    }
  })

  // window窗口滚动到一定位置时，顶部展示搜索框
  const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
  })

  onActivated(() => {
    homeRef.value.scrollTo({
      top: scrollTop.value
    })
  })
  

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 40px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}

.searchBar {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 10px 16px;
  background-color: #fff;
}
</style>