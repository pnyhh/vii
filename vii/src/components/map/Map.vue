<template>
  <div>
    <mt-header fixed v-bind:title="title"></mt-header>
    <div id="mapContainer" v-bind:style="{ width:'100%',height: H + 'px',marginTop: '40px' }"></div>
  </div>
</template>

<script>
    export default {
      data () {
          return {
            title: "高德地图",
            W: document.documentElement.clientWidth,
            H: 0,
            lng: 116.39,
            lat: 39.9,
            stateParams:this.$route.params
          }
      },
      mounted(){
        let tabbarH = window.getComputedStyle(document.getElementsByClassName('mint-tabbar')[0],null).height;
        this.H = document.documentElement.clientHeight - parseFloat(tabbarH) - 40;
        this.initMap();
      },
      methods:{
        initMap(){
          let that = this;
          let map = new AMap.Map('mapContainer',{
            resizeEnable: true,
            zoom: 13,
            center: [that.lng,that.lat]
          });
          map.plugin('AMap.Geolocation', function () {
            let geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 10000,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
              buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            function onComplete(obj) {
              that.lng = obj.position.getLng();
              that.lat = obj.position.getLat();
            }
            function onError(obj) {
              console.error(obj.message)
            }
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
          });
          AMap.plugin(['AMap.ToolBar','AMap.Scale'],
            function(){
              map.addControl(new AMap.ToolBar());

              map.addControl(new AMap.Scale());

            });
        }
      }
    }
</script>

<style scoped>

</style>
