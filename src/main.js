import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'

// use
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


Vue.prototype.axios=axios
axios.defaults.withCredentials = true; // 允许携带cookie
 const  area_axios = axios.create({
    headers: {'Content-Type': 'application/json;charset=utf-8'},

})


// 请求前 做点做事情

area_axios.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token')
        console.log(token)
        config.headers.authorization = token  //请求头加上token
        return config
    },
    err => {
        return Promise.reject(err)
    })
// 请求前 做点做事情结束