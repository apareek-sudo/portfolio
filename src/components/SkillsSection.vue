<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h6 class="text-primary text-uppercase mb-2 fade-in">What I Do</h6>
        <h2 class="display-5 fw-bold mb-3 fade-in">My Skills</h2>
        <p class="lead fade-in">
          A showcase of my technical abilities and expertise
        </p>
      </div>
    </div>

    <!-- Skills Categories -->
    <div class="row g-4">
      <!-- Frontend Skills -->
      <div class="col-lg-4 col-md-6 slide-in-left">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-4">
              <span class="skill-icon-bg bg-primary text-white">
                <i class="bi bi-code"></i>
              </span>
              <h3 class="ms-3 mb-0">Frontend</h3>
            </div>
            
            <!-- Individual skills with progress bars -->
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">HTML & CSS</span>
                <span>90%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">JavaScript</span>
                <span>85%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Vue.js</span>
                <span>80%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Responsive Design</span>
                <span>90%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Backend Skills -->
      <div class="col-lg-4 col-md-6 slide-in-left" style="animation-delay: 0.2s;">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-4">
              <span class="skill-icon-bg bg-success text-white">
                <i class="bi bi-server"></i>
              </span>
              <h3 class="ms-3 mb-0">Backend</h3>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Node.js</span>
                <span>75%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">RESTful APIs</span>
                <span>80%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Database Design</span>
                <span>70%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Python</span>
                <span>65%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tools & Technologies -->
      <div class="col-lg-4 col-md-6 slide-in-left" style="animation-delay: 0.4s;">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center mb-4">
              <span class="skill-icon-bg bg-info text-white">
                <i class="bi bi-tools"></i>
              </span>
              <h3 class="ms-3 mb-0">Tools & Technologies</h3>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Git & GitHub</span>
                <span>85%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">CI/CD</span>
                <span>75%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">Docker</span>
                <span>70%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            
            <div class="skill-item mb-3">
              <div class="d-flex justify-content-between mb-1">
                <span class="fw-medium">UI/UX Design</span>
                <span>80%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style scoped>
.skill-icon-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.fade-in {
  animation: fadeIn 1s ease-in both;
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

/* Add hover effect to cards */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
</style>

