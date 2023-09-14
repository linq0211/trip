<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

// 获取城市
const cityClick = () => {
  router.push("/city")
}


// 获取位置
const positionClick = () => {
  navigator.geolocation?.getCurrentPosition(res => {
    console.log("获取位置成功: ", res)
  }, err => {
    console.log("获取位置失败: ", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  })
}

</script>

<style lang="less" scoped>
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
      flex: 1;
      color: #333;
      font-size: 15px;
    }
    .position {
      width: 74px;
      .text {
        position: relative;
        top: 1px;
        font-size: 12px;
        color: #666;
      }

      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }
</style>