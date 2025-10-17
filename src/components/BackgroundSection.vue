<template>
  <div id="background" class="bg-[#f8f9fa] dark:bg-gray-900">
    <div class="container">
      <div class="text-center pt-8 pb-2">
        <span class="font-medium text-5xl text-center italiana">{{ $t('background') + '.' }}</span>
      </div>
      <hr class="w-1/2 mx-auto" />
      <div class="flex flex-col sm:flex sm:flex-row space-x-24">
        <div class="opacity-0 translate-y-10 transition-all duration-700 ease-out" v-intersect="onIntersect">
          <Timeline :data="educationData" :title="$t('education')" />
        </div>
        <div class="opacity-0 translate-y-10 transition-all duration-700 ease-out" v-intersect="onIntersect"
          style="transition-delay: 200ms">
          <Timeline :data="experienceData" :title="$t('workExperience')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Timeline from '../components/helpers/TimelineBackground.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const educationLists = {
  en: [
    {
      name: 'University of Sarajevo',
      place: 'Sarajevo, Bosnia and Herzegovina',
      degree: 'Bachelor of Computer and Informations Technologies',
      gpa: '7.0/10.0',
      date: '2019 - 2024',
      description:
        'Focused on software development, databases, networking, and web & mobile technologies. Completed multiple student projects.',
      skills: [
        'Object-Oriented programming',
        'Web development',
        'Mobile development',
        'Databases',
        'Networks',
      ],
    },
    {
      name: 'Gymnasium',
      place: 'Velika Kladusa, Bosnia and Herzegovina',
      degree: 'High School Diploma (General Education)',
      gpa: '4.5/5.0',
      date: '2015 - 2019',
      description:
        'Completed general secondary education with emphasis on mathematics, logic, and basic computer skills.',
      skills: [
        'Basic Programming',
        'Mathematics & Logical Thinking',
        'Problem Solving',
        'Microsoft Office',
        'Teamwork & Project Work',
      ],
    },
  ],
  bs: [
    {
      name: 'Univerzitet Sarajevo',
      place: 'Sarajevo, Bosna i Hercegovina',
      degree: 'Diploma iz Kompjuterskih i informacijskih tehnologija',
      gpa: '7.0/10.0',
      date: '2019 - 2024',
      description:
        'Fokus na razvoj softvera, baze podataka, mreže i web & mobilne tehnologije. Završeni brojni studentski projekti.',
      skills: [
        'Objektno Orijentisano Programiranje',
        'Web razvoj',
        'Mobilni razvoj',
        'Baze podataka',
        'Mreže',
      ],
    },
    {
      name: 'Gimnazija',
      place: 'Velika Kladuša, Bosna i Hercegovina',
      degree: 'Matura (Opšte Obrazovanje)',
      gpa: '4.5/5.0',
      date: '2015 - 2019',
      description:
        'Opšte srednje obrazovanje sa naglaskom na matematiku, logiku i osnovne kompjuterske vještine.',
      skills: [
        'Osnove Programiranja',
        'Matematika & Logičko Razmišljanje',
        'Rješavanje Problema',
        'Microsoft Office',
        'Timski rad & Projekti',
      ],
    },
  ],
  de: [
    {
      name: 'Universität Sarajevo',
      place: 'Sarajevo, Bosnien und Herzegowina',
      degree: 'Bachelor der Computer- und Informationstechnologien',
      gpa: '7.0/10.0',
      date: '2019 - 2024',
      description:
        'Fokus auf Softwareentwicklung, Datenbanken, Netzwerke und Web- & Mobiltechnologien. Mehrere Studentenprojekte abgeschlossen.',
      skills: [
        'Objektorientierte Programmierung',
        'Webentwicklung',
        'Mobile Entwicklung',
        'Datenbanken',
        'Netzwerke',
      ],
    },
    {
      name: 'Gymnasium',
      place: 'Velika Kladuša, Bosnien und Herzegowina',
      degree: 'Abitur (Allgemeinbildung)',
      gpa: '4.5/5.0',
      date: '2015 - 2019',
      description:
        'Allgemeine Sekundarschulbildung mit Schwerpunkt Mathematik, Logik und grundlegende Computerkenntnisse.',
      skills: [
        'Grundlegendes Programmieren',
        'Mathematik & logisches Denken',
        'Problemlösung',
        'Microsoft Office',
        'Teamarbeit & Projektarbeit',
      ],
    },
  ],
}

const experienceLists = {
  en: [
    {
      name: 'Freelance Web Developer',
      place: 'Remote',
      position: 'Fullstack Developer',
      date: '2025 - Present',
      description:
        'Develop and maintain web applications using Laravel and VueJS. Work closely with clients to deliver modern and responsive websites.',
      skills: ['Laravel', 'VueJS', 'SQL databases', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosnia and Herzegovina and remote',
      position: 'Junior Web Developer',
      date: '2022 - 2025',
      description:
        'Developed and maintained web applications using Laravel and VueJS. Work closely with clients to deliver modern and responsive websites.',
      skills: ['Laravel', 'VueJS', 'SQL databases', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosnia and Herzegovina',
      position: 'Intern',
      date: '2022 - 2022, 3 months',
      description:
        'Worked on internal web apps, implemented new features, and maintained legacy codebases. Collaborated in agile teams.',
      skills: ['NodeJS', 'AdonisJS', 'MySQL', 'Git', 'ReactJS', 'Postman'],
    },
  ],
  bs: [
    {
      name: 'Freelance Web Developer',
      place: 'Remote',
      position: 'Fullstack Developer',
      date: '2025 - Present',
      description:
        'Razvijam i održavam web aplikacije koristeći Laravel i VueJS. Blisko sarađujem s klijentima kako bih isporučio moderne i responzivne web stranice.',
      skills: ['Laravel', 'VueJS', 'SQL baze podataka', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosna i Hercegovina i remote',
      position: 'Junior Web Developer',
      date: '2022 - 2025',
      description:
        'Razvijao i održavao web aplikacije koristeći Laravel i VueJS. Blisko sarađujem s klijentima kako bih isporučio moderne i responzivne web stranice.',
      skills: ['Laravel', 'VueJS', 'SQL baze podataka', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosna i Hercegovina',
      position: 'Praktikant',
      date: '2022 - 2022, 3 mjeseca',
      description:
        'Radio na internim web aplikacijama, implementirao nove funkcionalnosti i održavao legacy kod. Sarađivao u agilnim timovima.',
      skills: ['NodeJS', 'AdonisJS', 'MySQL', 'Git', 'ReactJS', 'Postman'],
    },
  ],
  de: [
    {
      name: 'Freelance Web Developer',
      place: 'Remote',
      position: 'Fullstack Developer',
      date: '2025 - Heute',
      description:
        'Entwicklung und Wartung von Webanwendungen mit Laravel und VueJS. Enge Zusammenarbeit mit Kunden für moderne und responsive Websites.',
      skills: ['Laravel', 'VueJS', 'SQL Datenbanken', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosnien und Herzegowina und remote',
      position: 'Junior Web Developer',
      date: '2022 - 2025',
      description:
        'Entwicklung und Wartung von Webanwendungen mit Laravel und VueJS. Enge Zusammenarbeit mit Kunden für moderne und responsive Websites.',
      skills: ['Laravel', 'VueJS', 'SQL Datenbanken', 'TailwindCSS', 'REST API', 'Git'],
    },
    {
      name: 'Misija',
      place: 'Sarajevo, Bosnien und Herzegowina',
      position: 'Praktikant',
      date: '2022 - 2022, 3 Monate',
      description:
        'Arbeit an internen Webanwendungen, Implementierung neuer Features und Wartung von Legacy-Code. Zusammenarbeit in agilen Teams.',
      skills: ['NodeJS', 'AdonisJS', 'MySQL', 'Git', 'ReactJS', 'Postman'],
    },
  ],
}

const educationData = computed(() => educationLists[locale.value])
const experienceData = computed(() => experienceLists[locale.value])

console.log(educationData.value)
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
<style scoped></style>
