import Vue from './node_modules/vue';
import App from './App';//vue首頁
import router from './router'//路由資料夾下全部載入

//手牽手
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})