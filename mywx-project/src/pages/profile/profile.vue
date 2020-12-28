<template>
  <div>
    <swiper class="swiper">
      <!-- 第一页 -->
      <swiper-item>
        <div class="profire-Name flex-sb">
          <div class="myName">
            <span>啊豪</span>
            <span>Wu JiaHao</span>
          </div>
          <div>
            <span>我的简历</span>
            <van-icon name="arrow" dot class="myResume" />
          </div>
        </div>
        <div class="myPicBox rel">
          <img
            src="/static/images/profile/jiahao1.jpg"
            alt=""
            srcset=""
            class="myPic"
          />
          <div class="layer">
            <p>前端开发工程师</p>
            <p>2年开发经验</p>
          </div>
        </div>
      </swiper-item>
      <!-- 第二页 -->
      <swiper-item>
        <div class="content">
          <!-- 基本资料 -->
          <div>
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">1</div>
              <div class="topTex">基本资料</div>
            </div>
            <van-row>
              <van-col span="12"><div class="th">姓名：吴嘉豪</div> </van-col>
              <van-col span="12"
                ><div class="th">电话：13326745183</div></van-col
              >
              <van-col span="12"><div class="th">性别：男</div> </van-col>
              <van-col span="12"><div class="th">年龄：22</div> </van-col>
              <van-col span="24"
                ><div class="th">
                  学历：本科
                  <br />毕业于：广东技术师范大学天河学院
                </div>
              </van-col>
              <van-col span="24"
                ><div class="th">邮箱：1029172530@qq.com</div>
              </van-col>
              <van-col span="24"
                ><div class="th">英语等级：大学英语4级</div>
              </van-col>
            </van-row>
          </div>

          <!-- 主要技术 -->
          <div class="mainTechnology">
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">2</div>
              <div class="topTex">主要技术</div>
            </div>
            <div>
              <view
                class="progress-box"
                v-for="(item, index) of mainTechnology"
                :key="index"
              >
                {{ item.technology }}
                <progress :percent="item.percent" active stroke-width="5" />
              </view>
            </div>
          </div>
        </div>
      </swiper-item>
      <!-- 第三页 -->
      <swiper-item>
        <div class="content">
          <!-- 工作经历 -->
          <div class="workExperience">
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">3</div>
              <div class="topTex">工作经历和项目经验</div>
            </div>
            <div class="experience">
              <van-collapse
                accordion
                :value="activeNames"
                @change="onChange"
                @open="onOpen"
                @click="handleClick"
              >
                <van-collapse-item title="有赞微商城" name="1">
                  提供多样店铺模板，快速搭建网上商城
                </van-collapse-item>
                <van-collapse-item title="有赞零售" name="2">
                  网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
                </van-collapse-item>
                <van-collapse-item title="有赞美业" name="3">
                  线上拓客，随时预约，贴心顺手的开单收银
                </van-collapse-item>
              </van-collapse>
            </div>
          </div>
        </div>
      </swiper-item>
      <!-- 第四页 -->
      <swiper-item>
        <div class="content">
          <!-- 个人介绍 -->
          <div>
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">4</div>
              <div class="topTex">个人介绍</div>
            </div>
            <div class="personalIntroduction">
              <p>
                自我评价：{{myIntroduction}}
              </p>
              <p>
                兴趣爱好:篮球、k哥、弹吉他
              </p>
              <p>获得荣誉:曾帮助学校搭建官网，获得赞助</p>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {

  data() {
    return {
      mainTechnology: [
        { technology: "vue", percent: "75" },
        { technology: "HTML5/CSS3/JavaScript", percent: "90" },
        { technology: "react", percent: "70" },
        { technology: "Node", percent: "68" },
        { technology: "小程序开发", percent: "80" },
        { technology: "服务端运维", percent: "60" },
      ],
      activeNames: "",
      myIntroduction:`为人开朗乐观,面对问题不逃避,积极面对问题，善于与人沟通，接触前端开发2年，有一定的Pc和移动端开发经验，善于总结经验，熟悉ES6以上相对重要的
                JS知识,会使用Node写后台，会使用Mongodb和MySql数据库，熟悉使用git代码管理工具，有一年以上的团队开发经验，自身有良好的审美观，有逛博客的习惯，
                不断学习新知识跟上时代的进步,最近打算入手TypeScript和Go语言。`
    };
  },
  methods: {
    onChange(event) {
      if (event.target[0]) {
        let active = event.target[0];
        this.activeNames != event.target[0]
          ? (this.activeNames = active)
          : (this.activeNames = "");
      } else {
        this.activeNames = "";
      }
    },
  },

  created() {},
};
</script>

<style scoped>
.swiper {
  height: 100vh;
}
.profire-Name {
  padding: 30rpx;
  align-items: center;
}
.personalIntroduction p{
  margin-top: 15px;
  letter-spacing: 1.5px;
}
.personalIntroduction :nth-child(2){
  font-weight: 600;
}
.personalIntroduction :nth-child(3){
  font-weight: 600;
}
.progress-box {
  margin-top: 10px;
}
.mainTechnology {
  margin-top: 30px;
}
.experience {
  margin-top: 20px;
}
.number {
  padding: 3px 8px;
  background: #444444;
  color: #ffffff;
  margin-right: 10px;
}
.content {
  padding: 15px;
}
.topTex {
  font-size: 18px;
  font-weight: 550;
}
.th {
  padding: 8px 0px;
  border-bottom: 1px dotted #444444;
}

.topNum {
  padding: 5px 0px;
  border-bottom: 1px solid #444444;
}
.layer {
  position: absolute;
  bottom: 12vh;
  width: 100%;
  height: 15vh;
  background: rgba(0, 0, 0, 0.5);
}
.layer p {
  color: #ffffff;
  text-align: center;
}
.layer p:first-child {
  font-size: 18px;
  margin: 15px 0px 10px 0px;
}
.myPicBox {
  width: 100%;
  height: 90vh;
}
.myPic {
  width: 100%;
  height: 100%;
}
.myName {
  text-align: center;
}
.myName span {
  display: block;
}
.myName span:first-child {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: 600;
}
.myResume {
  vertical-align: middle;
}
</style>
