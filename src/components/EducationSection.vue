<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h6 class="text-primary text-uppercase mb-2 fade-in">My Background</h6>
        <h2 class="display-5 fw-bold mb-3 fade-in">Education & Certifications</h2>
        <p class="lead fade-in">
          Academic qualifications and professional development
        </p>
      </div>
    </div>

    <!-- Formal Education -->
    <div class="row mb-5">
      <div class="col-12 mb-4">
        <h3 class="border-start border-primary border-5 ps-3 fade-in">Formal Education</h3>
      </div>
      
      <!-- University Education -->
      <div class="col-md-6 mb-4 slide-in-right">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <span class="education-icon bg-primary text-white me-3">
                <i class="bi bi-mortarboard-fill"></i>
              </span>
              <div>
                <h4 class="mb-0">Bachelor of Science in Computer Science</h4>
                <h6 class="text-muted mb-0">University Name</h6>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span class="badge bg-light text-dark px-3 py-2">2014 - 2018</span>
              <span class="badge bg-primary px-3 py-2">GPA: 3.8/4.0</span>
            </div>
            <h6 class="mb-2">Relevant Coursework:</h6>
            <div class="course-tags mb-3">
              <span class="badge bg-light text-dark me-1 mb-1">Data Structures</span>
              <span class="badge bg-light text-dark me-1 mb-1">Algorithms</span>
              <span class="badge bg-light text-dark me-1 mb-1">Web Development</span>
              <span class="badge bg-light text-dark me-1 mb-1">Database Systems</span>
              <span class="badge bg-light text-dark me-1 mb-1">Software Engineering</span>
            </div>
            <p>Senior thesis on responsive web application architecture received departmental honors.</p>
          </div>
        </div>
      </div>
      
      <!-- High School Education -->
      <div class="col-md-6 mb-4 slide-in-left">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <span class="education-icon bg-secondary text-white me-3">
                <i class="bi bi-book-fill"></i>
              </span>
              <div>
                <h4 class="mb-0">High School Diploma</h4>
                <h6 class="text-muted mb-0">High School Name</h6>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span class="badge bg-light text-dark px-3 py-2">2010 - 2014</span>
              <span class="badge bg-secondary px-3 py-2">With Honors</span>
            </div>
            <h6 class="mb-2">Achievements:</h6>
            <ul>
              <li>Advanced Placement in Computer Science</li>
              <li>Mathematics Club President</li>
              <li>Regional Science Fair Winner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Certifications -->
    <div class="row">
      <div class="col-12 mb-4">
        <h3 class="border-start border-success border-5 ps-3 fade-in">Professional Certifications</h3>
      </div>
      
      <!-- Certification 1 -->
      <div class="col-lg-4 col-md-6 mb-4 fade-in-up">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <span class="education-icon bg-success text-white me-3">
                <i class="bi bi-patch-check-fill"></i>
              </span>
              <div>
                <h4 class="mb-0">Frontend Web Developer</h4>
                <h6 class="text-muted mb-0">Certification Platform 1</h6>
              </div>
            </div>
            <div class="mb-3">
              <span class="badge bg-light text-dark px-3 py-2">Issued: June 2021</span>
            </div>
            <p>Advanced certification in modern frontend development techniques including React, Vue, and responsive design principles.</p>
          </div>
        </div>
      </div>
      
      <!-- Certification 2 -->
      <div class="col-lg-4 col-md-6 mb-4 fade-in-up" style="animation-delay: 0.2s;">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <span class="education-icon bg-success text-white me-3">
                <i class="bi bi-patch-check-fill"></i>
              </span>
              <div>
                <h4 class="mb-0">Full-Stack JavaScript</h4>
                <h6 class="text-muted mb-0">Certification Platform 2</h6>
              </div>
            </div>
            <div class="mb-3">
              <span class="badge bg-light text-dark px-3 py-2">Issued: March 2020</span>
            </div>
            <p>Comprehensive certification covering Node.js, Express, MongoDB, and client-side JavaScript frameworks.</p>
          </div>
        </div>
      </div>
      
      <!-- Certification 3 -->
      <div class="col-lg-4 col-md-6 mb-4 fade-in-up" style="animation-delay: 0.4s;">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <span class="education-icon bg-success text-white me-3">
                <i class="bi bi-patch-check-fill"></i>
              </span>
              <div>
                <h4 class="mb-0">UI/UX Design Principles</h4>
                <h6 class="text-muted mb-0">Certification Platform 3</h6>
              </div>
            </div>
            <div class="mb-3">
              <span class="badge bg-light text-dark px-3 py-2">Issued: November 2019</span>
            </div>
            <p>Focused on user experience research, interface design, prototyping, and usability testing principles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script logic needed for this component
</script>

<style scoped>
.education-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in both;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out both;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out both;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { 
    opacity: 0;
    transform: translateX(30px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
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

/* Card hover effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
</style>

