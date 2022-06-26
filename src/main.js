import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './routers'

Vue.use(Antd);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
