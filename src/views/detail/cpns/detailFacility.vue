<template>
  <div class="facility-area">
    <house-section header-text="房屋设施" more-text="查看全部设施 >">
      <div class="facility">
        <template v-for="(item, index) in houseFacility?.houseFacilitys" :key="index">
          <div class="item" v-if="houseFacility?.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(iten, indey) in item.facilitys?.slice(0,4)" :key="indey">
                <div class="iten">
                  <i class="icon_check icon"></i>
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </house-section>
  </div>
</template>

<script setup>
import houseSection from "@/components/house-section/houseSection.vue"
defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.facility {
  background-color: #f7f9fb;
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  .item {
    display: flex;
    margin: 25px 0;
    .head {
      text-align: center;
      width: 90px;
      img {
        width: 20px;
        height: 20px;
      }
      .text {
        margin-top: 5px;
        color: #333;
      }
    }
    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .iten {
        display: flex;
        align-items: center;
        width: 50%;
        margin: 4px 0;
        .icon {
          margin: 0 6px;
        }

        span {
          color: #333;
        }
      }
    }
  }
}
</style>