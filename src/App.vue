<script setup>
import { useRouter } from 'vue-router';
import HeroSection from './components/HeroSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'

// Get router instance
const router = useRouter();

// Function for smooth scrolling using router
const scrollToSection = (sectionId) => {
  router.push({ hash: `#${sectionId}` });
};
</script>

<template>
  <div class="page-wrapper">
    <!-- Fixed Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">My Portfolio</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/#hero">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#experience">Experience</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#education">Education</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Adding top padding to accommodate fixed navbar -->
      <div id="hero" class="section">
        <HeroSection />
      </div>

      <div id="skills" class="section">
        <SkillsSection />
      </div>

      <div id="experience" class="section">
        <ExperienceSection />
      </div>

      <div id="education" class="section">
        <EducationSection />
      </div>

      <div id="contact" class="section">
        <ContactSection />
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-4 bg-dark text-white text-center footer">
      <div class="container">
        <p class="mb-0">&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Base styles */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px; /* For fixed header */
}

body {
  margin: 0;
  padding: 0;
  padding-top: 56px; /* Height of navbar */
  min-height: 100vh;
  overflow-x: hidden;
}

/* Layout structure */
#app, .page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1 0 auto; /* Flex grow, don't shrink, auto basis */
  width: 100%;
}

/* Section styling */
.section {
  padding: 80px 0;
  width: 100%;
  display: flex;
  align-items: center;
}

/* Alternating section colors */
.section:nth-child(odd) {
  background-color: #f8f9fa;
}

.section:nth-child(even) {
  background-color: #ffffff;
}

/* Footer styling */
.footer {
  flex-shrink: 0; /* Prevent footer from shrinking */
  width: 100%;
  background-color: #212529;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 40px 0;
  }
}
</style>
