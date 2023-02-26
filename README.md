# 组件库打包demo

使用vite来打包组件库，组件库支持TS、按需加载(暂不支持css的按需加载)。
## 使用方式
```
import defauleCompoent, {ELHelloWorld} from 'xh-component'
import 'xh-component/dist/style.css'
const app = createApp(App)
// 全局注册
app.use(defauleCompoent)

// 按需加载
// app.use(ELHelloWorld)
```
