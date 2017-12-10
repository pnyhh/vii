<template>
  <div class="hello">
    <img src="../../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <mt-button type="primary" @click.native="testMint">Mint-UI</mt-button>
    <h2>I18N</h2>
    <ul>
      <li>{{ $t('tr.hello') }}</li>
      <li>{{ $t('tr.world') }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'An VUE Application'
    }
  },
  methods:{
    testMint(){
      this.$toast({
        message: 'Mint-UI working...',
        duration: 2000
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@keyframes title {
  0% {color: #000000}
  20% {color: #777777}
  40% {color: #FF0000}
  60% {color: #00FF00}
  80% {color: #0000FF}
  100% {color: #ffc107}
}
.hello img{
  margin-top: .8rem;
  margin-bottom: .2rem;
}
.hello h1{
  color: #000;
  animation: title 10s infinite alternate;
  margin-bottom: .2rem;
}
.hello h2{
  margin-top: .4rem;
}
</style>
