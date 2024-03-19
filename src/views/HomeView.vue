<template>
  <div class="home">
    <div class="container-bg">
      <div class="text-white">
        <h1>Welcome to Dazzle District</h1>
        <p>Elevating Elegance, One Gem at a Time.</p>
      </div>
        <router-link
          to="/products"
          type="button"
          class="btn btn-outline-light btn-lg animate__animated animate__bounce animate__delay-3s mb-4"
        >
          All Products
        </router-link>
    </div>
      <div class="d-flex justify-content-center m-5 gap-5">
        <!-- card 1 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://i.ibb.co/ZBFGFy7/result-banner-earrings.webp"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">Best Jewels In The City</h5>
            <p class="card-text">
              Discover the city's most exquisite treasures at Dazzle District.
              Elevate your style with our stunning collection of jewels, where
              every piece tells a story of elegance and sophistication. Explore
              now and indulge in timeless beauty.
            </p>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card mb-3 border-dark">
          <img
            src="https://i.ibb.co/h2SbdgL/result-banner-watch-market.webp"
            class="card-img-top"
            alt="news"
          />
          <div class="card-body">
            <h5 class="card-title">Exclusive 1 of 1 Timepieces</h5>
            <p class="card-text">
              Explore Dazzle District's premier timepiece collection, where each
              watch epitomizes elegance and sophistication. Elevate your style
              with our exquisite timepieces, each telling a tale of timeless
              beauty. Discover the epitome of luxury.
            </p>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.home {
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>

