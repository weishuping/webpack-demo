import Vue from 'vue';
import Router from 'vue-router';
import Temp from './page/content/index.vue'
import one from './page/test1/index.vue'
import two from './page/test1/index2.vue'
import three from './page/test1/index3.vue'



Vue.use(Router)
export default new Router(  {
    routes: [
        {
            path: '/test/1',
            component: one
        },{
            path: '/test/2',
            component: two
        },{
            path: '/test/3',
            component: three
        }
         
    ]
})