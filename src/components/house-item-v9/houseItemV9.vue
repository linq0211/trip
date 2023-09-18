<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image?.url">
      </div>
      <div class="info">   
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" size="15" color="#fff" readonly allow-half/>
          <span class="new">{{ "￥" + itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    overflow: hidden;
    border-radius: 6px;
    background-color: #fff;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      padding: 8px 10px;
      color: #fff;
      position: absolute;
      bottom: 0;
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>