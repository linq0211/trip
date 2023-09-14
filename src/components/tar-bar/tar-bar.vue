<template>
  <div class="tar-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in itemData" :key="item">
        <van-tabbar-item icon="home-o" :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img v-if="currentIndex !== index" :src="getAssetImg(item.image)">
            <img v-else :src="getAssetImg(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in itemData" :key="item">
      <div
         class="tar-bar-item"
         :class="{ active: currentIndex == index }"
         @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetImg(item.image)">
        <img v-else :src="getAssetImg(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAssetImg } from "@/utils/load-asset"
import { useRouter } from "vue-router";

const itemData = [
  { text: "首页", image: "tabbar/tab_home.png", imageActive: "tabbar/tab_home_active.png", path: "/home" },
  { text: "收藏", image: "tabbar/tab_favor.png", imageActive: "tabbar/tab_favor_active.png", path: "/favor" },
  { text: "订单", image: "tabbar/tab_order.png", imageActive: "tabbar/tab_order_active.png", path: "/order" },
  { text: "消息", image: "tabbar/tab_message.png", imageActive: "tabbar/tab_message.png", path: "/message" }
]

const currentIndex = ref(0)

const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style lang="less" scoped>
 .tar-bar {
  // 通过插槽方式，可以在自己作用域中直接通过元素修改第三方库组件样式
  img {
    height: 26px;
  }

  // 局部定义变量，只在tarbar子元素生效
  // --van-tabbar-item-font-size: 30px;

  // 找到类，对类的css重写，不会生效
  // .van-tabbar-item__icon {
  //   font-size: 30px;
  // }

  // :deep(.van-tabbar-item__icon) {
  //   font-size: 50px;
  // }
 }
</style>