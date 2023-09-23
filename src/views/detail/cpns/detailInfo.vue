<template>
  <div class="info">
    <div class="name">{{ topInfos?.houseName }}</div>
    <div class="tag">
      <template v-for="(item, index) in topInfos?.houseTags" :key="index">
        <span
          class="item"
          :style="{ color: item.tagText?.color, background: item.tagText?.background.color }"
        >
          {{ item.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ topInfos?.commentBrief?.overall }}</span>
        <span class="title">{{ topInfos?.commentBrief?.scoreTitle }}</span>
        <span class="brief">{{ topInfos?.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topInfos?.commentBrief?.totalCount + "条评论 >" }}</span>
      </div>
    </div>
    <div class="position">
      <div class="left">{{ topInfos?.nearByPosition?.address }}</div>
      <div class="right">地图·周边 ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.info {
  padding: 16px;
  .name {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    overflow: hidden;
    text-align: justify;
  }
  .tag {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .item {
      margin: 0 2px;
      font-size: 12px;
      padding: 1px 3px;
    }
  }
  .comment {
    background-color: #f5f7fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 12px 0;
    .left {
      .score {
        font-size: 16px;
        font-weight: 700;
        color: #333;
      }
      .title {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 3px;
      }
      .brief {
        font-size: 12px;
        color: #666;
      }
    }
    .right {
      .count {
        font-size: 12px;
        color: var(--primary-color);
      }
    }
  }
  .position {
    background-color: #f5f7fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 12px 0;
    .left {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
    .right {
      font-size: 12px;
      color: var(--primary-color);
    }
  }
}
</style>