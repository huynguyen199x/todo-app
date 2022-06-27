<template>
  <a-form :form="form" class="login-form" @submit="handleSubmit">
    <h2>Đăng nhập</h2>
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
    <a-form-item>
      <a-input-password
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }] },
        ]"
        type="password"
        placeholder="Mật khẩu"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-item>
    <a-form-item label="">
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Lưu mật khẩu
      </a-checkbox>
      <a class="login-form-forgot" href=""> Quên mật khẩu </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Đăng nhập
      </a-button>
      Hoặc
      <router-link :to="{ path: 'register' }">Đăng ký ngay!</router-link>
      <!-- <a href="/register">  </a> -->
    </a-form-item>
  </a-form>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponent",

  data() {
    return {};
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login_form" });
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
            .post(`http://localhost:8000/auth/login`, data)
            .then(() => {
              this.$router.push({ name: "todo" });
            })
            .catch((e) => {
              console.log(e);
            });
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
<style>
.login-form {
  max-width: 300px;
  margin: auto;
  text-align: center;
  margin: 50px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>