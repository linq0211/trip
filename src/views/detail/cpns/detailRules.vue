<template>
  <div class="rules-area">
    <house-section header-text="预订须知">
      <div class="rules">
        <template v-for="(item, index) in rulesData.orderRules" :key="index">
          <div class="item">
            <div class="title">{{ item.title }}</div>
            <div class="intro">{{ item.introduction }}</div>
            <div class="tips" v-if="item.tips">
              查看说明
            </div>
          </div>
        </template>
      </div>
    </house-section>
  </div>
</template>

<script setup>
import HouseSection from '@/components/house-section/houseSection.vue'

defineProps({
  rulesData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style scoped lang="less">
.rules {
  padding: 10px;
  background-color: #f7f9fb;
  .item {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 12px;
    margin: 20px 0;
    .title {
      width: 50px;
      color: #999;
    }
    .intro {
      flex: 1;
      margin-left: 20px;
      color: #333;
    }
    .tips {
      position: absolute;
      right: 0;
      color: #666;
    }
  }
}
</style>