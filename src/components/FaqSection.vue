<template>
  <div id="faq" class="bg-white dark:bg-gray-900 mb-12">
    <div class="container pt-8">
      <div class="text-center pb-2">
        <h2 class="font-medium text-5xl text-center italiana">{{ $t('faq') + '.' }}</h2>
      </div>
      <hr class="w-1/2 mx-auto" />
      <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-4">
        {{ $t('faqSubtitle') }}
      </p>

      <div class="max-w-3xl mx-auto mt-10 space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="item.q"
          class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden opacity-0 translate-y-10 transition-all duration-700 ease-out"
          v-intersect="onIntersect"
          :style="{ transitionDelay: index * 100 + 'ms' }"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors duration-200 cursor-pointer"
            :aria-expanded="openIndex === index"
          >
            <span>{{ item.q }}</span>
            <ChevronDownIcon
              class="w-5 h-5 shrink-0 text-green-700 transition-transform duration-300"
              :class="openIndex === index ? 'rotate-180' : ''"
            />
          </button>
          <div
            class="grid transition-all duration-300 ease-out"
            :style="{ gridTemplateRows: openIndex === index ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-5 pb-4 text-gray-600 dark:text-gray-300">{{ item.a }}</p>
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
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const { locale } = useI18n()

const faqLists = {
  en: [
    {
      q: 'What services do you offer?',
      a: 'I build fullstack web applications with Laravel and Vue.js — from internal tools and admin panels to public-facing products, covering everything from database design to deployment.',
    },
    {
      q: 'Are you available for new projects?',
      a: "Yes, I'm currently open to new freelance projects and collaborations. Feel free to reach out and we can discuss your idea.",
    },
    {
      q: 'Do you work remotely?',
      a: "Yes, I work remotely and I'm based in Graz, Austria. I collaborate with clients across different time zones, mainly via email or video calls.",
    },
    {
      q: 'What technologies do you specialize in?',
      a: 'My main stack is Laravel and Vue.js (often with Inertia.js), Tailwind CSS, and MySQL/PostgreSQL — but I pick up new tools whenever a project calls for it.',
    },
    {
      q: 'How long does a typical project take?',
      a: "It depends on the scope — a small feature might take a few days, while a full application can take several weeks to months. I'll give you a realistic estimate after we discuss the requirements.",
    },
    {
      q: 'How can I get in touch?',
      a: 'The fastest way is through the contact form below, or by emailing me directly at abdullahaldzic4@gmail.com.',
    },
  ],
  bs: [
    {
      q: 'Koje usluge nudiš?',
      a: 'Razvijam fullstack web aplikacije koristeći Laravel i Vue.js — od internih alata i admin panela do javnih proizvoda, uz kompletan proces od baze podataka do deploya.',
    },
    {
      q: 'Da li si dostupan za nove projekte?',
      a: 'Da, trenutno sam otvoren za nove freelance projekte i saradnje. Slobodno mi se javi pa da razgovaramo o tvojoj ideji.',
    },
    {
      q: 'Da li radiš na daljinu?',
      a: 'Da, radim na daljinu, a baziran sam u Grazu, Austrija. Sarađujem s klijentima iz različitih vremenskih zona, uglavnom putem emaila ili video poziva.',
    },
    {
      q: 'Za koje tehnologije si specijaliziran?',
      a: 'Moj glavni stack je Laravel i Vue.js (često uz Inertia.js), Tailwind CSS te MySQL/PostgreSQL — ali se lako snađem i s novim alatima kad projekat to zahtijeva.',
    },
    {
      q: 'Koliko traje tipičan projekat?',
      a: 'Zavisi od obima — manja funkcionalnost može trajati par dana, dok kompletna aplikacija može trajati sedmicama ili mjesecima. Realnu procjenu dajem nakon što razgovaramo o zahtjevima.',
    },
    {
      q: 'Kako mogu stupiti u kontakt?',
      a: 'Najbrže preko kontakt forme ispod, ili direktno na email abdullahaldzic4@gmail.com.',
    },
  ],
  de: [
    {
      q: 'Welche Leistungen bietest du an?',
      a: 'Ich entwickle Fullstack-Webanwendungen mit Laravel und Vue.js — von internen Tools und Admin-Panels bis zu öffentlichen Produkten, vom Datenbankdesign bis zum Deployment.',
    },
    {
      q: 'Bist du für neue Projekte verfügbar?',
      a: 'Ja, ich bin aktuell offen für neue Freelance-Projekte und Kooperationen. Melde dich gerne, dann besprechen wir deine Idee.',
    },
    {
      q: 'Arbeitest du remote?',
      a: 'Ja, ich arbeite remote und bin in Graz, Österreich, ansässig. Ich arbeite mit Kunden in verschiedenen Zeitzonen zusammen, hauptsächlich per E-Mail oder Videoanruf.',
    },
    {
      q: 'Auf welche Technologien bist du spezialisiert?',
      a: 'Mein Hauptstack ist Laravel und Vue.js (oft mit Inertia.js), Tailwind CSS sowie MySQL/PostgreSQL — neue Tools eigne ich mir bei Bedarf schnell an.',
    },
    {
      q: 'Wie lange dauert ein typisches Projekt?',
      a: 'Das hängt vom Umfang ab — ein kleines Feature kann ein paar Tage dauern, eine vollständige Anwendung mehrere Wochen bis Monate. Eine realistische Schätzung gebe ich nach Besprechung der Anforderungen.',
    },
    {
      q: 'Wie kann ich dich kontaktieren?',
      a: 'Am schnellsten über das Kontaktformular unten oder direkt per E-Mail an abdullahaldzic4@gmail.com.',
    },
  ],
}

const faqItems = computed(() => faqLists[locale.value])

const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

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
