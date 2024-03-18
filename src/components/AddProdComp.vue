<template>
    <div>
        <button class="btn" type="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Add Product</h2>
                    </div>
                    <div class="modal-body">
                        <input class="input m-2" type="text" placeholder="Product Name" v-model="payload.prodName">
                        <input class="input m-2" type="text" placeholder="Price" v-model="payload.prodPrice">
                        <input class="input m-2" type="text" placeholder="Category" v-model="payload.category">
                        <input class="input m-2" type="text" placeholder="Quantity" v-model="payload.quantity">
                        <input class="input m-2" type="text" placeholder="Description" v-model="payload.description">
                        <input class="input m-2" type="text" placeholder="Url" v-model="payload.prodUrl">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click="addProduct">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      payload: {
        prodName: "",
        prodPrice: "",
        quantity: "",
        category: "",
        description: "",
        prodUrl: "",

      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.payload);
    },
  },
};
</script>


<style scoped>
.btn {
        background-color: #EF370E;
        color: white;
        border-radius:0%;
        width: 60px;
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .btn:hover {
        background-color: white;
        color: #EF370E;
    }

</style>