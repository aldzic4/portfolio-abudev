<template>
  <div id="contact" class="bg-[#f8f9fa] dark:bg-gray-900">
    <div class="container pt-8 mx-auto">
      <div class="text-center pb-2">
        <span class="font-medium text-5xl text-center italiana">{{ $t('contact') + '.' }}</span>
      </div>
      <hr class="w-1/2 mx-auto mb-2" />
      <div class="font-normal text-2xl text-center text-gray-600 dark:text-white">
        {{ $t('subtitle') }}
      </div>

      <div class="mx-auto px-2 grid md:grid-cols-2 gap-12 pb-16 pt-12">
        <div v-intersect="onIntersect"
          class="space-y-8 md:mr-36 opacity-0 translate-y-10 transition-all duration-500 ease-out">
          <h2 class="text-3xl font-bold">{{ $t('getInTouch') }}</h2>

          <div class="space-y-6 text-gray-700 dark:text-gray-300 pb-4 pt-4">
            <div class="flex items-center">
              <MapPinIcon class="w-8 h-8 text-green-700 mr-2" />
              <span class="font-medium pr-2 text-lg">{{ $t('locationLabel') }}</span>
              <span class="font-bold text-lg">{{ $t('location') }}</span>
            </div>

            <div class="flex items-center">
              <EnvelopeIcon class="w-8 h-8 text-green-700 mr-2" />
              <span class="font-medium pr-2 text-lg">Email:</span>
              <span class="font-bold text-lg">abdullahaldzic4@gmail.com</span>
            </div>

            <div class="flex items-center">
              <PhoneIcon class="w-8 h-8 text-green-700 mr-2" />
              <span class="font-medium pr-2 text-lg">{{ $t('phoneLabel') }}</span>
              <span class="font-bold text-lg">+4367761727795</span>
            </div>
          </div>

          <div class="text-3xl font-semibold">{{ $t('reachMeAlsoOn') }}</div>
          <div class="flex space-x-4 pt-4">
            <a href="https://www.facebook.com/abdullah.aldzic/" target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-all duration-300 hover:scale-110">
              <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#388E3C" />
              </svg>
            </a>

            <a href="https://github.com/yourusername" target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-all duration-300 hover:scale-110">
              <svg width="38px" height="38px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#388E3C">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>

            <a href="https://linkedin.com/in/abdullah-aldzic" target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-all duration-300 hover:scale-110">
              <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#388E3C" />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#388E3C" />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#388E3C" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#388E3C" />
              </svg>
            </a>
          </div>
        </div>

        <div class="opacity-0 translate-y-10 transition-all duration-500 ease-out w-full" v-intersect="onIntersect">
          <form action="https://formspree.io/f/meozbgrr" method="POST"
            class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6">
            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('formName') }}</label>
              <input type="text" name="name" required
                class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-green-700 outline-none" />
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input type="email" name="email" required
                class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-green-700 outline-none" />
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">{{ $t('formMessage') }}</label>
              <textarea name="message" rows="5" required
                class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-green-700 outline-none"></textarea>
            </div>

            <button type="submit"
              class="w-full py-3 px-6 rounded-lg bg-green-700 text-white font-medium hover:bg-green-800 transition duration-300 cursor-pointer">
              {{ $t('sendMessage') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

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
