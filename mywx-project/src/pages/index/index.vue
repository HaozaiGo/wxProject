<template>
  <div>
    <Swiper></Swiper>
    <Compony-introduction></Compony-introduction>
    <Img-introduction></Img-introduction>
  </div>
</template>

<script>
import Swiper from '@/components/swiper.vue';
import ComponyIntroduction from '@/components/company/companyIntroduction.vue';
import ImgIntroduction from '@/components/imgIntroduction/imgIntroduction.vue';
export default {
  data() {
    return {
      
    };
  },

  components: {
    Swiper,ComponyIntroduction,ImgIntroduction
    
  },

  methods: {
    onChange(e){
      wx.showToast({
        title:`切换到${e.detail.name}`,
        icon: 'none',
      })
    }
  },

  created() {
    // let app = getApp()
  },
};
</script>

<style scoped>

</style>
