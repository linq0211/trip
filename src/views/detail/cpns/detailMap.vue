<template>
  <div class="map">
    <house-section header-text="位置周边" more-text="查看更多周边信息 >">
      <div class="baidu" ref="mapRef"></div>
    </house-section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import houseSection from '@/components/house-section/houseSection.vue';

const prop = defineProps({
  positionData: {
    type: Object,
    default: () => ({})
  }
})
const mapRef = ref()

onMounted(() => {
  const map = new BMapGL.Map(mapRef.value); // 创建地图实例 
  const point = new BMapGL.Point(prop.positionData.longitude, prop.positionData.latitude); // 创建点坐标 
  const marker = new BMapGL.Marker(point);
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  map.addOverlay(marker); 
})
</script>

<style scoped>
.baidu {
  height: 200px;
  padding: 10px;
}
</style>