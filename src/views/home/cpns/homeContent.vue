<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <house-item-v3 
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
          @click="itemClick(item.data)" 
        ></house-item-v3>
        <house-item-v9 
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
          @click="itemClick(item.data)"  
        ></house-item-v9>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import houseItemV3 from "@/components/house-item-v3/houseItemV3.vue"
import houseItemV9 from "@/components/house-item-v9/houseItemV9.vue"
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'

const router = useRouter()
const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

// 跳转到详情页面
const itemClick = (item) => {
  router.push("/detail/" + item.houseId)
}

</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    padding: 10px;
    font-size: 22px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>