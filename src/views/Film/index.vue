<template>
    <div id="main">
        <Header></Header>
        <div id="content">
            <div class="film_menu">
                <router-link tag="div" to="/film/city" class="city_name">
                    <span>台州</span><i class="iconfont icondown"></i>
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
export default {
  name: 'Film',
  components: {
    Header
  }
}
</script>
<style scoped>
#main {padding-bottom: 52px;}
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
