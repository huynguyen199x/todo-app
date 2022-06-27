<template>
  <a-form :form="form" class="login-form" @submit="handleSubmit">
    <h2>Đăng ký</h2>
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập tên người dùng!' },
            ],
          },
        ]"
        placeholder="Tên người dùng"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item has-feedback>
      <a-input-password
        v-decorator="[
          'password',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập mật khẩu!' },
              {
                validator: validateToConfirmPassword,
              },
            ],
          },
        ]"
        type="password"
        placeholder="Mật khẩu"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-item>

    <a-form-item has-feedback>
      <a-input-password
        v-decorator="[
          'confirm',
          {
            rules: [
              { required: true, message: 'Vui lòng nhập mật khẩu!' },
              {
                validator: compareToPassword,
              },
            ],
          },
        ]"
        type="password"
        placeholder="Mật khẩu"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Đăng ký
      </a-button>
      <router-link :to="{ path: '/' }">Đăng nhập</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import axios from 'axios';
export default {
  name: "RegisterComponent",

  data() {
    return {};
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register_form" });
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          var data = {
            email: values["username"],
            password: values["password"],
          };
          console.log(data);
          axios
            .post(`http://localhost:8000/auth/register`, data)
            .then((response) => {
              console.log(response);
            })
            .catch((e) => {
              console.log(e);
            });
          console.log("Received values of form: ", values);
        }
      });
    },
    compareToPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Mật khẩu không khớp!");
      } else {
        callback();
      }
    },
    validateToConfirmPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
};
</script>
<style>
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>