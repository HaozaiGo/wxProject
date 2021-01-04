<template>
  <div>
    <a-carousel effect="fade">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
    <!-- 添加或者删除 -->
    <div class="operation">
      <a-button type="primary">
        <template #icon><CloudDownloadOutlined />上传图片</template>
      </a-button>
      <a-button type="danger" class="deleteBtn">删除图片 </a-button>
    </div>

    <!-- 图片列表 -->
      <a-list item-layout="horizontal" :data-source="data" class="demo-loadmore-list">
      <a-list-item v-for="(item,index) of bannerList" :key="index">
        <a-list-item-meta
          :description="item.describe"
        >
          <template #title>
            <a href="">{{ item.name }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
  </a-list>
  </div>
</template>

<script>
import { CloudDownloadOutlined } from "@ant-design/icons-vue";
import { banner } from '../../api/api'
export default {
  components: {
    CloudDownloadOutlined,
  },
  data() {
    return {
      bannerImg:[],
      bannerList: [
        {
          name: "图片1",
          describe: "这是上传的第1副图片",
          upTime: "2020,12.29",
        },
         {
          name: "图片2",
          describe: "这是上传的第2副图片",
          upTime: "2020,12.29",
        },
      ],
    };
  },
  mounted(){
   this.getbannerData()

  },
  methods:{
   getbannerData(){
     let bannerData =  banner();
     console.log(bannerData)
   }

  }
};
</script>

<style scoped>
.operation {
  padding: 30px;
  width: 100%;
  text-align: center;
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