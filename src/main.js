import Vue from 'vue'
import App from './App.vue'
import count from './components/count.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(count),
  template:'<count/>'
}).$mount('#app')
