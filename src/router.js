import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Temp from './page/content/index.vue'
import one from './page/test1/index.vue'
import two from './page/test1/index2.vue'
import three from './page/test1/index3.vue'

=======
import index from './page/content/home.vue'
import one from './page/test1/index.vue'
//import two from './page/test2/index.vue'
>>>>>>> ping


Vue.use(Router)
export default new Router({
    routes: [
        {
<<<<<<< HEAD
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
         
=======
            path: '/index',
            component: index
        },{
            path: '/test1',
            component: one
        }
       
>>>>>>> ping
    ]
})