// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import '../static/css/flexible.css'
import '../static/js/flexible.js'
import '../static/css/reset.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.prototype.baseUrl = "http://127.0.0.1:3001/api/"
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})