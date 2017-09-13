import Vue from 'vue';
import Router from 'vue-router';
import Temp from './page/content/index.vue'
// import one from './page/test1/index.vue'
// import two from './page/test1/index2.vue'
// import three from './page/test1/index3.vue'
import Home from './page/content/home.vue'
import Edu from './page/content/edu.vue'
import Work from './page/content/work.vue'
import Music from './page/content/music.vue'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: Temp
        },
        {   path: '/resume/:id',
            name: 'resume',
            component: Temp,
            children: [
               
                {
                    path: '/resume/home',
                    name: 'home',
                    component: Home
                },{
                    path: '/resume/edu',
                    name: 'edu',
                    component: Edu
                },{
                    path: '/resume/work',
                    name: 'work',
                    component: Work
                },{
                    path: '/resume/music',
                    name: 'music',
                    component: Music
                }
            ]
        }
         
    ]
})