import Vue from 'vue';
import Router from 'vue-router';
import Temp from './components/test/index.vue'
import one from './page/test1/index.vue'
import two from './page/test2/index.vue'


Vue.use(Router)
export default new Router(  {
    routes: [
        {   path: '/test/:id',
            name: 'test',
            component: Temp,
           // path: '/test1',
            children: [
                {
                    path: '/test/1',
                    component: one
                },{
                    path: '/test/2',
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