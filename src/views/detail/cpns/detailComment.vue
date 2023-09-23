<template>
  <div class="comment-area">
    <house-section header-text="房客点评" :more-text="`查看全部${commentData.totalCount}条评价 >`">
      <div class="comment">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{ commentData.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="message">
              <div class="title">{{ commentData.scoreTitle }}</div>
              <div class="count">{{ commentData.totalCount }}条评论</div>
              <van-rate v-model="commentData.overall" size="10" color="#ff9645" readonly allow-half/>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in commentData.subScores" :key="index">
              <span class="item">{{ item }}</span>
            </template>
          </div>
        </div>
        <div class="tag">
          <template v-for="(iten, indey) in commentData.commentTagVo" :key="indey">
            <div 
              class="iten"
              :style="{ color: iten.color, backgroundColor: iten.backgroundColor }"
            >
              {{ iten.text }}
            </div>
          </template>
        </div>
        <div class="content">
          <div class="avatar">
            <img :src="commentData.comment?.userAvatars" alt="">
            <div class="info">
              <div class="name">{{ commentData.comment?.userName }}</div>
              <div class="date">{{ commentData.comment?.checkInDate }}</div>
            </div>
          </div>
          <div class="detail">
            <span class="text">{{ commentData.comment?.commentDetail }}</span>
          </div>
        </div>
      </div>
    </house-section>
  </div>
</template>

<script setup>
import houseSection from '@/components/house-section/houseSection.vue';
defineProps({
  commentData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.comment {
  padding: 5px 3px;
  .header {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .score {
        position: relative;
        .text {
          font-size: 50px;
          font-weight: 700;
          color: #333;
          position: relative;
          z-index: 9;
        }
        .line {
          width: 56px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          position: absolute;
          z-index: 5;
          bottom: 10px;
        }
      }
      .message {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 12px;
        .title {
          color: #333;
        }
        .count {
          color: #999;
          margin: 2px 0;
        }
      }
    }
    .right {
      font-size: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      .item {
        color: #666;
        font-size: 12px;
      }
    }
  }
  .tag {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
    .iten {
      margin: 0 10px 5px 0;
      padding: 3px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
  .content {
    background-color: #f7f9fb;
    border-radius: 6px;
    padding: 8px;
    margin-top: 10px;
    .avatar {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: #000;
        }
        .date {
          font-size: 12px;
          color: #999;
          margin-top: 2px;
        }
      }
    }
    .detail {
      margin: 15px 0 10px;
      .text {
        font-size: 12px;
        color: #333;
      }
      }
  }
}
</style>