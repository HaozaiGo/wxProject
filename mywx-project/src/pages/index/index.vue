<template>
  <div>
    <Swiper></Swiper>
    <Compony-introduction></Compony-introduction>
    <Img-introduction></Img-introduction>

    <!-- <van-popup show="show" :close="onClose" z-index=999 custom-style="text-align: center;height: 23%;width:70vw;padding:40rpx">
      
    为了更好的体验,请先登录
    <van-button type="primary" custom-style="margin-top: 20px"  open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">登录</van-button>
    </van-popup> -->
  </div>
</template>

<script>
import Swiper from "@/components/swiper.vue";
import ComponyIntroduction from "@/components/company/companyIntroduction.vue";
import ImgIntroduction from "@/components/imgIntroduction/imgIntroduction.vue";
export default {
  data() {
    return {
      // show:true
    };
  },

  components: {
    Swiper,
    ComponyIntroduction,
    ImgIntroduction,
  },

  methods: {
    onChange(e) {
      wx.showToast({
        title: `切换到${e.detail.name}`,
        icon: "none",
      });
    },
    getPhoneNumber (e){
      console.log(e.detail.encryptedData)
    }
  },


  created() {
    // let app = getApp()
  },
  mounted() {
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res.code);
          
        }
      },
    });
    
  },
};
</script>

<style scoped>

</style>
