<template>
  <div class="jumbotron text-center text-light">
      <h1 class="display-3">What is Dazzle District?</h1>
      <p class="lead">Where elegance meets innovation in the world of fine jewelry.</p>
  </div>

  <div class="container py-4 mb-5">
      <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
              <div class="card h-100 p-4 animate__animated animate__fadeIn">
                  <img src="https://i.ibb.co/0p753sR/1-CUSTOM-FINE-JEWELRY.jpg" alt="Our Story" class="card-img-top mb-3">
                  <h2 class="card-title">Our Story</h2>
                  <p class="card-text">At Dazzle District, we believe that every piece of jewelry tells a unique story, reflecting the individuality and style of its wearer. Our exquisite collections are crafted with precision and passion by skilled artisans, using only the finest materials sourced from around the globe.</p>
              </div>
          </div>
          <div class="col">
              <div class="card h-100 p-4 animate__animated animate__fadeIn">
                  <img src="https://i.ibb.co/SQ4CVMm/baylee-gramling-FOw-YSRl-L-Bk-unsplash.jpg" alt="Our Mission" class="card-img-top mb-3">
                  <h2 class="card-title">Our Mission</h2>
                  <p class="card-text">We are committed to providing our customers with an exceptional shopping experience, offering personalized service and expert guidance every step of the way. With our dedication to quality craftsmanship, exquisite design, and unparalleled customer care, Dazzle District is your premier destination for luxurious jewelry that inspires and enchants.</p>
              </div>
          </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 mt-4">
          <div class="col">
              <div class="card h-100 p-4 animate__animated animate__fadeIn">
                  <img src="https://i.ibb.co/BT8C7F2/Gold-Silver.jpg" alt="Craftsmanship" class="card-img-top mb-3">
                  <h2 class="card-title">Craftsmanship</h2>
                  <p class="card-text">Our jewelry is crafted with meticulous attention to detail by skilled artisans, ensuring that each piece meets the highest standards of quality and beauty.</p>
              </div>
          </div>
          <div class="col">
              <div class="card h-100 p-4 animate__animated animate__fadeIn">
                  <img src="https://i.ibb.co/gmY5V4r/shutterstock-69417-7009.jpg" alt="Customer Satisfaction" class="card-img-top mb-3">
                  <h2 class="card-title">Customer Satisfaction</h2>
                  <p class="card-text">We strive to exceed our customers' expectations by providing exceptional products and personalized service. Your satisfaction is our top priority.</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  // Add any necessary logic here
}
</script>

<style scoped>
.about-page {
  background-color: #8ca1d1;
}

.jumbotron {
  background-color: #000;
}

.card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.5rem;
  color: #ffa500;
}

.card-text {
  font-size: 1.2rem;
}

.container {
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
}

.card-img-top {
  width: 100%;
  height: auto;
}

/* Animation */
.animate__animated {
  animation-duration: 1s;
}
.animate__fadeIn {
  animation-name: fadeIn;
}
@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
</style>
