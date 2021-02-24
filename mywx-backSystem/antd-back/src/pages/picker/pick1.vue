<template>
  <div>
    <a-table :columns="columns" :data-source="pick1List">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span><smile-outlined /> Name</span>
      </template>
      <template #tags="{ text: Tags }">
        <span>
          <a-tag
            v-for="tag in Tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
        </span>
      </template>
    </a-table>
    <div class="addDiv">
      <a-button type="primary" large class="addList" @click="showModel"
        >添加</a-button
      >
    </div>

    <a-modal v-model:visible="visible" title="请输入" @ok="handleOk">
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="Name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="描述">
          <a-input v-model:value="formState.description" />
        </a-form-item>
        <a-form-item label="Tags">
          <a-input v-model:value="formState.tags" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { ref, reactive, toRaw, onMounted, toRefs} from "vue";
import { message } from "ant-design-vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { pick1Upload, getPick1Data } from "@/api/api";

const columns = [
  {
    dataIndex: "Name",
    key: "Name",
    slots: { title: "customTitle", customRender: "name" },
  },

  {
    title: "描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "tags",
    key: "tags",
    dataIndex: "tags",
    slots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    slots: { customRender: "action" },
  },
];

export default {
  setup() {
    const visible = ref(false);
    let state = reactive({
       pick1List : [
        {
          // key: "1",
          Name: "成都",
          description: "第一首吉他曲",
          tags: ["nice", "developer"],
        },
        {
          // key: "2",
          Name: "青花瓷",
          description: "听不懂但又好听",
          tags: ["loser"],
        },
      ]
    })
    const showModel = () => {
      visible.value = true;
    };
    const Pick1Data = async () => {
      const result = await getPick1Data();
      console.log(result.data)
      // state.pick1List = result.data;
    };
    const handleOk = () => {
      // 提交pick1
      pick1Upload(toRaw(formState)).then((res) => {
        res.status == 200
          ? message.success("提交成功")
          : message.error("提交失败");
        console.log(res);
      });
      // console.log(toRaw(formState));
      visible.value = false;
    };
    const formState = reactive({
      name: "",
      description: "",
      tags: "",
    });

    onMounted(Pick1Data);

    return {
      // ...toRefs(state),
      ...state,
      visible,
      showModel,
      handleOk,
      formState,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      // data: [
      //   {
      //     // key: "1",
      //     name: "成都",
      //     describe: "第一首吉他曲",
      //     tags: ["nice", "developer"],
      //   },
      //   {
      //     // key: "2",
      //     name: "青花瓷",
      //     describe: "听不懂但又好听",
      //     tags: ["loser"],
      //   },
      //   {
      //     // key: "3",
      //     name: "Joe Black",
      //     describe: "Sidney No. 1 Lake Park",
      //     tags: ["cool", "teacher"],
      //   },
      // ],
      columns,
    };
  },
};
</script>
<style scoped>
.addDiv {
  text-align: center;
}
.addList {
  margin: 30px auto;
}
</style>