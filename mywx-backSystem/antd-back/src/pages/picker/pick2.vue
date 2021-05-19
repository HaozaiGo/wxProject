<!--
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-19 17:30:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\pages\picker\pick2.vue
-->
<template>
  <div>
    <!-- 添加按钮 -->
    <div style="text-align: center">
      <a-button type="primary" shape="round" :size="size" @click="addCard">
        <template #icon>
          <PlusOutlined />
          添加
        </template>
      </a-button>
    </div>
    <a-card
      hoverable
      style="width: 300px"
      v-for="(item, index) in state.pick2Cards"
      :key="index"
    >
      <!-- 封面 -->
      <template #cover>
        <img alt="example" :src="request + '/' + item.img" />
        <!-- :src="request + `/20210518093836_1565.png`" -->
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
      <a-modal
        :visible="visible"
        title="Basic Modal"
        @ok="handleOk"
        @cancel="handleCanel"
      >
        <p>
          <!-- 上传头像 -->
          <a-upload
            v-model="state.imgfile"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            :action="request + `/pick2UpLoad`"
            :headers="{ authorization: getToken }"
            :before-upload="beforeUpload"
            @change="handleChange"
          >
            <img v-if="state.imageUrl" :src="state.imageUrl" alt="avatar" />
            <div v-else>
              <!-- todo -->
              <loading-outlined v-if="loading" />
              <plus-outlined v-else />
              <div class="ant-upload-text">上传图片</div>
            </div>
          </a-upload>
        </p>
        <p>{{ getToken }}</p>
        <p><a-input v-model:value="state.disValue" placeholder="输入描述" /></p>
      </a-modal>
    </div>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { ref, inject, reactive, onMounted } from "vue";
import { mapGetters } from "vuex";
import { message } from "ant-design-vue";
import { uploadPick2Drs, getPick2Data } from "@/api/pick2.js";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LoadingOutlined,
    PlusOutlined,
  },

  setup() {
    const request = inject("$resquest");
    const visible = ref(false);
    const loading = ref(false);
    const state = reactive({
      disValue: "", //描述
      pick2Cards: [], //cards
      imageUrl: "", //显示base64图片
      uploadImg: [],
      imgfile: "",
    });
    //获取列表数据
    const getPick2List = () => {
      getPick2Data().then((res) => {
        // console.log(res);
        state.pick2Cards = res.data.pick2List;
      });
    };

    // 打开编辑
    const showModal = () => {
      visible.value = true;
    };
    // 图片提交前勾子
    const beforeUpload = (file) => {
      console.log(file);
      state.uploadImg = [...state.uploadImg, file]; //将file赋值到uploadImg
      return false;
    };
    //确认
    const handleOk = (e) => {
      console.log(state.uploadImg.length);
      if (state.uploadImg.length == 0) {
        message.error("必须上传图片");
        return;
      } else {
        const formData = new FormData();
        state.uploadImg.forEach((file) => {
          formData.append("file", file);
        });
        formData.append("disValue", state.disValue);
        console.log(formData)
        // uploadPick2Drs(formData).then((res) => {
        //   console.log(res);
        // });
        visible.value = false;
      }
    };
    //关闭编辑框
    const handleCanel = () => {
      visible.value = false;
    };
    // addcards
    const addCard = () => {
      visible.value = true;
    };

    const handleChange = (info) => {
      console.log(info);
      if (info.file.status === "uploading") {
        loading.value = true;

        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (base64Url) => {
          state.imageUrl = base64Url;
          loading.value = false;
        });
        message.success("上传成功");
      }
      if (info.file.status === "error") {
        loading.value = false;
      }
    };

    onMounted(() => {
      getPick2List();
    });
    return {
      visible,
      showModal,
      handleOk,
      request,
      handleChange,
      loading,
      state,
      handleCanel,
      addCard,
      beforeUpload,
      getPick2List,
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