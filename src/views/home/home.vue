<template>
  <div class="home">
    <home-navbar></home-navbar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <home-search-box></home-search-box>
    <div class="live">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">8月25日</span>
        </div>
        <div class="stay">共一晚</div>
      </div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">8月26日</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import homeSearchBox from './components/homeSearchBox.vue';
  import homeNavbar from './components/homeNavbar.vue';
import HomeSearchBox from './components/homeSearchBox.vue';
</script>

<style lang="less" scoped>
  .banner {
    img {
      width: 100%;
    }
  }
  .live {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .start {
      flex: 1;
      display: flex;
      align-items: center;
      
      .date {
        display: flex;
        min-width: 30%;
        flex-direction: column;
        .tip {
          color: #999999;
          font-size: 12px;
          font-weight: 500;
        }
        .time {
          color: #333333;
          font-size: 15px;
          margin-top: 2px;
        }
      }
      .stay {
        flex: 1;
        font-size: 12px;
        text-align: center;
        color: #666666;
      }
    }
    .end {
      min-width: 30%;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      .tip {
        color: #999999;
        font-size: 12px;
        font-weight: 500;
      }
      .time {
        color: #333333;
        font-size: 15px;
        margin-top: 2px;
      }
    }
  }
</style>