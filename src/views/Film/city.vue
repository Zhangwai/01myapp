<template>
    <div class="city_body"  ref="mychild">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList" :key="item.cityId">{{item.name}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="item in cityList" :key="item.index">
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="itemList in item.list" :key="itemList.cityId">{{itemList.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
          <ul>
            <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>
          </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'City',
  data() {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted() {
    this.$refs.mychild.style.height = document.documentElement.clientHeight - 149 + 'px'
    // console.log(this.$refs.mychild.style)
    axios({
      url: 'https://m.maizuo.com/gateway?k=2600174',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16189287264989141385216001"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
    //   console.log(res.data.data.cities)
      // [{index: 'A',list: [{},{}]}]
      var { cityList, hotList } = this.formatCityList(res.data.data.cities)
      this.cityList = cityList
      this.hotList = hotList
      console.log(this.cityList, this.hotList)
    })
  },
  methods: {
    formatCityList(cities) {
      var cityList = []
      var hotList = []
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      for (var n = 0; n < cities.length; n++) {
        if (cities[n].isHot === 1) {
          hotList.push(cities[n])
        }
      }
      for (var j = 0; j < letterArr.length; j++) {
        const arr = cities.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        if (arr.length > 0) {
          cityList.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      return {
        cityList,
        hotList
      }
    },
    handleToIndex(index) {
      // console.log(this.$refs.city_sort.getElementsByTagName('h2'))
      console.log('222', this.$refs.city_sort.parentNode.scrollTop)
      var h2 = this.$refs.city_sort.getElementsByTagName('h2')
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
      console.log('111', this.$refs.city_sort.parentNode.scrollTop)
    }
  }
}
</script>

<style scoped>
#content .city_body{margin-top: 97px;display: flex; width:100%;position: absolute; top: 0; bottom: 0; }
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px ;display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
