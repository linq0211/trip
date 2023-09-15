<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="(item, index) in groupData.hotCities" :key="item.cityId">
          <div class="item" @click="selectCity(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="item in groupData.cities" :key="item">
        <van-index-anchor :index="item.group" />
        <template v-for="cities in item.cities" :key="cities.cityId">
          <van-cell :title="cities.cityName" @click="selectCity(cities)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue"
import { useRouter } from "vue-router";
import useCityStore from "@/store/modules/city"

const router = useRouter()
const cityStore = useCityStore()

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const indexs = props.groupData.cities.map(item => item.group)
  indexs.unshift("#")
  return indexs
})

const selectCity = (city) => {
  cityStore.currentCity = city
  router.back()
}

</script>

<style scoped>
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  padding-right: 20px;

  .item {
    width: 70px;
    height: 28px;
    text-align: center;
    border-radius: 14px;
    line-height: 28px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px;
  }
}
</style>