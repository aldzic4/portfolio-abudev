<template>
  <div class="">
    <div>
      <div class="">
        <p class="px-4 text-xl font-semibold">
          {{ title }}
        </p>
        <ul class="timeline m-0 pt-1" v-for="e in data" :key="e.name">
          <li class="m-0 pb-2">
            <div class="ml-6">
              <div class="px-2 title2">{{ e.name }}, {{ e.place }}</div>
              <div class="px-2 title3">
                {{ e.degree || e.position }}
                {{ e.gpa ? '(' + e.gpa + ')' : '' }}
              </div>
              <div class="px-2 date">{{ e.date }}</div>
              <div class="px-2 pb-2 pt-2" style="text-align: justify">
                {{ e.description }}
              </div>
              <span
                v-for="s in e.skills"
                :key="s"
                class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-medium rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-105 transform transition-transform duration-300"
              >
                {{ s }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  title: String,
})

console.log(props)
</script>

<style scoped>
.title1 {
  font-size: 24px;
  font-weight: 500;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: rgb(211, 227, 233);
  transition: all 0.5s;
  font-weight: 500;
}

.date {
  font-size: 14px;
  font-weight: 300;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: ' ';
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 93%;
  margin-top: 20px;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: ' ';
  background: rgb(212, 149, 97);
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgb(236, 159, 117);
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}

.bg-dark2 {
  background-color: #3c4148 !important;
}
</style>
