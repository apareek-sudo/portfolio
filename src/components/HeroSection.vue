<template>
  <div class="container">
    <div class="row align-items-center">
      <!-- Text content column -->
      <div class="col-lg-8 hero-text-container">
        <h6 class="fw-normal text-uppercase mb-3 fade-in">Welcome to my portfolio</h6>
        <h1 class="display-3 fw-bold mb-4 slide-in-left">Your Name</h1>
        <p class="lead mb-4 slide-in-left-delay">
          Front-end Developer & UI/UX Designer specializing in creating responsive, 
          user-friendly web applications with modern technologies.
        </p>
        <div class="fade-in-up">
          <button 
            class="btn btn-primary btn-lg px-4 me-2"
            @click="scrollToSection('skills')"
          >
            View My Work
          </button>
          <button 
            class="btn btn-outline-dark btn-lg px-4"
            @click="scrollToSection('contact')"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <!-- Profile image column (optional) -->
      <div class="col-lg-4 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
        <div class="profile-image-container">
          <div class="profile-image-placeholder fade-in-right">
            <!-- Replace with an actual image when available -->
            <div class="avatar-placeholder d-flex justify-content-center align-items-center">
              <i class="bi bi-person-circle fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Function to scroll to a section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero-text-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.avatar-placeholder {
  width: 250px;
  height: 250px;
  background-color: #f0f0f0;
  border-radius: 50%;
  color: #666;
  font-size: 5rem;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 1s ease-in both;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out both;
  animation-delay: 0.3s;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out both;
}

.slide-in-left-delay {
  animation: slideInLeft 0.8s ease-out both;
  animation-delay: 0.2s;
}

.fade-in-right {
  animation: fadeInRight 1s ease-out both;
  animation-delay: 0.5s;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .avatar-placeholder {
    width: 200px;
    height: 200px;
  }
}
</style>

