// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from "element-ui"
import axios from "axios"
import vueAxios from "vue-axios"
import Vuex from "vuex"
import moduleA from "./store/moduleA"
import 'element-ui/lib/theme-default/index.css'

Vue.use(vueAxios, axios)
Vue.use(elementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
    console.log()
    if (to.name == "login") {
        next()
    } else {
        if (sessionStorage.getItem("userId")) {
            next()
        } else {
            next(false)
        }
    }

})


var store = new Vuex.Store({
    modules: {
        a: moduleA
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