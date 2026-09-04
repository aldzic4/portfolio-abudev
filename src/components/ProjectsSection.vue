<template>
  <div id="projects" class="bg-white dark:bg-gray-900 mb-12">
    <div class="container pt-8">
      <div class="text-center pb-2">
        <h2 class="font-medium text-5xl text-center italiana">{{ $t('projects') + '.' }}</h2>
      </div>
      <hr class="w-1/2 mx-auto" />
      <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-4">
        {{ $t('projectsSubtitle') }}
      </p>

      <div class="relative mt-10">
        <button
          type="button"
          @click="scrollByCard(-1)"
          aria-label="Previous project"
          class="hidden md:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 hover:scale-105 transition-all duration-300"
        >
          <ChevronLeftIcon class="w-5 h-5" />
        </button>
        <button
          type="button"
          @click="scrollByCard(1)"
          aria-label="Next project"
          class="hidden md:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 hover:scale-105 transition-all duration-300"
        >
          <ChevronRightIcon class="w-5 h-5" />
        </button>

        <div
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar scroll-px-2"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="group snap-start shrink-0 w-[85vw] sm:w-[400px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out"
            v-intersect="onIntersect"
            :style="{ transitionDelay: index * 150 + 'ms' }"
          >
            <!-- Media showcase -->
            <div
              class="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl"
              :class="project.gradient"
            >
              <div
                class="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:24px_24px]"
              ></div>

              <template v-if="project.mainImage">
                <img
                  :src="project.mainImage"
                  :alt="project.name + ' screenshot'"
                  loading="lazy"
                  decoding="async"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  :class="project.mainImagePosition"
                />

                <img
                  v-for="thumb in project.thumbs"
                  :key="thumb.src"
                  :src="thumb.src"
                  :alt="project.name + ' detail'"
                  loading="lazy"
                  decoding="async"
                  class="absolute bg-white dark:bg-gray-900 p-1.5 object-contain rounded-lg shadow-2xl ring-1 ring-white/20 transition-transform duration-500 ease-out"
                  :class="[
                    thumb.frame,
                    thumb.side === 'left'
                      ? 'left-3 bottom-3 -rotate-6 group-hover:-rotate-3 group-hover:-translate-y-1'
                      : 'right-3 bottom-3 rotate-6 group-hover:rotate-3 group-hover:-translate-y-1',
                  ]"
                />
              </template>

              <span
                v-else
                class="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-sm text-white text-4xl font-bold uniquefont border border-white/30 transform transition-transform duration-500 group-hover:scale-110"
              >
                {{ project.initial }}
              </span>
            </div>

            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-2xl font-bold uniquefont">{{ project.name }}</h3>
                <span
                  class="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                  :class="statusStyles[project.status].badge"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full"
                    :class="statusStyles[project.status].dot"
                  ></span>
                  {{ $t(statusStyles[project.status].label) }}
                </span>
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-700/60 dark:text-gray-300 dark:border-gray-600"
                >
                  {{ tech }}
                </span>
              </div>

              <a
                v-if="project.status === 'live'"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-green-700 text-white font-medium hover:bg-green-800 transition duration-300"
              >
                {{ $t('viewProject') }}
                <ArrowTopRightOnSquareIcon class="w-4 h-4" />
              </a>
              <div
                v-else-if="project.status === 'internal'"
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <LockClosedIcon class="w-4 h-4" />
                {{ $t('privateNote') }}
              </div>
              <div v-else class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <WrenchScrewdriverIcon class="w-4 h-4" />
                {{ $t('comingSoonNote') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline'

import loptyLanding from '../assets/images/projects/lopty-landing.webp'
import loptyTable from '../assets/images/projects/lopty-table.webp'
import loptyProfile from '../assets/images/projects/lopty-profile.webp'
import caarplansLogin from '../assets/images/projects/caarplans-login.webp'
import caarplansNav from '../assets/images/projects/caarplans-nav.webp'
import shiftplaneroSchedule from '../assets/images/projects/shift-planero-3.webp'
import shiftplaneroDashboard from '../assets/images/projects/shift-planero-1.webp'
import shiftplaneroTemplates from '../assets/images/projects/shift-planero-2.webp'
import nabavkoLanding from '../assets/images/projects/nabavko2.webp'
import nabavkoSteps from '../assets/images/projects/nabavko1.webp'
import nabavkoCoverage from '../assets/images/projects/nabavko3.webp'

const { t } = useI18n()

const statusStyles = {
  live: {
    label: 'statusLive',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    dot: 'bg-green-600',
  },
  internal: {
    label: 'statusInternal',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    dot: 'bg-amber-600',
  },
  soon: {
    label: 'statusSoon',
    badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
    dot: 'bg-indigo-600',
  },
}

const projects = computed(() => [
  {
    name: 'Lopty',
    status: 'live',
    gradient: 'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600',
    mainImage: loptyLanding,
    mainImagePosition: 'object-top',
    thumbs: [
      { src: loptyTable, side: 'left', frame: 'w-28 sm:w-32 h-20 sm:h-24' },
      { src: loptyProfile, side: 'right', frame: 'w-24 sm:w-28 h-24 sm:h-28' },
    ],
    description: t('loptyDescription'),
    tech: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    link: 'https://lopty.app',
  },
  {
    name: 'CaarPlans',
    status: 'internal',
    gradient: 'bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800',
    mainImage: caarplansLogin,
    mainImagePosition: 'object-right',
    thumbs: [{ src: caarplansNav, side: 'right', frame: 'w-20 sm:w-24 h-32 sm:h-36' }],
    description: t('caarplansDescription'),
    tech: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    name: 'ShiftPlanero',
    status: 'soon',
    gradient: 'bg-gradient-to-br from-indigo-500 via-blue-600 to-sky-600',
    mainImage: shiftplaneroSchedule,
    mainImagePosition: 'object-top',
    thumbs: [
      { src: shiftplaneroDashboard, side: 'left', frame: 'w-32 sm:w-40 h-16 sm:h-20' },
      { src: shiftplaneroTemplates, side: 'right', frame: 'w-28 sm:w-32 h-20 sm:h-24' },
    ],
    description: t('shiftplaneroDescription'),
    tech: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    name: 'Nabavko',
    status: 'soon',
    gradient: 'bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600',
    mainImage: nabavkoLanding,
    mainImagePosition: 'object-top',
    thumbs: [
      { src: nabavkoSteps, side: 'left', frame: 'w-28 sm:w-36 h-16 sm:h-20' },
      { src: nabavkoCoverage, side: 'right', frame: 'w-28 sm:w-36 h-16 sm:h-20' },
    ],
    description: t('nabavkoDescription'),
    tech: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS', 'MySQL'],
  },
])

const onIntersect = (el, isIntersecting) => {
  if (isIntersecting) {
    el.classList.remove('opacity-0', 'translate-y-10')
    el.classList.add('opacity-100', 'translate-y-0')
  }
}

const scrollContainer = ref(null)

const scrollByCard = (direction) => {
  const container = scrollContainer.value
  if (!container) return
  const card = container.querySelector(':scope > div')
  const step = card ? card.offsetWidth + 24 : container.clientWidth * 0.9
  container.scrollBy({ left: direction * step, behavior: 'smooth' })
}
</script>

<script>
export default {
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (binding.value) {
                binding.value(el, entry.isIntersecting)
              }
            })
          },
          { threshold: 0.2 },
        )
        observer.observe(el)
      },
    },
  },
}
</script>
