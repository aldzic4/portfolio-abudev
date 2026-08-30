<template>
  <section id="home" class="relative bg-white dark:bg-gray-900 pt-16 pb-12 overflow-hidden">
    <!-- Decorative background -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] [background-image:radial-gradient(circle,theme(colors.gray.300)_1px,transparent_1px)] [background-size:26px_26px] dark:[background-image:radial-gradient(circle,theme(colors.gray.700)_1px,transparent_1px)]"
      ></div>
      <div
        class="animate-blob absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-300/40 dark:bg-green-700/20 blur-3xl"
      ></div>
      <div
        class="animate-blob animation-delay-2000 absolute top-10 -right-24 w-96 h-96 rounded-full bg-emerald-300/40 dark:bg-emerald-700/20 blur-3xl"
      ></div>
      <div
        class="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-teal-200/40 dark:bg-teal-800/20 blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto py-20 md:flex md:items-center md:justify-between uniquefont">
      <div class="md:w-1/2 mx-16 animate-fade-slide-left">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-green-700/30 bg-green-50 dark:bg-green-900/20 px-4 py-1.5 mb-5 animate-fade-in"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
          </span>
          <span class="text-sm font-medium text-green-800 dark:text-green-300">{{
            $t('heroAvailability')
          }}</span>
        </div>

        <p
          class="uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-green-700 dark:text-green-500 mb-2 animate-fade-in"
        >
          {{ $t('heroKicker') }}
        </p>

        <h1
          class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 dark:from-green-500 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
        >
          {{ $t('whoIsAbu') }}
        </h1>
        <p class="text-lg md:text-2xl text-gray-800 dark:text-gray-200 mb-6">
          {{ $t('aboutMe') }}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-left space-y-4 sm:space-y-0 sm:space-x-12 mx-auto mt-8"
        >
          <!-- Contact Me Button -->
          <a
            href="#contact"
            class="px-10 py-2 rounded-lg bg-green-700 text-white font-medium text-md hover:bg-green-800 border border-green-800 transition duration-300 shadow-lg shadow-green-700/20 hover:-translate-y-0.5"
          >
            {{ $t('contactMe') }}
          </a>

          <!-- Download Resume Button -->
          <a
            href="/pdf/abdullah-aldzic-cv.pdf"
            download
            class="px-10 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 border border-black transition duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 hover:-translate-y-0.5"
          >
            {{ $t('downloadResume') }}
          </a>
        </div>

        <div class="flex flex-wrap gap-2 mt-8 animate-fade-in" style="animation-delay: 0.4s">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:border-green-600 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div
        class="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end animate-fade-slide-right"
      >
        <div class="relative flex items-center justify-center">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 via-emerald-400 to-teal-300 opacity-40 dark:opacity-25 blur-3xl"
          ></div>
          <img
            :src="heroIllustration"
            alt="Abdullah Aldžić — Fullstack Laravel & VueJS Developer, working from Graz, Austria"
            class="hero-illustration relative w-full max-w-lg transform transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>

    <a
      href="#background"
      class="hidden md:flex flex-col items-center gap-1 absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-green-700 dark:hover:text-green-500 transition-colors duration-300 animate-bounce-slow"
    >
      <span class="text-xs uppercase tracking-widest">{{ $t('scrollDown') }}</span>
      <ChevronDownIcon class="w-5 h-5" />
    </a>
  </section>
</template>

<script setup>
import heroIllustration from '../assets/images/hero-ilustration.jpg'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const techStack = ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'REST API']
</script>

<style scoped>
.hero-illustration {
  -webkit-mask-image: radial-gradient(ellipse 68% 68% at 50% 50%, black 55%, transparent 100%);
  mask-image: radial-gradient(ellipse 68% 68% at 50% 50%, black 55%, transparent 100%);
}

@keyframes fadeSlideLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeSlideRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-slide-left {
  animation: fadeSlideLeft 1s ease-out forwards;
}

.animate-fade-slide-right {
  animation: fadeSlideRight 1s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(20px, -30px) scale(1.1);
  }

  66% {
    transform: translate(-15px, 15px) scale(0.95);
  }
}

.animate-blob {
  animation: blob 9s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes bounceSlow {
  0%,
  100% {
    transform: translateY(0) translateX(-50%);
  }

  50% {
    transform: translateY(6px) translateX(-50%);
  }
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-slide-left,
  .animate-fade-slide-right,
  .animate-fade-in,
  .animate-blob,
  .animate-bounce-slow {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
