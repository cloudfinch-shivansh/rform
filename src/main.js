import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import HomeHome from './components/HomeHome.vue'
import FinalSubmit from './components/FinalSubmit.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/HomeHome',
            component: HomeHome,
            name: "HomeHome"
        },
        {
            path: '/',
            component: HelloWorld,
            name: "HelloWorld"
        },
        {
            path: '/HomeHome/FinalSubmit',
            component: FinalSubmit,
            name: "FinalSubmit"
        }
    ]

});
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
