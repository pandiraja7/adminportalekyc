import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import "@/plugins/echarts";
import { default as notification } from "@/components/notification/index.js";
Vue.prototype.$notification = notification;

Vue.config.productionTip = false
Vue.use(Vuelidate);
new Vue({
    router,
    store,
    vuetify,
    Vuelidate,
    render: h => h(App)
}).$mount('#app')