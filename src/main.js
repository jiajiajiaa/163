import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './vuex/store'
import './mock/mock-server'

//loading图片
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {
  loading
})

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
