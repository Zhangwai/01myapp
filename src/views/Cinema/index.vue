<template>
  <div id="main" ref="main">
    <Header title="Y颜影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城 <i class="iconfont icondown"></i>
        </div>
        <div class="brand_switch">
          品牌 <i class="iconfont icondown"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icondown"></i>
        </div>
      </div>
      <cinema-List></cinema-List>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import cinemaList from '@/components/CinemaList'
export default {
  name: 'Cinema',
  components: {
    Header,
    cinemaList
  },
  mounted() {
    this.$refs.main.style.height = document.documentElement.clientHeight + 'px'
  }
}
</script>
<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
