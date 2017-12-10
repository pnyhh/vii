// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueI18n from 'vue-i18n'
import VueCordova from 'vue-cordova'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueI18n)
Vue.use(VueCordova)

//i18n
const sysLan = window.navigator.language.split('-')[0];
const i18n = new VueI18n({
  locale: sysLan,
  messages:{
    'zh': require('./assets/lang/zh.js'),
    'en': require('./assets/lang/en.js')
  }
})
// this.$i18n.locale = 'en'

// REM Response Type
const W = document.documentElement.clientWidth;
const Ratio = (100/375)*W;
const html = document.querySelector('html');
html.style.fontSize = Ratio + 'px';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
