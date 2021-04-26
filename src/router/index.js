import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import info from '@/views/info/Index'
import markdownEdit from '../views/info/components/markdownEdit'
import markdownAdd from '../views/info/components/markdownAdd'
import markdownShow from '../views/info/components/markdownShow'
import Router from 'vue-router'
import Nav from '../views/nav/Nav'
import bbsAdd from '../views/markdown/bbsAdd'
import bbsShow from '../views/markdown/bbsShow'
import singshow from '../views/info/components/markdownSingShow'
import login from '../views/login/login'
import b from '../views/test/b'

import a from '../views/test/a'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: '/info/:id/:name',

        component: info
    },

    {
        path: '/info/add',
        component: markdownAdd
    },
    {
        path: '/info/show',
        component: markdownShow
    },
    {
        path: '/nav',
        component: Nav
    },
    {
        path: '/bbs_add',
        component: bbsAdd
    },
    {
        path: '/bbs_show',
        component: bbsShow
    },
    {
        path: '/singshow/:id',
        component: singshow
    },
    {
        path: '/info/login',
        component: login
    },
    {
        path: '/bbaEdit/:id',
        component: markdownEdit
    },
    {
        path: '/b',
        component: b
    },
    {
        path: '/a',
        component: a
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// 导航守卫



