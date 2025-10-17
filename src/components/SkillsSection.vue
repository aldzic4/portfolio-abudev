<template>
  <div id="skills" class="bg-white dark:bg-gray-900 mb-12">
    <div class="container pt-8">
      <div class="text-center pb-2">
        <span class="font-medium text-5xl text-center italiana">{{ $t('skills') + '.' }}</span>
      </div>
      <hr class="w-1/2 mx-auto" />
      <br />
      <div class="grid grid-cols-2 md:grid-cols-3 items-center text-center mt-4 space-y-12">
        <div v-for="(skill, index) in skillsData"
          class="uniquefont opacity-0 translate-y-10 transition-all duration-700 ease-out" v-intersect="onIntersect"
          :style="{ transitionDelay: index * 150 + 'ms' }" :key="skill.title">
          <div class="">
            <component :is="skill.icon" class="w-12 h-12 text-green-700 text-center mx-auto" />
          </div>
          <div class="title2 pt-2">{{ skill.title }}</div>
          <span class="title3">{{ skill.info.join(', ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CodeBracketIcon,
  ServerStackIcon,
  CircleStackIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const skillsLists = {
  en: [
    {
      title: 'Frontend Development',
      icon: CodeBracketIcon,
      info: ['VueJS', 'NuxtJS', 'Tailwind CSS', 'JavaScript', 'Typescript'],
    },
    {
      title: 'Backend Development',
      icon: ServerStackIcon,
      info: ['PHP(Laravel)', 'Node(AdonisJS)', 'Java(basics)'],
    },
    {
      title: 'Databases',
      icon: CircleStackIcon,
      info: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Programming Languages',
      icon: CommandLineIcon,
      info: ['PHP', 'JavaScript', 'Typescript', 'Java(basics)', 'C++(basics)'],
    },
    {
      title: 'DevOps & Tools',
      icon: WrenchScrewdriverIcon,
      info: ['Git', 'Ploi', 'Postman', 'Redis'],
    },
    {
      title: 'Soft Skills',
      icon: UserGroupIcon,
      info: ['Problem Solving', 'Teamwork', 'Communication', 'Agile/Scrum'],
    },
  ],
  bs: [
    {
      title: 'Frontend',
      icon: CodeBracketIcon,
      info: ['VueJS', 'NuxtJS', 'Tailwind CSS', 'JavaScript', 'Typescript'],
    },
    {
      title: 'Backend',
      icon: ServerStackIcon,
      info: ['PHP(Laravel)', 'Node(AdonisJS)', 'Java(osnovno)'],
    },
    {
      title: 'Baze Podataka',
      icon: CircleStackIcon,
      info: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Programski Jezici',
      icon: CommandLineIcon,
      info: ['PHP', 'JavaScript', 'Typescript', 'Java(osnovno)', 'C++(osnovno)'],
    },
    {
      title: 'DevOps & Alati',
      icon: WrenchScrewdriverIcon,
      info: ['Git', 'Ploi', 'Postman', 'Redis'],
    },
    {
      title: 'Soft Skills',
      icon: UserGroupIcon,
      info: ['Rješavanje Problema', 'Timski rad', 'Komunikacija', 'Agile/Scrum'],
    },
  ],
  de: [
    {
      title: 'Frontend Entwicklung',
      icon: CodeBracketIcon,
      info: ['VueJS', 'NuxtJS', 'Tailwind CSS', 'JavaScript', 'Typescript'],
    },
    {
      title: 'Backend Entwicklung',
      icon: ServerStackIcon,
      info: ['PHP(Laravel)', 'Node(AdonisJS)', 'Java(Grundkenntnisse)'],
    },
    {
      title: 'Datenbanken',
      icon: CircleStackIcon,
      info: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Programmiersprachen',
      icon: CommandLineIcon,
      info: ['PHP', 'JavaScript', 'Typescript', 'Java(Grundkenntnisse)', 'C++(Grundkenntnisse)'],
    },
    {
      title: 'DevOps & Tools',
      icon: WrenchScrewdriverIcon,
      info: ['Git', 'Ploi', 'Postman', 'Redis'],
    },
    {
      title: 'Soft Skills',
      icon: UserGroupIcon,
      info: ['Problemlösung', 'Teamarbeit', 'Kommunikation', 'Agile/Scrum'],
    },
  ],
}

const skillsData = computed(() => skillsLists[locale.value])

const onIntersect = (el, isIntersecting) => {
  if (isIntersecting) {
    el.classList.remove('opacity-0', 'translate-y-10')
    el.classList.add('opacity-100', 'translate-y-0')
  }
}
</script>

<script>
// custom directive za scroll animacije
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
.title {
  font-size: 30px;
  font-weight: 500;
}

.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: rgb(212, 149, 97);
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: rgb(212, 149, 97);
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
