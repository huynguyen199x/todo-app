import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from './components/LoginComponent.vue' 

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/login', component: LoginComponent}
    ]
})