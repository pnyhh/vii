<template>
  <div id="app">
    <mt-tabbar v-model="activeTab">
      <mt-tab-item id="map">
        <i class="tab tab-map" v-bind:class="{ 'tab-map-active': activeTab == 'map' }"></i>
        {{ $t('tab.map') }}
      </mt-tab-item>
      <mt-tab-item id="resource">
        <i class="tab tab-resource" v-bind:class="{ 'tab-resource-active': activeTab == 'resource' }"></i>
        {{ $t('tab.resource') }}
      </mt-tab-item>
      <mt-tab-item id="order">
        <i class="tab tab-order" v-bind:class="{ 'tab-order-active': activeTab == 'order' }"></i>
        {{ $t('tab.order') }}
      </mt-tab-item>
      <mt-tab-item id="me">
        <i class="tab tab-me" v-bind:class="{ 'tab-me-active': activeTab == 'me' }"></i>
        {{ $t('tab.me') }}
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'app',
      msg: 'VUE Application',
      activeTab: 'resource',
      param:{
        id: 1,
        text:'I`m been send from that page'
      }
    }
  },
  watch: {
    activeTab:function (val) {
      switch (val){
        case 'map': this.$router.push({ name: 'map',params: {param: this.param}});break;
        case 'resource': this.$router.push('/');break;
        case 'order': this.$router.push('order');break;
        case 'me': this.$router.push('me');break;
        default: return null;
      }
    }
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .14rem;
}
.tab{
  display: block;
  margin: 0 auto;
  background-image: url('assets/img/icons.png');
  background-size: 3.08rem 4.64rem;
  background-repeat: no-repeat;
  width: .35rem;
  height: .35rem;
}
.tab-map{
  background-position: -.26rem -.49rem;
}
.tab-resource{
  background-position: -.84rem -.49rem;
}
.tab-order{
  background-position: -1.43rem -.49rem;
}
.tab-me{
  background-position: -2.01rem -.49rem;
}
.tab-map-active{
  background-position: -.26rem -1.22rem;
}
.tab-resource-active{
  background-position: -.84rem -1.22rem;
}
.tab-order-active{
  background-position: -1.43rem -1.22rem;
}
.tab-me-active{
  background-position: -2.01rem -1.22rem;
}
</style>
