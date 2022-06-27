<template>
  <a-form :form="form" :layout="formLayout" @submit="submitHandler">
    Edit
    <a-form-item
      label="ID"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input-number
        readonly
        v-decorator="[
          'id',
          {
            initialValue: todo.id,
            rules: [{ required: true, message: 'Vui lòng nhập tên!' }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item
      label="Tên"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        placeholder="Nhập tên"
        v-decorator="[
          'name',
          {
            initialValue: todo.name,
            rules: [{ required: true, message: 'Vui lòng nhập tên!' }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item
      label="Status"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-checkbox :defaultChecked ="todo.status"
        v-decorator="[
          'status',
          {
            initialValue: todo.status,
          },
        ]"
      >
      </a-checkbox>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
     <a-button type="danger" html-type="submit"> Chỉnh sửa</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      formLayout: "horizontal",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "edit_todo_form" });
  },
  computed: {
    ...mapGetters(["todoList"]),
    todo() {
      var id = this.$route.params.id;
      var todoIndex = this.todoList.findIndex((todo) => todo.id == id);
      return this.todoList[todoIndex];
    },
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    ...mapMutations(["setTodo"]),
    submitHandler(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            console.log(values);
          this.setTodo(values);
          this.$router.push({'name': 'list-todo'});
          this.$message.success('Chỉnh sửa thành công!');
        }
      });
    },
  },
};
</script>