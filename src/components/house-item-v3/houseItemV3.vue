<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image?.url">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png">
          <span class="text">{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <span class="new">{{ "￥" + itemData.finalPrice }}</span>
          <span class="old">{{ "￥" + itemData.productPrice }}</span>
          <span class="tip">{{ itemData.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
  .house-item {
    width: 50%;
    .item-inner {
      border-radius: 6px;
      margin: 5px;
      overflow: hidden;
      background-color: #fff;
      .cover {
        img {
          width: 100%;
        }
      }
      .info {
        padding: 8px 10px;
        color: #666;
        font-size: 12px;
        .location {
          display: flex;
          align-items: center;
          img {
            width: 12px;
            height: 12px;
          }
          .text {
            font-size: 12px;
            margin-left: 2px;
          }
        }
        .name {
          margin: 5px 0;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          display: flex;
          align-items: flex-start;
          margin: 8px 0;
          .new {
            font-size: 14px;
            color: #ff9645;
          }
          .old {
            text-decoration: line-through;
            font-size: 12px;
            color: #999;
            margin: 0 3px;
          }
          .tip {
            color: #fff;
            background: linear-gradient(270deg,#f66,#ff9f9f);
            padding: 0 6px;
            font-size: 12px;
            border-radius: 8px;
          }
        }
      }
    }
  }
</style>