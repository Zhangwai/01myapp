import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import showUser from './showUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // showuser: false
  },
  mutations: {
    // changeShower(state) {
    //   state.showuser = !state.showuser
    // }
  },
  actions: {
  },
  modules: {
    city,
    showUser
  }
})
