<!--
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-12 17:35:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\pages\picker\pick2.vue
-->
<template>
  <div>
    <a-card hoverable style="width: 300px">
      <!-- 封面 -->
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template class="ant-card-actions" #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" @click="showModal" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>
    <!-- 编辑添加 -->
    <div>
      <a-modal :visible="visible" title="Basic Modal" @ok="handleOk">
        <p>
          <!-- 上传头像 -->
          <a-upload
            v-model="queryParams.imgfile"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            :action="request + `/pick2UpLoad`"
            :headers="{ authorization: getToken }"
            :before-upload="beforeUpload"
            @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <!-- todo -->
              <loading-outlined v-if="loading" />
              <plus-outlined v-else />
              <div class="ant-upload-text">上传图片</div>
            </div>
          </a-upload>
        </p>
        <p>{{ getToken }}</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,LoadingOutlined
} from "@ant-design/icons-vue";
import { ref, inject } from "vue";
import { mapGetters } from "vuex";
import { message } from 'ant-design-vue';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LoadingOutlined
  },

  setup() {
    const visible = ref(false);
    const loading = ref(false);
    const imageUrl = '';
    const request = inject("$resquest");
    const showModal = () => {
      visible.value = true;
    };
    //确认
    const handleOk = (e) => {
      visible.value = false;
    };

    const queryParams = {
      imgfile: "",
    };
    const handleChange = (info) => {
      console.log(info)
      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          imageUrl = imageUrl;
          loading.value = false;
        });
        message.success("上传成功");
      }
      if (info.file.status === "error") {
        loading.value = false;
      }
    };

    return {
      visible,
      showModal,
      handleOk,
      queryParams,
      request,
      handleChange,
      loading,
      imageUrl
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
};
</script>

<style>
</style>