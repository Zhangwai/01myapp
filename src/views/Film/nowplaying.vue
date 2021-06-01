<template>
    <div class="film_body">
        <ul>
            <li v-for="item in filmList" :key="item.filmId">
                <div class="pic_show"><img :src="item.poster" alt=""></div>
                <div class="info_list">
                    <h2>{{item.name}} <span style="font-size: 9px;color: #fff;background-color: #d2d6dc;height: 14px;
                    line-height: 14px;padding: 0 2px;border-radius: 2px;">{{item.item.name}}</span></h2>
                    <p>观众评分<span class="grade">{{item.grade}}</span></p>
                    <p>主演:{{item.actors | actorFilter}}</p>
                    <p>{{item.nation}} | {{item.runtime}} 分钟</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'NowPlaying',
  data() {
    return {
      filmList: []
    }
  },
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=6395640',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16189287264989141385216001","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.filmList = res.data.data.films
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
.film_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.film_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.film_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.film_body .btn_mall , .film_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.film_body .btn_pre{ background-color: #3c9fe6;}
.film_body .pullDown{ margin:0; padding:0; border:none;}
</style>
