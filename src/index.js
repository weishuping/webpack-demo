import Vue from 'vue';
//2017-08-25
//工程首页组件
//添加路由链接、路由视图组件
 import App from './app.vue';
 import router from './router.js'
 import $ from 'jquery'

 Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
 new Vue({
     el: '#app',
     router: router,
     render: h => h(App)
 });
//2017-08-25

//old
//  new Vue({
//     el: '#app',
   
//     template: '<App/>',
//     components: { App }
// });