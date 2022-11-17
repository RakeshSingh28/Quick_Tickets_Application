import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'
// import SignupForm from './components/SignupForm.vue'

Vue.config.productionTip = false
// Vue.use(VueRouter);

// const routes = [
//   { path: '/users' , component: SignupForm },
//   { path: '/' , component: SignupForm }
// ];
// const router = new VueRouter({
//   routes
// });

new Vue({
  vuetify,
  // router,
  render: h => h(App)
}).$mount('#app')
