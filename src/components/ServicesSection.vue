<template>
  <div id="services" class="bg-[#f8f9fa] dark:bg-gray-900">
    <div class="container pt-8">
      <div class="text-center pb-2">
        <h2 class="font-medium text-5xl text-center italiana">{{ $t('services') + '.' }}</h2>
      </div>
      <hr class="w-1/2 mx-auto" />
      <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-4">
        {{ $t('servicesSubtitle') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-12">
        <div
          v-for="(service, index) in servicesData"
          :key="service.title"
          class="group rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          v-intersect="onIntersect"
          :style="{ transitionDelay: index * 120 + 'ms' }"
        >
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 mb-5 transition-transform duration-300 group-hover:scale-110"
          >
            <component :is="service.icon" class="w-7 h-7 text-green-700 dark:text-green-500" />
          </div>
          <h3 class="uniquefont text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  PaintBrushIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const servicesLists = {
  en: [
    {
      title: 'Design',
      icon: PaintBrushIcon,
      description:
        'UI/UX design, wireframes, and visual design that turns ideas into clean, usable interfaces.',
    },
    {
      title: 'Website Development',
      icon: CodeBracketSquareIcon,
      description:
        'Fast, responsive websites — landing pages, business sites, and portfolios built to convert.',
    },
    {
      title: 'Advanced Web Applications',
      icon: CpuChipIcon,
      description:
        'Custom web apps, admin panels, and SaaS products built with Laravel and Vue.js.',
    },
    {
      title: 'SEO Optimization',
      icon: MagnifyingGlassIcon,
      description:
        'Technical SEO, structured data, and performance tuning to help your site get found.',
    },
  ],
  bs: [
    {
      title: 'Dizajn',
      icon: PaintBrushIcon,
      description:
        'UI/UX dizajn, wireframe-ovi i vizuelni dizajn koji ideje pretvara u čiste, upotrebljive interfejse.',
    },
    {
      title: 'Izrada web stranica',
      icon: CodeBracketSquareIcon,
      description:
        'Brze, responzivne web stranice — landing stranice, biznis sajtovi i portfoliji rađeni da konvertuju.',
    },
    {
      title: 'Izrada naprednih web aplikacija',
      icon: CpuChipIcon,
      description:
        'Prilagođene web aplikacije, admin paneli i SaaS proizvodi rađeni u Laravelu i Vue.js-u.',
    },
    {
      title: 'SEO optimizacija',
      icon: MagnifyingGlassIcon,
      description:
        'Tehnički SEO, strukturirani podaci i optimizacija performansi kako bi te lakše pronašli na pretragama.',
    },
  ],
  de: [
    {
      title: 'Design',
      icon: PaintBrushIcon,
      description:
        'UI/UX-Design, Wireframes und visuelles Design, das Ideen in klare, nutzbare Interfaces verwandelt.',
    },
    {
      title: 'Website-Entwicklung',
      icon: CodeBracketSquareIcon,
      description:
        'Schnelle, responsive Websites — Landingpages, Unternehmenswebsites und Portfolios, die konvertieren.',
    },
    {
      title: 'Erweiterte Webanwendungen',
      icon: CpuChipIcon,
      description:
        'Individuelle Webanwendungen, Admin-Panels und SaaS-Produkte mit Laravel und Vue.js.',
    },
    {
      title: 'SEO-Optimierung',
      icon: MagnifyingGlassIcon,
      description:
        'Technisches SEO, strukturierte Daten und Performance-Optimierung für bessere Auffindbarkeit.',
    },
  ],
}

const servicesData = computed(() => servicesLists[locale.value])

const onIntersect = (el, isIntersecting) => {
  if (isIntersecting) {
    el.classList.remove('opacity-0', 'translate-y-10')
    el.classList.add('opacity-100', 'translate-y-0')
  }
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
