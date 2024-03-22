<template>
     <div v-if="product" class="card-container">
    <div class="card">
      <div class="card-header">
        <h1 class="card-title">{{ product.prodName }}</h1>
      </div>
      <div class="card-body">
        <img :src="product.prodUrl" :alt="product.prodName" class="card-img-top" />
        <p class="card-text"><span class="single">Price</span> : R {{ product.prodPrice }}</p>
        <p class="card-text"><span class="single">Category</span>: {{ product.category }}</p>
        <p class="card-text"><span class="single">Description</span>: {{ product.description }}</p>
        <p class="card-text"><span class="single">Stock Left</span>: {{ product.quantity }}</p>
        <button @click="addToCart(product.prodID)">Add To Cart</button>
      </div>
    </div>
  </div>
  <div v-else class="d-flex justify-content-center">
    <SpinnerComp />
  </div>
</template>

<script>
    import SpinnerComp from '@/components/SpinnerComp';
export default {
    props: ["prodID"],
    computed: {
        product() {
            return this.$store.state.product;
        },

    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params );
    },
    components: {
        SpinnerComp
    },
    methods: {
    addToCart(prodID) {
      if (this.user.userID) {
        this.$store.dispatch("addToCart", {
          userID: this.user.userID,
          prodID,
        });
      }
    },
  },
};
</script>

<style scoped>
.card-container {
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10px;
}
.single {
    color: #ffa500;
  }
.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.card-body {
  padding: 20px;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.card-title {
  margin-top: 0;
}

.card-text {
  margin-bottom: 10px;
}

.btn {
  margin-top: 15px;
}


</style>