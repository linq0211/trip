<template>
  <div class="tar-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in itemData" :key="item">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetImg(item.image)">
            <img v-else :src="getAssetImg(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { getAssetImg } from "@/utils/load-asset"
import { useRoute } from "vue-router";

const itemData = [
  { text: "首页", image: "tabbar/tab_home.png", imageActive: "tabbar/tab_home_active.png", path: "/home" },
  { text: "收藏", image: "tabbar/tab_favor.png", imageActive: "tabbar/tab_favor_active.png", path: "/favor" },
  { text: "订单", image: "tabbar/tab_order.png", imageActive: "tabbar/tab_order_active.png", path: "/order" },
  { text: "消息", image: "tabbar/tab_message.png", imageActive: "tabbar/tab_message.png", path: "/message" }
]
/**
 * 通过URL修改路径，tarbar没有做出具体的响应
 *  获取到当前路由对象后进行监听，找到当前路由对象的路径在itemData中的索引位置，再修改当前的索引
*/
const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = itemData.findIndex(item => item.path === newRoute.path)
  // 修改一个不存在路径时，直接return
  if (index === -1) return
  currentIndex.value = index
})

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