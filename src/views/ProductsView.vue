<template>
    <div class="bgcolor">
      <h2 class="text-center display-2 text-animation">
        Products
      </h2>
      <div class="buttons">
        <div class="search mb-3">
          <input type="text" v-model="search" placeholder="search" />
        </div>
        <div>
          <button @click="sortByPrice" class="sort m-auto">Sort by Price</button>
          <button @click="sortByName" class="sort">Sort by Name</button>
        </div>
      </div>
    
      <div v-if="products" class="display container-fluid">
        <ProdCard
          v-for="product of products"
          :key="product.prodID"
          :product="product"
        />
      </div>
      <div v-else class="d-flex justify-content-center">
        <SpinnerComp/>
      </div>
    </div>
    </template>
  
  <script>
  import ProdCard from '@/components/ProdCard.vue';
  import SpinnerComp from '@/components/SpinnerComp';
  
  export default {
    data() {
      return {
        search: "",
        Categories: "All",
      };
    },
    methods: {
      sortByPrice() {
        this.$store.commit("sortProducts");
      },
      sortByName() {
        this.$store.commit("sortByName");
      },
    },
    computed: {
      products() {
        return this.$store.state.products?.filter((product) => {
          let isMatch = true;
          if (
            !product.prodName.toLowerCase().includes(this.search.toLowerCase())
          ) {
            isMatch = false;
          }
          if (
            this.Categories !== "All" &&
            this.Categories !== product.Categories
          ) {
            isMatch = false;
          }
          return isMatch;
        });
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    components: {
      ProdCard,
      SpinnerComp,
    },
  };
  </script>
  
  <style scoped>
  
  .bgcolor{
    background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
  }
  .text-animation {
    color: whitesmoke;
    overflow: hidden;
    animation: typing 3s backwards;
    white-space: nowrap;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .search {
    flex: 10;
  }
  
  .sort {
    background-color: #8ca1d1;
    color: white;
  }
  .sort:hover{
    transform: scale(1.1);
  }
  
  input {
    color: #eeebdd !important;
    border: 2px solid #e7d3cf;
    background: #8ca1d1 !important;
    border-radius: 20px;
  }
  
  ::placeholder {
    color: #eeebdd;
  }
  
  .display {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  
  @media only screen and (max-width: 705px) {
      .display {
          display: grid;
          grid-template-columns: auto auto;
      }
  }
  @media only screen and (max-width: 305px) {
      .display {
          display: grid;
          grid-template-columns: auto;
      }
      .buttons {
          display: flex;
          flex-direction: column;
          
      }
      input, .sort {
          width: 90%;
          margin: 10px;
      }
    }
  
  
  
  </style>