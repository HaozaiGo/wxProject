<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span><smile-outlined /> Name</span>
      </template>
      <template #tags="{ text: tags }">
        <span>
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'   
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
  </div>
</template>

<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle", customRender: "name" },
  },
  
  {
    title: "描述",
    dataIndex: "describe",
    key: "describe",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Tags",
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
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      data: [
        {
          key: "1",
          name: "成都",
          age: 32,
          describe: "第一首吉他曲",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "青花瓷",
          age: 42,
          describe: "听不懂但又好听",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          describe: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      columns,
    };
  },
};
</script>
<style>
</style>