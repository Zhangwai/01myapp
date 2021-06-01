<template>
  <div>
    <!-- <section> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- </section> -->
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  components: {
    TabBar
  }
}
</script>
<style scoped>
  /* section{padding-bottom: 52px;} */
</style>>
