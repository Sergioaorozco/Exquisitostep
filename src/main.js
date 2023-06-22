import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Components
import Home from './components/Home.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {path: '/', component: Home},
  {path: '/step1', component: Step1},
  {path: '/step2', component: Step2},
  {path: '/step3', component: Step3},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp()
app.use(router)
app.mount('#app')
