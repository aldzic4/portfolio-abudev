<template>
  <section class="bg-white dark:bg-gray-900 py-10 border-y border-gray-100 dark:border-gray-800">
    <div class="container">
      <div ref="statsRef" class="grid grid-cols-3 gap-8">
        <div v-for="stat in stats" :key="stat.key" class="text-center">
          <p
            class="uniquefont text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 dark:from-green-500 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
          >
            {{ stat.display }}{{ stat.suffix }}
          </p>
          <p class="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
      <p class="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
        {{ $t('statsProjectsNote') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const statDefs = computed(() => [
  { key: 'years', target: 4, suffix: '+', label: t('statsYearsLabel') },
  { key: 'projects', target: 10, suffix: '+', label: t('statsProjectsLabel') },
  { key: 'tech', target: 10, suffix: '+', label: t('statsTechLabel') },
])

const displayValues = reactive({ years: 0, projects: 0, tech: 0 })

const stats = computed(() => statDefs.value.map((s) => ({ ...s, display: displayValues[s.key] })))

let animated = false
const statsRef = ref(null)
let observer

const animateStats = () => {
  if (animated) return
  animated = true

  const duration = 1200
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    statDefs.value.forEach((s) => {
      displayValues[s.key] = Math.round(s.target * eased)
    })
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateStats()
      })
    },
    { threshold: 0.4 },
  )
  if (statsRef.value) observer.observe(statsRef.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
