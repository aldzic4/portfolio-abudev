<template>
  <nav
    :class="[
      scrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md'
        : 'bg-[#f8f9fa] dark:bg-gray-800',
    ]"
    class="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300"
  >
    <!-- Scroll progress -->
    <div
      class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-700 via-emerald-500 to-teal-400"
      :style="{ width: progress + '%' }"
    ></div>

    <div
      :class="scrolled ? 'py-1' : 'py-2'"
      class="container flex items-center justify-between gap-2 transition-all duration-300"
    >
      <a href="#home" class="shrink-0" @click="closeMenu">
        <img
          :class="scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'"
          class="w-auto transition-all duration-300 dark:invert dark:hue-rotate-180"
          :src="logo"
          width="526"
          height="302"
          alt="AbuDev logo"
        />
      </a>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center uniquefont text-lg">
        <a
          v-for="link in links"
          :key="link.id"
          :href="'#' + link.id"
          :class="
            activeId === link.id
              ? 'text-green-800 dark:text-green-500 after:scale-x-100'
              : 'text-gray-700 dark:text-gray-200 after:scale-x-0'
          "
          class="relative mx-3 xl:mx-4 py-1 transition-colors duration-300 hover:text-green-800 dark:hover:text-green-500 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:bg-green-700 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {{ $t(link.label) }}
        </a>
      </div>

      <!-- Controls (always visible) -->
      <div class="flex items-center gap-1 sm:gap-2">
        <button
          @click="switchMode"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          class="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700 transition cursor-pointer"
        >
          <Transition name="spin" mode="out-in">
            <MoonIcon v-if="isDarkMode" key="moon" class="w-6 h-6" />
            <SunIcon v-else key="sun" class="w-6 h-6" />
          </Transition>
        </button>

        <div ref="langRef" class="relative">
          <button
            @click="langIsOpen = !langIsOpen"
            :aria-expanded="langIsOpen"
            aria-haspopup="listbox"
            class="inline-flex items-center gap-1.5 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm text-gray-700 dark:text-gray-200 hover:border-green-700 transition cursor-pointer"
          >
            <img
              :src="currentLanguage.flag"
              :alt="currentLanguage.label + ' flag'"
              class="w-5 h-4 object-cover rounded-sm"
            />
            <span>{{ currentLanguage.label }}</span>
            <ChevronDownIcon
              :class="langIsOpen ? 'rotate-180' : ''"
              class="w-3.5 h-3.5 transition-transform duration-200"
            />
          </button>

          <Transition name="drop">
            <ul
              v-show="langIsOpen"
              role="listbox"
              class="absolute right-0 mt-2 w-28 py-1 bg-white dark:bg-gray-700 rounded-lg shadow-lg ring-1 ring-black/5 z-10"
            >
              <li v-for="lang in languages" :key="lang.code">
                <button
                  @click.prevent="changeLanguage(lang.code)"
                  :class="
                    lang.code === locale ? 'text-green-800 dark:text-green-400 font-semibold' : ''
                  "
                  class="cursor-pointer flex gap-2 w-full items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <img
                    :src="lang.flag"
                    :alt="lang.label + ' flag'"
                    class="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>{{ lang.label }}</span>
                </button>
              </li>
            </ul>
          </Transition>
        </div>

        <!-- Hamburger -->
        <button
          @click="toggleMenu"
          type="button"
          class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700 transition cursor-pointer"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Menu</span>
          <span
            :class="isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'"
            class="absolute h-0.5 w-6 bg-current rounded transition-transform duration-300"
          ></span>
          <span
            :class="isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'"
            class="absolute h-0.5 w-6 bg-current rounded transition-all duration-300"
          ></span>
          <span
            :class="isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'"
            class="absolute h-0.5 w-6 bg-current rounded transition-transform duration-300"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="menu">
      <div
        v-show="isOpen"
        id="mobile-menu"
        class="lg:hidden absolute inset-x-0 top-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <div class="container flex flex-col py-3 uniquefont text-xl">
          <a
            v-for="(link, i) in links"
            :key="link.id"
            :href="'#' + link.id"
            @click="closeMenu"
            :style="{ transitionDelay: isOpen ? 60 + i * 45 + 'ms' : '0ms' }"
            :class="[
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
              activeId === link.id
                ? 'text-green-800 dark:text-green-500 bg-green-50 dark:bg-green-900/20'
                : 'text-gray-700 dark:text-gray-200',
            ]"
            class="flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {{ $t(link.label) }}
            <ChevronRightIcon class="w-4 h-4 opacity-50" />
          </a>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Backdrop for mobile menu -->
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
      @click="closeMenu"
    ></div>
  </Transition>

  <!-- Back to top -->
  <Transition name="fade">
    <a
      v-show="progress > 15 && !isOpen"
      href="#home"
      aria-label="Back to top"
      class="fixed bottom-5 right-5 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg shadow-green-700/30 hover:bg-green-800 hover:-translate-y-1 transition"
    >
      <ArrowUpIcon class="w-5 h-5" />
    </a>
  </Transition>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import {
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowUpIcon,
} from '@heroicons/vue/24/outline'
import logo from '../assets/images/abudev-logo.png'
import { useI18n } from 'vue-i18n'
import bapng from '../assets/images/ba.png'
import engpng from '../assets/images/gb.png'
import depng from '../assets/images/de.png'

const { locale } = useI18n()

const links = [
  { id: 'background', label: 'background' },
  { id: 'skills', label: 'skills' },
  { id: 'services', label: 'services' },
  { id: 'projects', label: 'projects' },
  { id: 'faq', label: 'faq' },
  { id: 'contact', label: 'contact' },
]

const isOpen = ref(false)
const langIsOpen = ref(false)
const langRef = ref(null)
const scrolled = ref(false)
const progress = ref(0)
const activeId = ref('')

const languages = [
  { code: 'en', label: 'EN', flag: engpng },
  { code: 'bs', label: 'BS', flag: bapng },
  { code: 'de', label: 'DE', flag: depng },
]

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value) || languages[0],
)

function toggleMenu() {
  isOpen.value = !isOpen.value
  langIsOpen.value = false
}

function closeMenu() {
  isOpen.value = false
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const isDarkMode = ref(localStorage.getItem('darkMode') !== 'false')

function switchMode() {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

watch(isDarkMode, (val) => {
  localStorage.setItem('darkMode', val)
})

watch(locale, (newLang) => {
  localStorage.setItem('locale', newLang)
})

const changeLanguage = (lang) => {
  locale.value = lang
  langIsOpen.value = false
}

function onScroll() {
  const y = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrolled.value = y > 10
  progress.value = max > 0 ? Math.min(100, (y / max) * 100) : 0
}

function onClickOutside(e) {
  if (langRef.value && !langRef.value.contains(e.target)) langIsOpen.value = false
}

function onKey(e) {
  if (e.key === 'Escape') {
    isOpen.value = false
    langIsOpen.value = false
  }
}

function onResize() {
  if (window.innerWidth >= 1024) isOpen.value = false
}

let sectionObserver

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKey)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  ;['home', ...links.map((l) => l.id)].forEach((id) => {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKey)
  sectionObserver?.disconnect()
  document.body.style.overflow = ''
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.97);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spin-enter-active,
.spin-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}
.spin-enter-from {
  transform: rotate(-90deg) scale(0.6);
  opacity: 0;
}
.spin-leave-to {
  transform: rotate(90deg) scale(0.6);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>
