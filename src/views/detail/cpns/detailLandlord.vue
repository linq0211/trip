<template>
  <div class="landlord-area">
    <house-section header-text="房东介绍" more-text="查看房东主页 >">
      <div class="landlord">
        <div class="top">
          <img :src="landlordData.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <img :src="landlordData.hotelLogo" alt="">
            <div class="info">
              <div class="name">{{ landlordData.hotelName }}</div>
              <div class="tag">
                <template v-for="(item, index) in landlordData.hotelTags" :key="index">
                  <span class="item" :style="{ color: item.tagText?.color }">{{ item.tagText?.text }}</span>
                  <span class="separate" v-if="index !== landlordData.hotelTags.length - 1">|</span>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="messageAll">
          <template v-for="(iten, indey) in landlordData.hotelSummary" :key="indey">
            <div class="iten">
              <span class="title">{{ iten.title }}</span>
              <span class="intro">{{ iten.introduction }}</span>
              <span class="tip">{{ iten.tip }}</span>
            </div>
          </template>
        </div>
      </div>
    </house-section>
  </div>
</template>

<script setup>
import houseSection from '@/components/house-section/houseSection.vue';
defineProps({
  landlordData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.landlord {
  .top {
    img {
      width: 100%;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 54px;
        height: 54px;
      }
      .info {
        margin-left: 3px;
        .name {
          font-size: 16px;
          font-weight: 700;
          color: #333
        }
        .tag {
          font-size: 12px;
          color: #666;
          margin-top: 4px;
          .separate {
            margin: 0 5px;
          }
        }
      }
    }
    .right {
      height: 24px;
      line-height: 24px;
      background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      text-align: center;
      border-radius: 7px;
      color: #fff;
      font-size: 12px;
      padding: 0 12px;
    }
  }
  .messageAll {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 10px 10px;
    .iten {
      display: flex;
      flex-direction: column;
      .title {
        color: #999;
        font-size: 12px;
      }
      .intro {
        font-size: 18px;
        font-weight: 700;
        color: #333;
        margin: 3px 0 5px;
      }
      .tip {
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>