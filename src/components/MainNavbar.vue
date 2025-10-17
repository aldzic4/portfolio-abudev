<template>
  <nav
    class="bg-[#f8f9fa] shadow dark:bg-gray-800 border-b-1 border-gray-200 dark:border-gray-600 fixed top-0 left-0 right-0 z-50">
    <div class="container mx-auto py-2 md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <a href="#home">
          <img class="w-34 h-12 sm:h-16" :src="newlogo" alt="abuDevLogo" />
        </a>

        <div class="flex lg:hidden">
          <button x-cloak @click="toggleMenu" type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
        class="absolute inset-x-0 z-20 w-full px-6 mt-8 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        <div class="flex flex-col md:flex-row md:mx-2 uniquefont text-lg">
          <a class="my-2 text-gray-700 transition-all duration-300 transform dark:text-gray-200 hover:text-green-800 hover:text-xl dark:hover:text-green-700 md:mx-4 md:my-0"
            href="#background">
            {{ $t('background') }}
          </a>
          <a class="my-2 text-gray-700 transition-all duration-300 transform dark:text-gray-200 hover:text-green-800 hover:text-xl dark:hover:text-green-700 md:mx-4 md:my-0"
            href="#skills">{{ $t('skills') }}</a>
          <a class="my-2 text-gray-700 transition-all duration-300 transform dark:text-gray-200 hover:text-green-800 hover:text-xl dark:hover:text-green-700 md:mx-4 md:my-0"
            href="#projects">{{ $t('projects') }}</a>
          <a class="my-2 text-gray-700 transition-all duration-300 transform dark:text-gray-200 hover:text-green-800 hover:text-xl dark:hover:text-green-700 md:mx-4 md:my-0"
            href="#contact">{{ $t('contact') }}</a>
        </div>

        <div class="flex justify-center mt-2 md:block">
          <button @click="switchMode" class="ml-2 text-gray-700 dark:text-gray-200 cursor-pointer items-center">
            <MoonIcon v-if="isDarkMode" class="w-6 h-6" />
            <SunIcon v-else class="w-6 h-6" />
          </button>
        </div>
        <div class="relative">
          <button @click="langIsOpen = !langIsOpen"
            class="ml-6 mt-1 bg-transparent border inline-flex border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-gray-700 dark:text-gray-200 cursor-pointer">
            <img :src="currentLanguage.flag" class="w-6 h-5 mr-2 pt-1" />
            <span>{{ currentLanguage.label }}</span>
            <!-- <svg class="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg> -->
          </button>

          <!-- Dropdown menu -->
          <div v-show="langIsOpen" class="absolute bg-white dark:bg-gray-700 rounded-lg shadow-lg w-24 z-10 ml-6">
            <ul class="py-2">
              <li class="cursor-pointer" v-for="lang in languages" :key="lang.code">
                <button @click.prevent="changeLanguage(lang.code)"
                  class="cursor-pointer flex space-x-8 w-full items-center px-3 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-md">
                  <img :src="lang.flag" class="w-6 h-5 mr-2" />
                  <span>{{ lang.label }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
// import abudevlogo from '../assets/images/abudev-logo.png'
import newlogo from '../assets/images/newlogo.png'
import { useI18n } from 'vue-i18n'
import bapng from '../assets/images/ba.png'
import engpng from '../assets/images/gb.png'
import depng from '../assets/images/de.png'


const { locale } = useI18n()

const isOpen = ref(false)
const langIsOpen = ref(false)

const languages = [
  { code: 'en', label: 'EN', flag: engpng },
  { code: 'bs', label: 'BS', flag: bapng },
  { code: 'de', label: 'DE', flag: depng },
]

const currentLanguage = computed(() => languages.find((l) => l.code === locale.value))

function toggleMenu() {
  isOpen.value = !isOpen.value
}

const isDarkMode = ref(localStorage.getItem('darkMode') === 'true')

function switchMode() {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

watch(isDarkMode, (val) => {
  console.log(val)
  localStorage.setItem('darkMode', val)
  console.log(localStorage.getItem('darkMode'))
})

watch(locale, (newLang) => {
  localStorage.setItem('locale', newLang)
})

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  langIsOpen.value = false
}
</script>
