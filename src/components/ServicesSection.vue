<template>
  <div id="services" class="bg-[#f8f9fa] dark:bg-gray-900">
    <div class="container pt-8 pb-16">
      <div class="text-center pb-2">
        <h2 class="font-medium text-5xl text-center italiana">{{ $t('services') + '.' }}</h2>
      </div>
      <hr class="w-1/2 mx-auto" />
      <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-4">
        {{ $t('servicesSubtitle') }}
      </p>

      <div
        class="mt-10 grid md:grid-cols-[260px_1fr] gap-3 md:gap-8 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        v-intersect="onIntersect"
      >
        <!-- Category list -->
        <div
          class="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 pb-2 md:pb-0"
        >
          <button
            v-for="(service, index) in servicesData"
            :key="service.title"
            type="button"
            @click="activeIndex = index"
            class="shrink-0 md:shrink flex items-center gap-3 px-4 py-3 md:py-4 text-left border-b-0 md:border-b border-gray-200 dark:border-gray-700 md:last:border-b-0 rounded-xl md:rounded-xl transition-colors duration-200 cursor-pointer"
            :class="
              activeIndex === index
                ? 'bg-white dark:bg-gray-800 shadow-sm'
                : 'hover:bg-white/60 dark:hover:bg-gray-800/40'
            "
          >
            <span
              class="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-200"
              :class="
                activeIndex === index
                  ? 'bg-green-100 dark:bg-green-900/30'
                  : 'bg-gray-200 dark:bg-gray-700'
              "
            >
              <component
                :is="service.icon"
                class="w-[18px] h-[18px]"
                :class="
                  activeIndex === index
                    ? 'text-green-700 dark:text-green-500'
                    : 'text-gray-500 dark:text-gray-400'
                "
              />
            </span>
            <span
              class="font-medium whitespace-nowrap md:whitespace-normal"
              :class="
                activeIndex === index
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300'
              "
            >
              {{ service.title }}
            </span>
          </button>
        </div>

        <!-- Detail panel -->
        <div
          class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 overflow-hidden"
        >
          <div
            class="hidden sm:grid absolute top-6 right-6 grid-cols-3 gap-1.5 w-20 opacity-70"
            aria-hidden="true"
          >
            <span
              v-for="n in 9"
              :key="n"
              class="aspect-square rounded-md"
              :class="swatchClasses[n - 1]"
            ></span>
          </div>

          <Transition name="fade-swap" mode="out-in">
            <div :key="activeIndex" class="max-w-xl">
              <h3
                class="uniquefont text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                {{ activeService.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                {{ activeService.description }}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                <div
                  v-for="item in activeService.checklist"
                  :key="item"
                  class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0"></span>
                  {{ item }}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  PaintBrushIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const swatchClasses = [
  'bg-green-200 dark:bg-green-900/40',
  'bg-green-600',
  'bg-green-100 dark:bg-green-900/20',
  'bg-emerald-500',
  'bg-green-700',
  'bg-emerald-200 dark:bg-emerald-900/40',
  'bg-green-100 dark:bg-green-900/20',
  'bg-emerald-500',
  'bg-green-200 dark:bg-green-900/40',
]

const servicesLists = {
  en: [
    {
      title: 'Design',
      icon: PaintBrushIcon,
      description:
        'UI/UX design, wireframes, and visual design that turns ideas into clean, usable interfaces.',
      checklist: [
        'UI/UX Design',
        'Wireframing',
        'Visual Design',
        'Design Systems',
        'Prototyping',
        'User Flows',
        'Responsive Layouts',
        'Figma Handoff',
      ],
    },
    {
      title: 'Website Development',
      icon: CodeBracketSquareIcon,
      description:
        'Fast, responsive websites — landing pages, business sites, and portfolios built to convert.',
      checklist: [
        'Landing Pages',
        'Responsive Design',
        'CMS Integration',
        'Performance Tuning',
        'SEO Foundations',
        'Copywriting Support',
        'Analytics Setup',
        'Deployment',
      ],
    },
    {
      title: 'Advanced Web Applications',
      icon: CpuChipIcon,
      description:
        'Custom web apps, admin panels, and SaaS products built with Laravel and Vue.js.',
      checklist: [
        'Custom Backend (Laravel)',
        'Admin Panels',
        'API Development',
        'Database Design',
        'Auth & User Roles',
        'Third-party Integrations',
        'SaaS Architecture',
        'Testing & QA',
      ],
    },
    {
      title: 'SEO Optimization',
      icon: MagnifyingGlassIcon,
      description:
        'Technical SEO, structured data, and performance tuning to help your site get found.',
      checklist: [
        'Technical SEO Audit',
        'Structured Data',
        'Sitemap & Robots.txt',
        'Meta & OG Tags',
        'Core Web Vitals',
        'Image Optimization',
        'Site Speed',
        'Search Console Setup',
      ],
    },
  ],
  bs: [
    {
      title: 'Dizajn',
      icon: PaintBrushIcon,
      description:
        'UI/UX dizajn, wireframe-ovi i vizuelni dizajn koji ideje pretvara u čiste, upotrebljive interfejse.',
      checklist: [
        'UI/UX dizajn',
        'Wireframe',
        'Vizuelni dizajn',
        'Design sistemi',
        'Prototipiranje',
        'Korisnički tokovi',
        'Responzivni layout',
        'Figma predaja',
      ],
    },
    {
      title: 'Izrada web stranica',
      icon: CodeBracketSquareIcon,
      description:
        'Brze, responzivne web stranice — landing stranice, biznis sajtovi i portfoliji rađeni da konvertuju.',
      checklist: [
        'Landing stranice',
        'Responzivan dizajn',
        'CMS integracija',
        'Optimizacija performansi',
        'SEO osnove',
        'Podrška za copywriting',
        'Postavljanje analitike',
        'Deploy',
      ],
    },
    {
      title: 'Izrada naprednih web aplikacija',
      icon: CpuChipIcon,
      description:
        'Prilagođene web aplikacije, admin paneli i SaaS proizvodi rađeni u Laravelu i Vue.js-u.',
      checklist: [
        'Prilagođeni backend (Laravel)',
        'Admin paneli',
        'Razvoj API-ja',
        'Dizajn baze podataka',
        'Autentifikacija i uloge',
        'Integracije trećih strana',
        'SaaS arhitektura',
        'Testiranje i QA',
      ],
    },
    {
      title: 'SEO optimizacija',
      icon: MagnifyingGlassIcon,
      description:
        'Tehnički SEO, strukturirani podaci i optimizacija performansi kako bi te lakše pronašli na pretragama.',
      checklist: [
        'Tehnički SEO audit',
        'Strukturirani podaci',
        'Sitemap i Robots.txt',
        'Meta i OG tagovi',
        'Core Web Vitals',
        'Optimizacija slika',
        'Brzina sajta',
        'Search Console podešavanje',
      ],
    },
  ],
  de: [
    {
      title: 'Design',
      icon: PaintBrushIcon,
      description:
        'UI/UX-Design, Wireframes und visuelles Design, das Ideen in klare, nutzbare Interfaces verwandelt.',
      checklist: [
        'UI/UX-Design',
        'Wireframing',
        'Visuelles Design',
        'Design-Systeme',
        'Prototyping',
        'User Flows',
        'Responsive Layouts',
        'Figma-Übergabe',
      ],
    },
    {
      title: 'Website-Entwicklung',
      icon: CodeBracketSquareIcon,
      description:
        'Schnelle, responsive Websites — Landingpages, Unternehmenswebsites und Portfolios, die konvertieren.',
      checklist: [
        'Landingpages',
        'Responsives Design',
        'CMS-Integration',
        'Performance-Optimierung',
        'SEO-Grundlagen',
        'Copywriting-Unterstützung',
        'Analytics-Setup',
        'Deployment',
      ],
    },
    {
      title: 'Erweiterte Webanwendungen',
      icon: CpuChipIcon,
      description:
        'Individuelle Webanwendungen, Admin-Panels und SaaS-Produkte mit Laravel und Vue.js.',
      checklist: [
        'Individuelles Backend (Laravel)',
        'Admin-Panels',
        'API-Entwicklung',
        'Datenbankdesign',
        'Auth & Benutzerrollen',
        'Drittanbieter-Integrationen',
        'SaaS-Architektur',
        'Testing & QA',
      ],
    },
    {
      title: 'SEO-Optimierung',
      icon: MagnifyingGlassIcon,
      description:
        'Technisches SEO, strukturierte Daten und Performance-Optimierung für bessere Auffindbarkeit.',
      checklist: [
        'Technisches SEO-Audit',
        'Strukturierte Daten',
        'Sitemap & Robots.txt',
        'Meta- & OG-Tags',
        'Core Web Vitals',
        'Bildoptimierung',
        'Seitengeschwindigkeit',
        'Search-Console-Setup',
      ],
    },
  ],
}

const servicesData = computed(() => servicesLists[locale.value])
const activeIndex = ref(0)
const activeService = computed(() => servicesData.value[activeIndex.value])

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

<style scoped>
.fade-swap-enter-active,
.fade-swap-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-swap-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
