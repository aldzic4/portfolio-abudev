import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import i18n from './i18n'

const app = createApp(App)

// v-reveal: fade/slide element in when it scrolls into view
const revealObserver =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              revealObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      )
    : null

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = binding.value + 'ms'
    if (revealObserver) revealObserver.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    revealObserver?.unobserve(el)
  },
})

app.use(router)
app.use(i18n)

app.mount('#app')

app.config.globalProperties.$theme = reactive({
  darkMode: localStorage.getItem('darkMode') !== 'false',
})

// inicijalna primjena teme
if (app.config.globalProperties.$theme.darkMode) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
