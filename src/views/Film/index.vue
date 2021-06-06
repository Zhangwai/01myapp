<template>
    <div id="main" ref="main">
        <Header></Header>
        <div id="content">
            <div class="film_menu">
                <router-link tag="div" to="/film/city" class="city_name">
                    <span>{{$store.state.city.name}}</span><i class="iconfont icondown"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/film/nowplaying" class="hot_item" >正在热映</router-link>
                    <router-link tag="div" to="/film/comingsoon" class="hot_item" >即将上映</router-link>
                </div>
                <router-link tag="div" to="/film/search" class="search_entry">
                    <i class="iconfont iconsousuo"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import { messageBox } from '@/components/JS'
export default {
  name: 'Film',
  components: {
    Header
  },
  beforeMount() {
    console.log('before')
    if (!(this.$store.state.city.id && this.$store.state.city.name)) {
      window.localStorage.setItem('nowName', '北京')
      window.localStorage.setItem('nowId', 110100)
      // 第一次设置是数字 所以在setTimeout第一次if中 number！=string 第二次由于上面一行代码保存是字符串所以在刷新后setTimeout中的if是true
      this.$store.commit('city/CITY_INFO', { name: '北京', id: 110100 })
    }
  },
  mounted() {
    this.$refs.main.style.height = document.documentElement.clientHeight + 'px'
    var self = this
    setTimeout(() => {
      console.log('213', this.$store.state.city.id, window.localStorage.getItem('nowId'), this.$store.state.city.id === window.localStorage.getItem('nowId'))
      if (this.$store.state.city.id === window.localStorage.getItem('nowId')) { return }
      messageBox({
        content: '无法获取当前城市定位，请手动选择当前城市',
        cancel: '取消',
        ok: '确定',
        handleCancel() {
          console.log(1227)
        },
        handleOk() {
          console.log(222)
          self.$router.push('/film/city')
        }
      })
    }, 1000)
  }
}
</script>
<style scoped>
#content .film_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.film_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.film_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.film_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.film_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.film_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.film_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.film_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.film_menu .search_entry i{  font-size:24px; color:red;}
</style>
