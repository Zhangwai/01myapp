<template>
    <div class="login_body" v-show="!this.$store.state.showUser.showuser">
        <div>
            <input class="login_text" type="text" placeholder="账号/手机号/Email" v-model="username">
        </div>
        <div>
            <input class="login_text" type="password" placeholder="请输入您的密码" v-model="password">
        </div>
        <div class="login_btn">
            <input type="submit" @click="Login" value="登陆">
        </div>
        <div class="login_link">
            <a href="#" @click="changeUser">立刻注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    changeUser() {
      this.$store.commit('showUser/changeShower')
    },

    Login() {
      // console.log(this.username, this.password)
      if (this.username === '') {
        alert('用户名不能为空')
      } else if (this.password === '') {
        alert('密码不能为空')
      } else {
        var url = 'http://192.168.10.109:8080/user/login'
        this.axios.get(url, {
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          if (res.data.code === 10000) {
            alert('登录成功')
            this.$router.push('/')
          } else {
            this.username = ''
            this.password = ''
            alert('登录失败')
          }
        })
      }
    }

  }
}
</script>
<style scoped>
    #content .login_body{width: 100%;}
    .login_body .login_text{width: 100%;height: 40px;border: none;border-bottom: 1px #ccc solid;margin-bottom: 5px;outline: none;text-indent: 10px;}
    .login_body .login_btn{height: 50px;margin: 10px;}
    .login_body .login_btn input{width: 100%;height: 100%;background: #e54847;border-radius: 3px;border: none;display: block;color: #fff;font-size: 20px;}
    .login_body .login_link{display: flex;justify-content: space-between;}
    .login_body .login_link a{text-decoration: none;margin: 0 5px;font-size: 12px;color: #e54847;}
</style>
