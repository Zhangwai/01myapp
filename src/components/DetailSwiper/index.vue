<template>
    <div class="swiper-container" :class="swiperclass">
        <ul class="swiper-wrapper">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css
export default {
  name: 'DetailSwiper',
  props: {
    preslide: {
      type: Number,
      default: 1
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted() {
    console.log(this.swiperclass)
    // console.log(this.preslide)
    new Swiper('.' + this.swiperclass, {
      slidesPerView: this.preslide,
      spaceBetween: 10,
      freeMode: true,
      freeModeSticky: true
    })
  }
}
</script>
<style scoped>

</style>
