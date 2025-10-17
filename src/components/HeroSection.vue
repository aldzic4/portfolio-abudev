<template>
  <section id="home" class="relative bg-white dark:bg-gray-900 pt-16 pb-12">
    <div class="container mx-auto py-20 md:flex md:items-center md:justify-between uniquefont">
      <div class="md:w-1/2 mx-16 animate-fade-slide-left">
        <h1 class="text-5xl md:text-7xl font-bold text-green-700 dark:text-green-700 mb-4">
          {{ $t('whoIsAbu') }}
        </h1>
        <p class="text-lg md:text-2xl text-gray-800 dark:text-gray-200 mb-6">
          {{ $t('aboutMe') }}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-left space-y-4 sm:space-y-0 sm:space-x-12 mx-auto mt-8">
          <!-- Contact Me Button -->
          <a href="#contact"
            class="px-10 py-2 rounded-lg bg-green-700 text-white font-medium text-md hover:bg-green-800 border border-green-800 transition duration-300">
            {{ $t('contactMe') }}
          </a>

          <!-- Download Resume Button -->
          <a href="/src/assets/pdf/abdullah-aldzic-cv.pdf" download
            class="px-10 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 border border-black transition duration-300">
            {{ $t('downloadResume') }}
          </a>
        </div>

      </div>

      <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end animate-fade-slide-right">
        <img :src="abuimage" alt="Hero Image"
          class="w-full max-w-lg h-128 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:brightness-105" />
      </div>
    </div>
  </section>
</template>

<script setup>
import abuimage from '../assets/images/abu-image-edited.jpg'
</script>

<style scoped>
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
</style>
