<template>
   <div>
    <swiper
      indicator-dots="true"
      autoplay="true"
      interval="5000"
      duration="1000"
      indicator-active-color="#fff"
      class="swiper"
    >
      <block v-for="(item, index) in banner" :index="index" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return{
        banner: [
        {
        url:'http://codeve.online/onlineImg/friend.png'
      },{
        url:'http://codeve.online/onlineImg/comfident.jpg'
      }],
    }
  }
  
}
</script>

<style scoped>
  .slide-image{
  width: 100%;
}
.swiper{
  height: 30vh;
}
</style>