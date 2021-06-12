<template>
  <div id="main" ref="main">
    <Header title="YY影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch" @click="showCurtain">
          {{qu}} <i class="iconfont icondown"></i>
        </div>
        <div class="brand_switch">
          品牌 <i class="iconfont icondown"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icondown"></i>
        </div>
      </div>
      <cinema-List @childList="childList" :changeQu = 'changeQu' :key="timer"></cinema-List>
      <div class="curtain" v-show="curtain" @click="hideCurtain">
          <div class="city_curtain">
            <ul class="city-list">
              <li class="city-item" v-for="(place,key) in cinemaList" :key="key">
                <div @click="getQu(key)" v-bind:class="{selected:key == qu}">
                  {{key}}
                </div>
              </li>
              <!-- <li class="city-item">
                <div>
                  静安区
                </div>
                </li>
              <li class="city-item">
                <div>
                  静安区
                </div>
              </li>
              <li class="city-item">
                <div>
                  静安区
                </div>
              </li>
              <li class="city-item">
                <div>
                  静安区
                </div>
              </li> -->
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import cinemaList from '@/components/CinemaList'
export default {
  name: 'Cinema',
  data() {
    return {
      curtain: false,
      cinemaList: {},
      timer: '',
      changeQu: [],
      qu: '全城'
    }
  },
  methods: {
    getQu(qu) {
      this.qu = qu
      this.changeQu = this.cinemaList[qu]
      this.timer = new Date().getTime()// 通过在父组件动态改变vue子组件的key值来实现刷新子组件
    },
    // 把子组件传来电影院信息 重新改造成我们要的数据
    childList(cinemalist) {
      // 存储每一次传过来的临时信息
      const temp = {}
      temp['全城'] = cinemalist
      // this.cinemaList['区'] = []
      for (var cinema of cinemalist) {
        // this.cinemaList['区'].push(cinema.districtName)
        if (!temp[cinema.districtName]) {
          temp[cinema.districtName] = []
          temp[cinema.districtName].push(cinema)
        } else {
          temp[cinema.districtName].push(cinema)
        }
      }
      this.cinemaList = temp
    },

    // 显示幕布
    showCurtain () {
      this.curtain = !this.curtain
      // console.log(this.cinemaList, 'zichuanfu')
    },

    // 隐藏幕布
    hideCurtain () {
      this.curtain = false
    }
  },
  components: {
    Header,
    cinemaList
  },
  mounted() {
    this.$refs.main.style.height = document.documentElement.clientHeight + 'px'
  },
  activated() {
    this.curtain = false
    this.qu = '全城'
  }
}
</script>
<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.curtain{
    background: rgba(0,0,0,0.4);
    position:fixed;
    top:97px;
    bottom: 0;
    width: 100%;
}
.city_curtain{
  width: 100%;
  background: #fff;
  opacity: 1;
}
.city-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
  margin: 0 0 0 10px;
}
.city-list .city-item div{
    position: relative;
    color: #797d82;
    border-radius: 3px;
    text-align: center;
    height: 30px;
    line-height: 27px;
}
.city-list .city-item div:after{
    content: " ";
    transform: scale(.5);
    position: absolute;
    border: 1px solid rgba(210,214,220,.5);
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
.city-list .city-item .selected{
  color: #ff5f16;
}
.city-list .city-item .selected:after {
    content: " ";
    transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
.city-item{
    font-size: 12px;
    display: inline-block;
    width: 81.3px;
    padding-bottom: 15px;
    padding-right: 10px;
    height: 30px;
}
</style>
