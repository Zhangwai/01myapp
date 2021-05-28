<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
<style lang="scss">

</style>
