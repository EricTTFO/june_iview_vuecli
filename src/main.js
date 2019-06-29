import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Table, Icon } from 'iview'
import './plugins/iview.js'

Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
