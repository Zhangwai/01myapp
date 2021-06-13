<template>
    <div>
        <Header title="YY影院"></Header>
        <div id="content">
            <Login></Login>
            <Register></Register>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/views/Login'
import Register from '@/views/Register'
export default {
  name: 'Center',
  components: {
    Header,
    Login,
    Register
  }

}
</script>
