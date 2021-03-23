import Vue from 'vue'
import App from './App'
import './common/share.css' //公共样式



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()