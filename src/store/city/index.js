const state = {
  name: window.localStorage.getItem('nowName'),
  id: window.localStorage.getItem('nowId')

}
const actions = {

}
const mutations = {
  CITY_INFO(state, data) {
    state.name = data.name
    state.id = data.id
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
