import Vue from 'vue';
//import App from './app/app.vue';
//import Data from '../static/my.json';
//import VueRouter from 'vue-router';
//const App = require('./app.vue'); 会出错
//工程首页组件
//添加路由链接、路由视图组件
import App from './app.vue';
////import VueRouter from 'vue-router';
//Vue.use(VueRouter);
////const router = new VueRouter(require('./router'))
//Vue.config.debug = true;//开启错误提示
import router from './router.js'
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
//  new Vue({
//     el: '#app',
//    
//     template: '<App/>',
//     components: { App }
// });