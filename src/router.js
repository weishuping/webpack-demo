import Vue from 'vue';
import Router from 'vue-router';
import Temp from './page/content/index.vue'
import one from './page/test1/index.vue'
import two from './page/test2/index.vue'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: Temp
        },
        {   path: '/test/:id',
            name: 'test',
            component: Temp,
            children: [
               
                {
                    path: '/test/1',
                    name: 'test1',
                    component: one
                },{
                    path: '/test/2',
                    name: 'test2',
                    component: two
                }
            ]
        }
        // ,{
        //     path: '/index',
        //     component: index
        // }
    ]
})