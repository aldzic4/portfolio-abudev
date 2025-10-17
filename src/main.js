import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

app.config.globalProperties.$theme = reactive({
  darkMode: localStorage.getItem('darkMode') === 'true'
})

// inicijalna primjena teme
if (app.config.globalProperties.$theme.darkMode) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
