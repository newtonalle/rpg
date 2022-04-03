import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
