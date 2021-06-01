import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios
// nowplaying页面过滤actors
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
// 图片路径修改
Vue.filter('setWH', (url, arg) => {
  return url.replace('w.h', arg)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
