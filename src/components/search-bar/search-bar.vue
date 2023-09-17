<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <span class="name">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="item end">
        <span class="name">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { formatMonthDay } from '@/utils/formatMonthDay';


const homestore = useHomeStore()
const { startDate, endDate } = storeToRefs(homestore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))

</script>

<style lang="less" scoped>
.search {
  background-color: #f2f4f6;
  display: flex;
  height: 45px;
  align-items: center;
  color: #999;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 14px;
  .select-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #fff;
    .item {
      font-size: 12px;
      display: flex;
      align-items: center;
      .date {
        color: #333;
        margin: 0 10px 0px 5px;
        position: relative;
      }
    } 
    .start {
      margin-bottom: 2px;
    }
    .end .date::after {
      content: " ";
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }
  .content {
    border-left: 1px solid #fff;
    display: flex;
    flex: 1;
    padding: 0 6px;
    .keyword {
      font-size: 14px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon-search {
      background-image: url("@/assets/img/home/home-sprite.png");
      background-position: -29px -151px; // bgimage需要水平竖直方向位移
      background-size: 207px 192px; // bgimage的大小
      width: 24px; // 容器宽度
      height: 24px; // 容器高度
      display: inline-block;
    }
  }
}
</style>