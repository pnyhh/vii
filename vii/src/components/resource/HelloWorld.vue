<template>
  <div class="hello">
    <img src="../../assets/img/logo.png">
    <h2></h2>
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
      msg: 'VUE Application'
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
</style>
