import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const head = createHead()

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(head)

app.use(router)

app.mount('#app')

if (import.meta.hot) {
  handleHotUpdate(router)
}
