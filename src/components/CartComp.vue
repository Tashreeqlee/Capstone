<template>
    <h2 class="text-center text-white">Checkout</h2>
  <div class="checkout container-fluid d-flex justify-content-center text-center">
    <table class="text-white">
      <tr>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
      <tbody v-for="product in getCart" :key="product.id">
        <tr>
          <td><img :src="product.prodUrl" /></td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.prodPrice }}</td>
          <td>
            <button @click="deleteFromCart(product.cartID)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
table {
  width: 70%;
}
th,
td {
  border: 2px solid #526d82;
  
}

</style>