import Vue from 'vue'
import Router from 'vue-router'
import app from './app.vue'
import routes from './routers'
import iView from 'iview'
import 'view-design/dist/styles/iview.css'
import 'css/iview.css'
import 'css/feHelper.css'
import 'css/common.css'

Vue.use(Router)
Vue.use(iView);
var router = new Router({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})