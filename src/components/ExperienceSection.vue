<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h6 class="text-primary text-uppercase mb-2 fade-in">My Journey</h6>
        <h2 class="display-5 fw-bold mb-3 fade-in">Professional Experience</h2>
        <p class="lead fade-in">
          A chronological showcase of my professional career path
        </p>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="timeline">
      <!-- First Job -->
      <div class="timeline-item fade-in-right">
        <div class="timeline-item-content">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="company-logo me-3">
                  <span class="company-logo-placeholder bg-primary text-white">C1</span>
                </div>
                <div>
                  <h4 class="mb-0">Senior Frontend Developer</h4>
                  <h6 class="text-muted mb-0">Company Name 1</h6>
                </div>
              </div>
              
              <div class="d-flex justify-content-between mb-3">
                <span class="badge bg-light text-dark px-3 py-2">Jan 2022 - Present</span>
                <span class="badge bg-light text-dark px-3 py-2">Remote</span>
              </div>
              
              <h6 class="mb-2">Key Responsibilities:</h6>
              <ul class="mb-3">
                <li>Led the frontend development team in building responsive web applications</li>
                <li>Implemented new features using Vue.js and optimized existing codebase</li>
                <li>Collaborated with UX designers to create intuitive user interfaces</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
              
              <h6 class="mb-2">Technologies:</h6>
              <div class="tech-tags">
                <span class="badge bg-primary me-1 mb-1">Vue.js</span>
                <span class="badge bg-primary me-1 mb-1">JavaScript</span>
                <span class="badge bg-primary me-1 mb-1">HTML/CSS</span>
                <span class="badge bg-primary me-1 mb-1">REST APIs</span>
                <span class="badge bg-primary me-1 mb-1">Git</span>
              </div>
            </div>
          </div>
          <span class="timeline-item-date">2022</span>
        </div>
      </div>
      
      <!-- Second Job -->
      <div class="timeline-item timeline-item-left fade-in-left">
        <div class="timeline-item-content">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="company-logo me-3">
                  <span class="company-logo-placeholder bg-success text-white">C2</span>
                </div>
                <div>
                  <h4 class="mb-0">Frontend Developer</h4>
                  <h6 class="text-muted mb-0">Company Name 2</h6>
                </div>
              </div>
              
              <div class="d-flex justify-content-between mb-3">
                <span class="badge bg-light text-dark px-3 py-2">Aug 2019 - Dec 2021</span>
                <span class="badge bg-light text-dark px-3 py-2">New York, NY</span>
              </div>
              
              <h6 class="mb-2">Key Responsibilities:</h6>
              <ul class="mb-3">
                <li>Developed and maintained responsive web applications</li>
                <li>Created interactive user interfaces using modern JavaScript frameworks</li>
                <li>Implemented RESTful API integrations</li>
                <li>Improved application performance and user experience</li>
              </ul>
              
              <h6 class="mb-2">Technologies:</h6>
              <div class="tech-tags">
                <span class="badge bg-success me-1 mb-1">React.js</span>
                <span class="badge bg-success me-1 mb-1">JavaScript</span>
                <span class="badge bg-success me-1 mb-1">SASS</span>
                <span class="badge bg-success me-1 mb-1">Webpack</span>
                <span class="badge bg-success me-1 mb-1">Jira</span>
              </div>
            </div>
          </div>
          <span class="timeline-item-date">2019</span>
        </div>
      </div>
      
      <!-- Third Job -->
      <div class="timeline-item fade-in-right">
        <div class="timeline-item-content">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="company-logo me-3">
                  <span class="company-logo-placeholder bg-info text-white">C3</span>
                </div>
                <div>
                  <h4 class="mb-0">Web Developer Intern</h4>
                  <h6 class="text-muted mb-0">Company Name 3</h6>
                </div>
              </div>
              
              <div class="d-flex justify-content-between mb-3">
                <span class="badge bg-light text-dark px-3 py-2">May 2018 - July 2019</span>
                <span class="badge bg-light text-dark px-3 py-2">Boston, MA</span>
              </div>
              
              <h6 class="mb-2">Key Responsibilities:</h6>
              <ul class="mb-3">
                <li>Assisted in developing website features and functionality</li>
                <li>Created responsive layouts using HTML, CSS, and JavaScript</li>
                <li>Fixed bugs and improved website performance</li>
                <li>Participated in team meetings and contributed to project planning</li>
              </ul>
              
              <h6 class="mb-2">Technologies:</h6>
              <div class="tech-tags">
                <span class="badge bg-info me-1 mb-1">HTML5</span>
                <span class="badge bg-info me-1 mb-1">CSS3</span>
                <span class="badge bg-info me-1 mb-1">JavaScript</span>
                <span class="badge bg-info me-1 mb-1">jQuery</span>
                <span class="badge bg-info me-1 mb-1">Bootstrap</span>
              </div>
            </div>
          </div>
          <span class="timeline-item-date">2018</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script logic needed for this component
</script>

<style scoped>
/* Timeline styling */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #e9ecef;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  z-index: 0;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: 50%;
  margin-bottom: 30px;
}

.timeline-item-left {
  left: 0;
}

.timeline-item-content {
  position: relative;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 4px solid #007bff;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item-left::after {
  left: auto;
  right: -10px;
}

.timeline-item::after {
  left: -10px;
}

.timeline-item-date {
  position: absolute;
  top: 15px;
  font-weight: bold;
  color: #6c757d;
}

.timeline-item .timeline-item-date {
  left: -95px;
}

.timeline-item-left .timeline-item-date {
  right: -95px;
  left: auto;
}

.company-logo-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in both;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out both;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease-out both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInLeft {
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

/* Card hover effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .timeline::after {
    left: 31px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
  
  .timeline-item-left {
    left: 0;
  }
  
  .timeline-item::after {
    left: 21px;
  }
  
  .timeline-item-left::after {
    left: 21px;
    right: auto;
  }
  
  .timeline-item .timeline-item-date,
  .timeline-item-left .timeline-item-date {
    left: -25px;
    right: auto;
    font-size: 0.8rem;
    width: 40px;
    text-align: center;
  }
}
</style>

