<template>
  <div>
    <mt-header fixed v-bind:title="title">
      <mt-button slot="left" @click.native="back"> < </mt-button>
    </mt-header>
    <div id="body">
      <mt-cell title="User">
        <input type="text" v-model="user.login_name">
      </mt-cell>
      <mt-cell title="Phone">
        <input type="text" v-model="user.phone">
      </mt-cell>
      <mt-cell title="Password">
        <input type="password" v-model="user.password">
      </mt-cell>
      <mt-button type="primary" size="large" plain="plain" @click.native="register">{{ $t( 'tr.register' ) }}</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title : this.$t( 'tr.register' ),
        user:{
          login_name: '',
          phone: '',
          password: ''
        }
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      register(){
        var that = this;
        this.$axios({
          method: 'post',
          url:this.$Config.SERVER + this.$Config.REGISTER,
          data:this.$qs.stringify({
            login_name: that.user.login_name,
            password: that.$md5(that.user.password),
            phone: that.user.phone
          })
        })
        .then(function (response) {
          let res = response.data.body;
          if(response.data.header.opCode && response.data.body.data === 'register success'){
            that.$toast({
              message: that.$t( 'tip.registerSuccess' ),
              position: 'middle',
              duration: 2000
            })
            that.$Storage.saveStorage('login',{
              status:1,
              login_name:that.user.login_name,
              password:that.$md5(that.user.password)
            });
            that.$root.loginStatus = 1;
            setTimeout(function(){
              that.$router.push( '/me' );
            },2000)
          }else{
            that.$toast({
              message: that.$t( 'tip.userExist' ),
              position: 'middle',
              duration: 3000
            })
          }
        })
        .catch(function (error) {
          let res = error.data.body;
          that.$toast({
            message: that.$t( 'tip.userExist' ),
            position: 'middle',
            duration: 3000
          })
        })
      }
    }
  }
</script>

<style scoped>
  #body{
    margin-top: .4rem;
  }
</style>
