<template>
    <div>
        <Header title="我的Y颜"></Header>
        <div id="content">
            <Login></Login>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/views/Login'
export default {
  name: 'Center',
  components: {
    Header,
    Login
  }

}
</script>
