<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="城市/区域/位置"
        show-action
        @cancel="cancelSearch"
      />

      <!-- tab的name属性可以自定义标识符，tabs的v-model:active绑定当前的标识符 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>      
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from "@/store/modules/city"
import { storeToRefs } from 'pinia';
import cityGroup from "./cpns/cityGroup.vue"

const router = useRouter()
const searchValue = ref("")
const tabActive = ref()

// 取消按钮监听
const cancelSearch = () => {
  router.back()
}

// 从store中获取
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

/**
 * 获取选中标签后的数据
 *  获取正确的key，将tabs的tabActive正确绑定
 * 通过key从allCities中获取数据，默认直接获取的不是响应式的，包裹computed方法，当内部依赖发生变化时重新进行计算
*/
// const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>