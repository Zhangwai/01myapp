<template>
    <div id="detailContrainer" class="slide-enter-active" v-if="detailMoive">
        <Header :title="detailMoive.name">
            <i class="iconfont iconfanhui" @click="handleToBack"></i>
        </Header>
        <div id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{ backgroundImage: 'url('+ detailMoive.poster +')' }"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img" :style="{ backgroundImage:'url('+detailMoive.poster+')' }"
                    style="background-size:cover;background-position:center;">
                        <!-- <img :src="detailMoive.poster" alt=""> -->
                    </div>
                    <div class="detail_list_info">
                        <h2><span>{{detailMoive.name}}</span><span>{{detailMoive.item.name}}</span></h2>
                        <p>导演: {{detailMoive.director}}</p>
                        <p>{{detailMoive.grade}}</p>
                        <p>{{detailMoive.category}}</p>
                        <p>{{detailMoive.nation}} | {{detailMoive.runtime}} 分钟</p>
                        <p>{{detailMoive.premiereAt | dateFilter}} 上映</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{detailMoive.synopsis}}</p>
            </div>
            <div class="actors">
              <p>
              演职人员
              </p>
              <detail-swiper class="swiper-container" swiperclass="detail_player" :preslide="4">
                      <li class="swiper-slide" v-for="(item,index) in detailMoive.actors" :key="index">
                          <div>
                              <img :src="item.avatarAddress" alt="">
                          </div>
                          <p>{{item.name}}</p>
                          <p>{{item.role }}</p>
                      </li>
              </detail-swiper>
            </div>
            <div class="photos">
              <p>
              剧照
              </p>
              <detail-swiper class="swiper-container" swiperclass="detail_photos" :preslide="2">
                    <li class="swiper-slide" v-for="(item,index) in detailMoive.photos" :key="index">
                        <div :style=" {backgroundImage:'url('+item+')'} " style="height:100px;background-size:cover;background-position:center;"></div>
                    </li>
              </detail-swiper>
            </div>
        </div>
        <footer>选购坐票</footer>
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import DetailSwiper from '@/components/DetailSwiper'
import moment from 'moment'
Vue.filter('dateFilter', (data) => {
  // const date = new Date(data * 1000).getFullYear() + '-' + new Date(data * 1000).getMonth() + '-' + new Date(data * 1000).getDate()
  // return date
  return moment(data * 1000).format('YYYY-MM-DD')
})
export default {
  name: 'Detail',
  components: {
    Header,
    DetailSwiper
  },
  data() {
    return {
      detailMoive: null
    }
  },
  props: ['filmId'],
  methods: {
    handleToBack() {
      // 返回上一个页面
      this.$router.back()
    }
  },
  mounted() {
    // console.log(this.$route.params.filmId, this.filmId)
    this.axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.filmId}&k=5736785`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16189287264989141385216001"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      console.log(res.data)
      if (res.data) {
        this.detailMoive = res.data.data.film
        // this.$nextTick(() => {
        //   new Swiper(this.$refs.detail_photos, {
        //     slidesPerView: '3',
        //     freeMode: true,
        //     freeModeSticky: true
        //   })
        // })
      }
    })
  }
}
</script>
<style scoped>
#detailContrainer{position: absolute;left: 0;top: 0;z-index: 100;width: 100%;min-height:100%;background-color: #f4f4f4;}
/* #detailContrainer.slide-enter-active{ animation:.3s slideMove;}
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
} */
#content.contentDetail{display: block;margin-bottom: 0;}
#content .detail_list{height: 200px;width: 100%;position: relative;overflow: hidden;}
.detail_list .detail_list_bg{width: 100%;height:100%;background: 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
/* .detail_list .detail_list_img img{ width:100%; height: 100%;} */
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info h2 span{display: inline-block;vertical-align: middle;}
.detail_list .detail_list_info h2 span:nth-of-type(1){line-height: 40px;margin-right: 10px;}
.detail_list .detail_list_info h2 span:nth-of-type(2){font-size: 9px;color: #fff;background-color: #d2d6dc;height: 14px;line-height: 14px;padding: 0 2px;border-radius: 2px;display: inline-block;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
#content .detail_intro{ padding: 10px;font-size: 13px;color: #797d82;background-color: #fff;}
#content .actors ,#content .photos {background-color: #fff;margin-top: 20px;}
#content .actors > p,#content .photos > p{font-size: 16px;padding: 20px;}
#content .detail_player{ margin: 0px 20px;}
#content .detail_photos{margin: 0px 20px 60px 20px;}
.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 12px;}
.detail_player .swiper-slide img,.detail_photos .swiper-slide img{ width:100%; margin-bottom: 5px;}
.detail_player .swiper-slide p {overflow: hidden;white-space: nowrap; text-overflow:ellipsis;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
/* .detail_photos .swiper-slide{} */
#detailContrainer footer{width: 100%;height: 49px;background-color: #ff5f16;text-align: center;color: #fff;line-height: 49px; position: fixed;left: 0;bottom: 0;z-index: 3;}
</style>
