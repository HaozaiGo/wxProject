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
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the description">
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>