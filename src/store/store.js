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
        addTodo(state, todo) {
            var id;
            try {
                id = state.todoList[state.todoList.length - 1]["id"] + 1;
            }
            catch (err) {
                id = 1;
            }
            var todoObj = { id: id, ...todo }
            state.todoList.push(todoObj);
        },

        deleteTodo(state, id) {
            const data = [...state.todoList];
            state.todoList = data.filter((item) => item.id !== id);
        },

        setTodo(state, todoEdited) {
            var todoIndex = state.todoList.findIndex((todo => todo.id == todoEdited.id));
            state.todoList[todoIndex] = todoEdited;
        }
    }
});

