<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h6 class="text-primary text-uppercase mb-2 fade-in">Get In Touch</h6>
        <h2 class="display-5 fw-bold mb-3 fade-in">Contact Me</h2>
        <p class="lead fade-in">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <div class="card border-0 shadow-sm fade-in-up">
          <div class="card-body text-center p-5">
            <div class="mb-4">
              <div class="avatar-circle mx-auto mb-4 slide-in-top">
                <i class="bi bi-person-circle fs-1"></i>
              </div>
              <h4 class="mb-3 fade-in">Your Name</h4>
              <p class="text-muted fade-in">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </div>
            
            <!-- Email -->
            <div class="d-flex align-items-center justify-content-center mb-4 fade-in">
              <div class="contact-icon bg-primary text-white me-3">
                <i class="bi bi-envelope"></i>
              </div>
              <a href="mailto:your.email@example.com" class="text-decoration-none text-dark">
                your.email@example.com
              </a>
            </div>
            
            <!-- Social Media Links -->
            <div class="social-links mt-5 fade-in-up">
              <a href="https://github.com/" target="_blank" class="social-link bg-dark" aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" class="social-link bg-primary" aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" class="social-link bg-info" aria-label="Twitter">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="social-link bg-danger" aria-label="Portfolio">
                <i class="bi bi-folder2-open"></i>
              </a>
              <a href="#" class="social-link bg-success" aria-label="Blog">
                <i class="bi bi-pencil-square"></i>
              </a>
            </div>
            
            <!-- Call to action -->
            <div class="mt-5 pt-3 fade-in">
              <a href="mailto:your.email@example.com" class="btn btn-primary btn-lg">
                Send Message
              </a>
            </div>
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
.avatar-circle {
  width: 100px;
  height: 100px;
  background-color: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in both;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}

.slide-in-top {
  animation: slideInTop 0.8s ease-out both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-30px);
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
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}
</style>

