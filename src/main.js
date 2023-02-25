import { createApp } from 'vue'
import App from './App.vue'


// ecahrts引入
import * as echarts from 'echarts' 

const app = createApp(App)

app.config.globalProperties.$echarts = echarts;
app.mount('#app')
