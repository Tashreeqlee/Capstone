<template>
  <div>
    <h1 class="header text-center text-white">Admin</h1><br>
    <div>
      <h3 class="users text-center text-white">Users</h3>
      <AddUserComp />
      <div class="table-responsive text-white">
            <table class="text-center ">
        <thead>
          <tr class="text-dark">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Role</th>
            <th>Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.userSurname }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.userEmail }}</td>
            <td>
              <EditUserComp :user="user" /><button
                class="btn"
                @click="deleteUser(user.userID) "
                id="btn"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
      </div>
  
      <br><br>
      <div>
        <h3 class="products text-center text-white">Products</h3>
        <AddProdComp />
        <div class="table-responsive text-white">
          <table >
          <thead>
            <tr class="text-dark">
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Product Url</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr v-if="products">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodPrice }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.prodUrl }}</td>
              <td >
                <img
                  :src= product.prodUrl
                  :alt="product.prodName"
                  class="img-fluid product-image"
                  loading="lazy"
                />
              </td>
              <td>
                <EditProdComp :product="product" />
                <button @click="deleteProduct(product.prodID)" class="btn" id="btn">
                  Delete
                </button>
              </td>
            </tr>
            <tr v-else>
              <SpinnerComp />
            </tr>
          </tbody>
        </table>
        <br>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import SpinnerComp from "@/components/SpinnerComp.vue";
  import AddProdComp from "@/components/AddProdComp.vue";
  import AddUserComp from "../components/AddUserComp.vue";
  import EditProdComp from "../components/EditProdComp.vue";
  import EditUserComp from "@/components/EditUserComp.vue";
  export default {
    components: {
      SpinnerComp,
      AddProdComp,
      AddUserComp,
      EditProdComp,
      EditUserComp,
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
      this.$store.dispatch("fetchUsers");
    },
    methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUsers", userID);
    },
    deleteProduct(prodID) {
      this.$store.dispatch("deleteBoats", prodID);
    },
  },
  };
  </script>

<style>
  .table-responsive {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  .text-center {
    text-align: center;
  }

  .image {
    width: 50px;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .btn {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .product-image {
    width: 100px;
  }
</style>
