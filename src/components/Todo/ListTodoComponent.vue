<template>
  <a-table :columns="columns" :data-source="todoList">
    <span slot="status" slot-scope="status">
      <a-tag
        :color="
          status === true ? 'green' : 'volcano',
        "
      >
        {{ status.toString().toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a-icon
        type="edit"
        theme="twoTone"
        two-tone-color="#ffc53d"
        :style="{ fontSize: '24px' }"
        @click="editTodo(record.id)"
      />
      <a-divider type="vertical" />
      <a-popconfirm
        v-if="todoList.length"
        title="Bạn có chắc muốn xóa?"
        @confirm="() => deleteHandler(record.id)"
      >
        <a-icon
          type="delete"
          theme="twoTone"
          two-tone-color="#f5222d"
          :style="{ fontSize: '24px' }"
        />
      </a-popconfirm>
    </span>
  </a-table>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
const columns = [
  {
    dataIndex: "id",
    key: "id",
    title: "ID",
  },

  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  data() {
    return {
      columns,
    };
  },

  computed: {
    ...mapGetters(["todoList"]),
  },

  methods: {
    ...mapMutations(["deleteTodo"]),
    deleteHandler(id) {
      this.deleteTodo(id);
      this.$message.success("Xóa thành công!");
    },
    editTodo(id) {
      this.$router.push({ name: "edit-todo", params: { id: id } });
    },
  },
};
</script>

<style scoped>
i:hover {
  cursor: pointer;
}
</style>