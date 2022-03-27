import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data:[]
    },
    mutations: {
        setNewData(state, el) {
            let newArr= []
            newArr.push(...state.data , el)
            state.data = newArr
            localStorage.setItem('listData',JSON.stringify(state.data))
        },
        setData(state, el) {
            state.data = el
            localStorage.setItem('listData',JSON.stringify(state.data))
        },
    },
    actions: {

    },
    getters: {
        getData(state){
            return state.data
        }
    },
    modules: {
    }
})