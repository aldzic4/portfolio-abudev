<script setup>
import BackgroundSection from './components/BackgroundSection.vue'
import ContactSection from './components/ContactSection.vue'
import FaqSection from './components/FaqSection.vue'
import HeroSection from './components/HeroSection.vue'
import MainFooter from './components/MainFooter.vue'
import Navbar from './components/MainNavbar.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import StatsSection from './components/StatsSection.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection />
    <StatsSection />
    <BackgroundSection />
    <SkillsSection />
    <ServicesSection />
    <ProjectsSection />
    <FaqSection />
    <ContactSection />
  </main>
  <MainFooter />
</template>

<style scoped></style>
