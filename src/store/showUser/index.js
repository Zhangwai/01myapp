const state = {
  showuser: false

}
const actions = {

}
const mutations = {
  changeShower(state) {
    state.showuser = !state.showuser
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
