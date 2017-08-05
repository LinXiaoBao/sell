// The Vue build version to load with the `import` command
// (runtime-only   or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueResource from "vue-resource"
import Element from 'element-ui'

import '!vue-style-loader!css-loader!element-ui/lib/theme-default/index.css'
import '!vue-style-loader!css-loader!./common/style/icon.css'
import base from '!vue-style-loader!css-loader!less-loader!./common/style/base.less'
 
Vue.use(Element)
Vue.use(vueResource)
require('font-awesome-webpack')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
