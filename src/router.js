import Vue from 'vue';
import Router from 'vue-router';
import one from './page/test1/index.vue'
import two from './page/test2/index.vue'


Vue.use(Router)
export default new Router(  {
    routes: [
        {
            path: '/test1',
            component: one
        },
        {
            path: '/test2',
            component: two
        }
    ]
})