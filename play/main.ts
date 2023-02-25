import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ELHelloWorld } from 'xh-component'
import 'xh-component/dist/style.css'
const app = createApp(App)
app.use(ELHelloWorld)
app.mount('#app')
