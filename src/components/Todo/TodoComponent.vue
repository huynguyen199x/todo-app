<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline">
        <a-menu-item>
          <router-link :to="{ name: 'list-todo' }">
            <a-icon type="user" />
            <span class="nav-text"> Danh sách </span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link :to="{ name: 'add-todo' }">
            <a-icon type="video-camera" />
            <span class="nav-text"> Thêm </span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="textalign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive {
  height: 100%;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>


<style scoped>
a {
  color: rgb(224, 209, 209);
}
a:hover {
  color: white;
}
</style>


