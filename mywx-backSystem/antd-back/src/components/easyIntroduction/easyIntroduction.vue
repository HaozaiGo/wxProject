<template>
  <div>
    <!-- 上传头像 -->
    <a-upload
      v-model="fileList"
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :action="baseUrl + `/uploadAvatar?user=${userName}`"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <!-- todo -->
        <loading-outlined v-if="loading" />
        <plus-outlined v-else />
        <div class="ant-upload-text">上传头像</div>
      </div>
    </a-upload>
    <!-- 输入介绍 -->
    <div class="innerIntroduction">
      <p class="title">输入简单的介绍</p>
      <p>介绍</p>
      <a-input v-model="value1" placeholder="Basic usage" size="large" class="mya-input" @change="inputChange"/>
      <p class="secondTitle">第二行介绍</p>
      <a-input v-model="value2" placeholder="请输入第二行介绍" size="large" class="mya-input" @change="input2Change"/>
      
      <button class="saveAndUpload" @click="saveInfo({value1:value1, value2:value2})">保存并上传</button>
    </div>
  </div>
</template>

<script>
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { resquest,uploadInfo } from '@/api/api';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components:{
    LoadingOutlined,
    PlusOutlined,
  },
  data(){
    return{
      fileList:[],
      loading:false,
      baseUrl:'',
      imageUrl: '',
      value1:'',
      value2:''
    }
  },
  created(){
    this.baseUrl = resquest;
  },
  methods:{
    handleChange(info){
      if(info.file.status === 'uploading'){
        this.loading = true;
        return
      }
      if(info.file.status === 'done'){
        getBase64(info.file.originFileObj, imageUrl =>{
          this.imageUrl = imageUrl;
          this.loading = false;
        })
        message.success('上传成功')

      }
       if (info.file.status === 'error') {
        this.loading = false;
      }
    },
      beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
    // 提交上传
    async saveInfo(data){
      const uploadResult = await uploadInfo(data)
      uploadResult.status == 200?message.success('修改成功'):message.error('上传失败')
      // console.log(uploadResult)
    },
    inputChange(e){
      const { value } = e.target;
      this.value1 = value;
    },
    input2Change(e){
      const { value } = e.target;
      this.value2 = value;
    },

  },
  computed:{
    userName(){
      return this.$store.state == "" ? this.$router.replace("/") : this.$store.getters.getUserName
    }
  }

};
</script>

<style scoped>
.innerIntroduction{
  padding: 40px 25px;
  box-shadow: 5px 3px 9px 3px rgba(0, 0, 0, 0.3);
}
.mya-input{
  width: 50vw;
}
.saveAndUpload{
  background-color: #69C37B;
  color: #ffffff;
  padding: 15px 35px;
  border: none;
  display: block;
  margin-top: 35px;
  cursor: pointer;
}
.secondTitle{
  margin-top: 25px;
}
.title{
  font-weight: 550;
  font-size: 18px;
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>