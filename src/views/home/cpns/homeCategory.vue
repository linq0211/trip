<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homestore = useHomeStore()
const { categories } = storeToRefs(homestore)

</script>

<style lang="less" scoped>
.category {
  display: flex;
  height: 80px;
  margin-top: 8px;
  padding: 0 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    flex-shrink: 0;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 3px;
    }
  }
}
</style>