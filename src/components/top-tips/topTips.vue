<template>
  <div class="tip">
    <template v-for="(item, index) in contents" :key="item">
      <div class="item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>

  export default {
    emits: ["itemClick"],
    props: {
      contents: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;

        this.$emit("itemClick", index);
      }
    }
  }

</script>

<style scoped>
  .tip {
    display: flex;
    align-items: center;
    text-align: center;
    height: 44px;
    background: #fff;
    border-bottom: 1px solid #f7f6fb;
  }
  .tip .item {
    flex: 1;
  }
  .tip .active span {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    padding: 6px;
    font-weight: 600;
  }
</style>