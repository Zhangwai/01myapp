<template>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroller',
  mounted() {
    // new BScroll(this.$refs.wrapper, {
    //   click: true
    // })
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
      this.scroll.on('touchEnd', pos => {
        this.scroll.refresh()
        console.log(1)
      })
    })
  },
  methods: {
    ToScrollTop(y) {
      this.scroll.scrollTo(0, -y)
    }
  }
}
</script>
<style scoped>
    .wrapper{height: 100% ;width: 100%;}
</style>
