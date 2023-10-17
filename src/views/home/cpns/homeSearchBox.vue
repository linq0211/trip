<template>
  <div class="search-box">
    <div class="item location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <div class="item live" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar" 
      @confirm="onConfirm"
      :show-confirm="false"
      type="range"
      :round="false"
      color="#ff9854"
    />
    <div class="item price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="item keyword">关键字/位置/民宿名</div>
    <div class="item hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <span 
          class="tag"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="item search-btn">
      <div class="btn" @click="startSearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router"
import { formatMonthDay, getDiffDays } from "@/utils/formatMonthDay"
import useHomeStore from "@/store/modules/home";
import useCityStore from "@/store/modules/city";
import { storeToRefs } from "pinia";

// 获取路由和状态管理
const router = useRouter()
const homestore = useHomeStore()

// city
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
// 获取城市
const cityClick = () => {
  router.push("/city")
}
// 获取位置
const positionClick = () => {
  navigator.geolocation?.getCurrentPosition(res => {
    console.log("获取位置成功: ", res)
  }, err => {
    console.log("获取位置失败: ", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  })
}

// live
const { startDate, endDate } = storeToRefs(homestore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const showCalendar = ref(false)
const stayCount = ref(getDiffDays(startDate.value, endDate.value))
const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = selectStartDate
  endDate.value = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  showCalendar.value = false
}

// 热门建议
const { hotSuggests } = storeToRefs(homestore)

// 开始搜索
const startSearch = () => {
  router.push("/search")
}

</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  .position {
    width: 74px;
    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
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
.price-counter {
  height: 44px;
  .start {
    border-right: 1px solid #f6f6f6;
  }
}

.keyword {
  height: 44px;
}

.hot-suggest {
  margin: 10px 0;
  .tag {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    line-height: 38px;
    background-color: var(--primary-color);
    color: #fff;
    text-align: center;
    border-radius: 20px;
    font-size: 18px;
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>