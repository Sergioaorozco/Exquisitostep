// Dependencies
import { createApp } from 'vue'
import { createPinia, setMapStoreSuffix } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import Home from './components/Home.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Step4 from './components/Step4.vue'
import FinalStep from './components/FinalStep.vue'
import Steps from 'primevue/steps';

// Styles
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import './style.css'

const routes = [
  {path: '/', component: Home},
  {path: '/step1', component: Step1},
  {path: '/step2', component: Step2},
  {path: '/step3', component: Step3},
  {path: '/step4', component: Step4},
  {path: '/finalStep', component: FinalStep},
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
setMapStoreSuffix('')
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(PrimeVue)
app.use(pinia)
app.component('Steps', Steps);

app.mount('#app')
