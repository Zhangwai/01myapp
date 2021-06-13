<template>
       <div class="register_body" v-show="this.$store.state.showUser.showuser">
        <div>
            <input class="register_text" type="text" placeholder="账号/手机号/Email" v-model="username">
        </div>
        <div>
            <input class="register_text" type="password" placeholder="请输入您的密码" v-model="pwd">
        </div>
        <div>
            <input class="register_text" type="password" placeholder="请确认您的密码" v-model="pwdAgain">
        </div>
        <div class="register_btn">
            <input type="submit" @click="Register" value="注册">
        </div>
        <div class="register_link">
            <a href="#" @click="changeUser">去登录</a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      pwd: '',
      pwdAgain: ''

    }
  },
  methods: {
    changeUser() {
      this.$store.commit('showUser/changeShower')
    },
    Register() {

    }
  }

}
</script>
<style scoped>
    .register_body{width: 100%;}
    .register_body .register_text{width: 100%;height: 40px;border: none;border-bottom: 1px #ccc solid;margin-bottom: 5px;outline: none;text-indent: 10px;}
    .register_body .register_btn{height: 50px;margin: 10px;}
    .register_body .register_btn input{width: 100%;height: 100%;background: #e54847;border-radius: 3px;border: none;display: block;color: #fff;font-size: 20px;}
    .register_body .register_link{display: flex;justify-content: space-between;}
    .register_body .register_link a{text-decoration: none;margin: 0 5px;font-size: 12px;color: #e54847;}
</style>
