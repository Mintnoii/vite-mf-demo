import { createApp, defineAsyncComponent } from "vue"
import { createPinia } from 'pinia'
import App from "./App.vue"
import ElementPlus from 'element-plus'
import 'virtual:windi.css'
import LoadingComponent from './components/LoadingComponent.vue'
import LoadError from './components/LoadError.vue'
import 'element-plus/dist/index.css'
import './styles/theme.scss'

const SubTest = defineAsyncComponent({
  loader: () => import("app-two/SubTest"),
  loadingComponent: LoadingComponent,
  errorComponent: LoadError,
});

const app = createApp(App)
const pinia = createPinia()
app.component('SubTest',SubTest)

app.use(pinia)
app.use(ElementPlus)

app.mount("#app")
