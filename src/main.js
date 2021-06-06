import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局组件
import Scroller from '@/components/Scroll'
import Loading from '@/components/Loading'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(ElementUI)
Vue.use(MintUI)

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
Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
