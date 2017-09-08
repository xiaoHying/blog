// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import axios from "axios"
import vueAxios from "vue-axios"
import moduleA from "./store/moduleA"

import "../static/style/bootstrap.css"

Vue.use(Vuex)
Vue.use(vueAxios, axios)

Vue.config.productionTip = false

var store = new Vuex.Store({
    modules: {
        navA: moduleA
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})