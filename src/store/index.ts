import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
console.log(store.state.count)
export default store
