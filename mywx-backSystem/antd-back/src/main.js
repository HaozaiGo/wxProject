import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

const app = createApp();
app.config.productionTip = false;
// app.use(DatePicker);
createApp(App).use(Antd).mount('#app')