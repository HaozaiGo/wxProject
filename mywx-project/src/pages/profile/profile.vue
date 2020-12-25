<template>
  <div>
    <swiper>
      <!-- 第一页 -->
      <swiper-item>
        <div class="profire-Name flex-sb">
          <div>
            <span>啊豪</span> 
            <span>Wu JiaHao</span>

          </div>
          <div>
            <van-icon name="chat" dot />
          </div>
        </div>
        <div class="pesonal">
          <img src="/static/images/profile/personal.jpeg" alt="" class="personalImg">
        </div>
      </swiper-item>
      <!-- 第一页 -->
      <swiper-item>2</swiper-item>
    </swiper>
  </div>
</template>

<script>


export default {
  components: {
    
    
  
  },

  data () {
    return {
    
    }
  },

  created () {
  }
}
</script>

<style scoped>
  .profire-Name{
    padding: 30rpx;
  }
  .pesonal{
    width: 100%;
  }
  .personalImg{
    width: 100vw;
    height: 90vh
  }
</style>
