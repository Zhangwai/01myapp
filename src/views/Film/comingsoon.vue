<template>
    <div class="film_body">
        <ul>
            <li v-for="item in comingList" :key="item.filmId">
                <div class="pic_show"><img :src="item.poster" alt=""></div>
                <div class="info_list">
                    <h2>{{item.name}} <span style="font-size: 9px;color: #fff;background-color: #d2d6dc;height: 14px;
                    line-height: 14px;padding: 0 2px;border-radius: 2px;">{{item.item.name}}</span></h2>
                    <p>主演:{{item.actors | actorFilter}}</p>
                    <p>上映日期: {{item.premiereAt | dateFilter}}</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
Vue.filter('dateFilter', (data) => {
  // const date = new Date(data * 1000).getFullYear() + '-' + new Date(data * 1000).getMonth() + '-' + new Date(data * 1000).getDate()
  // return date
  return moment(data * 1000).format('YYYY-MM-DD')
})
export default {
  name: 'Comingsoon',
  data() {
    return {
      comingList: []
    }
  },
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2867953',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16189287264989141385216001","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.comingList = res.data.data.films
    })
  }
}
</script>
<style scoped>
#content .film_body{ flex:1; overflow:auto;}
.film_body ul{ margin:0 12px; overflow: hidden;}
.film_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.film_body .pic_show{ width:64px; height: 90px;}
.film_body .pic_show img{ width:100%;}
.film_body .info_list { margin-left: 10px; flex:1; position: relative;}
.film_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.film_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.film_body .btn_mall , .film_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.film_body .btn_pre{ background-color: #3c9fe6;}
</style>
