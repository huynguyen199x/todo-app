<template>
  <a-form :form="form" :layout="formLayout" @submit="submitHandler">
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
            initialValue: '',
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
      <a-checkbox
        v-decorator="[
          'status',
          {
            initialValue: false,
          },
        ]"
      >
      </a-checkbox>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" html-type="submit"> Thêm </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "add_todo_form" });
  },
  computed: {
    ...Vuex.map(['todoList']),
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
    submitHandler(e) {
      console.log("submit", e);
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log("values", values);
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>