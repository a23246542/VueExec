import Vue from 'vue'
import Router from 'vue-router'
//官方元件

import Home from './components/helloWorld.vue'
//自定義

Vue.use(Router)

export default new Router({
    routers:[
        name:'首頁',
        path:'/index',
        component:Home,
    ]
})