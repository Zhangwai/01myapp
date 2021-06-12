<template>
    <div>
        <Header title="YY影院"></Header>
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
