<template>
  <div>
        <h1>Dazzle District</h1>
    </div>

    <section class="hero">
        <div class="hero-content">
            <h2>Welcome to Dazzle District, where elegance meets innovation in the world
      of fine jewelry.</h2>
            <a href="/products" class="btn">Shop Now</a>
        </div>
    </section>
 </template>

<script>
export default {
  components: {},
};
</script>

<style>
header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}

.hero {
    background-image: url(https://i.ibb.co/w4hY9nK/84e70dc2dd8be501f186dd091765756f.jpg);
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 4rem 0;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.btn {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
}
</style>