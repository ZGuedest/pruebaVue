import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'material-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.css'


createApp(App).use(store).use(bootstrap).use(router).mount('#app')
