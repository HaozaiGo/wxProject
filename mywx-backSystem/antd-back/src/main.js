import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
// import 'ant-design-vue/dist/antd.less';
import router from './router/router.js'

const app = createApp(App);




app.config.productionTip = false;
app.use(Antd);
app.use(router);
app.mount('#app')