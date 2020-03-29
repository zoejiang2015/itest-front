// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
// import {Button} from 'element-ui'
// import 'element-ui/lib/theme-default/index.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Element)
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
})
