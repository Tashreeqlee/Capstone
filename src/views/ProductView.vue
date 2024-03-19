<template>
    <div v-if="product" class="container-fluid text-center">
        <h1>{{ product.prodName }}</h1>
        <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid"/>
        <p>Price: R {{ product.prodPrice }}</p>
        <p>Category: {{ product.category }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Stock Left: {{ product.quantity }}</p>
        <button class="btn btn-outline-dark animate__animated animate__bounce animate__delay-3s" @click.prevent="addCart(product)">
            Add To Cart
          </button>
    </div>
    <div v-else class="d-flex justify-content-center">
        <SpinnerComp/>
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
    methods: {
    addCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
    components: {
        SpinnerComp
    }
}
</script>

<style  scoped>


</style>