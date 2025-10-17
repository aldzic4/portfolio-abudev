<script setup>
import BackgroundSection from './components/BackgroundSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import MainFooter from './components/MainFooter.vue'
import Navbar from './components/MainNavbar.vue'
import SkillsSection from './components/SkillsSection.vue'
</script>

<template>
  <Navbar />
  <div class="">
    <HeroSection />
    <BackgroundSection />
    <SkillsSection />
    <ContactSection />
    <MainFooter />
  </div>
</template>

<style scoped></style>
