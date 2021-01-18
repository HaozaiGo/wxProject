<template>
  <div>
    <a-carousel effect="fade">
      <div v-for="(item, index) of bannerList" :key="index">
        <img :src="imgUrl + `${item.bannerImg}`" alt="" class="bannerImg" />
      </div>
    </a-carousel>
    <!-- 添加或者删除 -->
    <div class="operation">
      <div style="display: inline-block">
        <a-upload name="file" 
        :action='imgUrl' 
        @change="handleChange">
          <a-button type="primary">
            <template #icon><CloudDownloadOutlined />上传图片</template>
          </a-button>
        </a-upload>
      </div>

      <a-button type="danger" class="deleteBtn">删除图片 </a-button>
    </div>

    <!-- 图片列表 -->
    <a-list
      item-layout="horizontal"
      :data-source="data"
      class="demo-loadmore-list"
    >
      <a-list-item v-for="(item, index) of bannerList" :key="index">
        <!-- 描述 -->
        <a-list-item-meta :description="item.introduction">
          <template #title>
            <a href="">{{ item.imgTitle }}</a>
          </template>
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { CloudDownloadOutlined } from "@ant-design/icons-vue";
import { getIndex, resquest } from "@/api/api";
export default {
  components: {
    CloudDownloadOutlined,
  },
  data() {
    return {
      bannerList: [],
      imgUrl: "",
    };
  },
  mounted() {
    this.getbannerData();
    this.imgUrl = resquest;

    //  this.getList()
    console.log(this.imgUrl);
  },
  methods: {
    // 请求banner数据
    async getbannerData() {
      const bannerData = await getIndex();

      this.bannerList = bannerData.data;
    },
    //  getList(){
    //    getIndex().then(res=>{
    //      console.log(res)
    //    })
    //  }
  },
};
</script>

<style scoped>
.operation {
  padding: 30px;
  width: 100%;
  text-align: center;
}
.bannerImg {
  display: block;
  margin: 0 auto;
}
.ant-btn-icon-only {
  width: 10vw;
  height: 42px;
}
.deleteBtn {
  width: 10vw;
  height: 42.5px;
  margin-left: 35px;
}
.demo-loadmore-list {
  min-height: 350px;
}
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height: 35vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel ::v-deep(.slick-dots li button) {
  width: 30px;
  height: 6px;
}
.ant-carousel ::v-deep(.slick-dots li.slick-active button) {
  width: 38px;
}
</style>