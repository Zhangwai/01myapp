<template>
    <div id="main">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Film',
  components: {
    Header
  }
}
</script>
