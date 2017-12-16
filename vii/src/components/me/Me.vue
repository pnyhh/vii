<template>
  <div>
    <mt-header fixed v-bind:title="title"></mt-header>
    <div id="ctrl" v-if="!loginStatus">
      <mt-button type="primary" plain="plain" @click.native="goLogin">{{ $t( 'tr.login' ) }}</mt-button>
      <mt-button type="default" plain="plain" @click.native="register">{{ $t( 'tr.register' ) }}</mt-button>
    </div>
    <div id="profile" v-if="loginStatus">
      <mt-cell :title="$t( 'user.nickname' )" :value="user.nickname"></mt-cell>
      <mt-cell :title="$t( 'user.gender' )" :value="user.gender?'男':'女'"></mt-cell>
      <mt-cell :title="$t( 'user.constellation' )" :value="user.constellation.toUpperCase()"></mt-cell>
      <mt-cell :title="$t( 'user.birth' )" :value="user.birth"></mt-cell>
      <mt-cell :title="$t( 'user.region' )" :value="user.province+' '+user.city+' '+user.district"></mt-cell>
      <mt-cell :title="$t( 'user.summary' )" :label="user.summary"></mt-cell>
      <mt-button class="logout" type="danger" size="large" plain="plain" @click.native="logout">{{ $t( 'tr.logout' ) }}</mt-button>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            title: this.$t('tab.me'),
            loginStatus: this.$Storage.getStorage('login')?this.$Storage.getStorage('login').status:0,
            login_name:null,
            user:this.$root.user,
            loginObj:null
          }
        },
        mounted(){
          if(this.$root.loginStatus && !this.$root.user){
            this.loginObj = this.$Storage.getStorage('login');
            this.login();
          }
        },
        methods:{
          goLogin() {
            this.$router.push('/login')
          },
          register(){
            this.$router.push('/register')
          },
          logout(){
            var that = this;
            this.$Storage.removeStorage('login');
            this.$root.loginStatus = 0;
            this.$root.user = null;
            setTimeout(function() {
              that.loginStatus = 0;
            },1000)
          },
          getProfile(){
            var that = this;
            this.$axios({
              method: 'get',
              url:this.$Config.SERVER + this.$Config.GET_PROFILE,
              params:{
                login_name: that.loginObj.login_name
              }
            })
            .then(function (response) {
              let res = response.data;
              if(res.header.opCode){
                that.user = res.body.data;
                that.$root.user = res.body.data;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
          },
          login(){
            var that = this;
            this.$axios({
              method: 'post',
              url:this.$Config.SERVER + this.$Config.LOGIN,
              data:this.$qs.stringify({
                login_name: that.loginObj.login_name,
                password: that.loginObj.password
              })
            })
              .then(function (response) {
                let res = response.data;
                if(res.header.opCode && res.body.data === 'auth success'){
                  that.getProfile();
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        }
    }
</script>

<style>
  #ctrl{
    margin-top: 2rem;
  }
  #profile{
    margin-top: .5rem;
  }
  .mint-cell-title{
    text-align: left;
  }
  .logout{
    margin-top: .5rem;
  }
</style>
