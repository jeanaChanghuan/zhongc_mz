// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import 'styles/reset.css'


Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h=> h(App)
})
