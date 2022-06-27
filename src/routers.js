import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from './components/Auth/LoginComponent.vue'
import RegisterComponent from './components/Auth/Register.vue'
import TodoComponent from './components/Todo/TodoComponent.vue'
import EditTodoComponent from './components/Todo/EditTodoComponent.vue'
import AddTodoComponent from './components/Todo/AddTodoComponent.vue'
import ListTodoComponent from './components/Todo/ListTodoComponent.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/', component: LoginComponent },
        { path: '/register', component: RegisterComponent },
        {
            name: 'todo', path: '/todo', props: true, component: TodoComponent,
            children: [
                {
                    name: 'list-todo', path: '/', props: true, component: ListTodoComponent,
                },
                {
                    name: 'edit-todo', path: '/edit/:id', props: true, component: EditTodoComponent,
                },
                {
                    name: 'add-todo', path: '/add', props: true, component: AddTodoComponent,
                }
            ]
        },  
    ],
    // linkExactActiveClass: "active",
})