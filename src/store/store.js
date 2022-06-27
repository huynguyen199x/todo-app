import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todoList: [
            { id: 1, name: 'Todo1', status: true },
            { id: 2, name: 'Todo2', status: false },
            { id: 3, name: 'Todo3', status: false },
        ],
    },

    getters: {
        todoList: state => state.todoList,
    },

    mutations: {
        addATodo(state, todo) {
            state.todoList.push(todo);
        }
    }
});

