import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/page/index'
import page1 from '@/components/page/page1'
import page2 from '@/components/page/page2'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        children: [{
            path: '/',
            name: 'index',
            component: index
        }, {
            path: '/food',
            name: 'page1',
            component: page1
        }, {
            path: '/tec',
            name: 'page2',
            component: page2
        }]
    }]
})