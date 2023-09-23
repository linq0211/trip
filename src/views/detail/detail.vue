<template>
  <div class="detail">
    <div class="topTip" v-if="showTopTips">
      <top-tips :contents="['设施', '房东', '评论', '预订']" @item-click="itemClick"></top-tips>
    </div>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div class="swipe" v-if="mainPart" v-memo="[mainPart]">
    <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
    <detail-info :top-infos="mainPart.topModule"></detail-info>
    <detail-facility :ref="tipRefs" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
    <detail-landlord :ref="tipRefs" :landlord-data="mainPart.dynamicModule.landlordModule"></detail-landlord>
    <detail-comment :ref="tipRefs" :comment-data="mainPart.dynamicModule.commentModule"></detail-comment>
    <detail-rules :ref="tipRefs" :rules-data="mainPart.dynamicModule.rulesModule"></detail-rules>
    <detail-map :position-data="mainPart.dynamicModule.positionModule"></detail-map>
    <detail-action :current-house="currentHouse"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia'
import detailSwipe from './cpns/detailSwipe.vue'
import detailInfo from './cpns/detailInfo.vue'
import detailFacility from './cpns/detailFacility.vue'
import detailLandlord from './cpns/detailLandlord.vue'
import detailComment from './cpns/detailComment.vue'
import detailRules from './cpns/detailRules.vue'
import detailMap from './cpns/detailMap.vue'
import detailAction from './cpns/detailAction.vue'
import topTips from '@/components/top-tips/topTips.vue'
import useScroll from '@/hooks/useScroll';

// 获取路由对象
const route = useRoute()
const router = useRouter()

// 获取detail状态管理
const detailStore = useDetailStore()
const houseId = route.params.id
detailStore.fetchDetailInfos(houseId)
const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfos.value.mainPart)
const currentHouse = computed(() => detailInfos.value.currentHouse)

// 返回首页
const onClickLeft = () => {
  router.back()
}

// 页面滚动监听
const { scrollTop } = useScroll()
const showTopTips = computed(() => {
  return scrollTop.value >= 300
})
// 添加一个数组，绑定所需要所有元素的ref的el，再通过scrollTo到指定的元素位置
const tipArr = []
const tipRefs = (value) => {
  // value.$el绑定的是属性ref值为tipRefs的元素
  tipArr.push(value?.$el)
}
const itemClick = (index) => {
  window.scrollTo({
    top: tipArr[index].offsetTop - 40 ,
    behavior: "smooth"
  })
}

</script>

<style lang="less" scoped>
.topTip {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  height: 44px;
}
.detail {
  --van-nav-bar-title-text-color: var(--primary-color);
}
</style>