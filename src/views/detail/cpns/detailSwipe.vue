<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="item">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span class="title">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swipeData[active]?.enumPictureCategory == key"
              >
                {{ getCategoryIndex(swipeData[active]) + 1 }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  // [{}, {}, ...]
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 2: [], 4: []...
const swipeGroup = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

// 自定义指示器
// name
// 通过正则进行name的提取
const nameReg = /【(.*?)】/i
const getName = (name) => {
  const result = nameReg.exec(name)
  return result[1]
}
// count
// 当前展示的数据swipeData[active]位于分类对象swipeGroup中的第几个数据
// 通过swipeData[active]的enumPictureCategory与swipeGroup中的key进行对应查找
const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item)
}

</script>

<style scoped lang="less">
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, .4);
      .item {
        margin: 0 4px;
        &.active {
          background-color: #fff;
          color: #333;
          border-radius: 5px;
          padding: 0 3px;
        }
      }
    }
  }
}
</style>