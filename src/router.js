import Vue from 'vue';
import Router from 'vue-router';
import index from './page/content/home.vue'
import one from './page/test1/index.vue'
//import two from './page/test2/index.vue'


Vue.use(Router)
export default new Router(  {
    routes: [
        {
            path: '/index',
            component: index
        },{
            path: '/test1',
            component: one
        }
       
    ]
})