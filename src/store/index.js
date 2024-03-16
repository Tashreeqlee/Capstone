import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";
import AuthenticateUser from "@/service/Authenticateuser";

const Dazzle = "https://capstone-36mc.onrender.com/";

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    asc: true,
    msg: null,
    cart: [],
  },
  getters: {
    getTotal(state) {
      return state.cart.reduce((total, product) => {
        const sumOfCart = product.amount || 0;
        return total + sumOfCart;
      }, 0);
    },

  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value;
    },
    setProduct: (state, value) => {
      state.product = value;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    addToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCart(state, product) {
      state.cart = product;
    },
    sortProducts: (state) => {
      state.products.sort((a, b) => {
        return a.Amount - b.Amount;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    sortByName: (state) => {
      state.products.sort((a, b) => {
        if (a.prodName < b.prodName) {
          return -1;
        }
        if (a.prodName > b.prodName) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },

    setUsers: (state, value) => {
      state.users = value;
    },
    setUser: (state, value) => {
      state.user = value;
    },
  },
  actions: {
    //products
    async fetchProducts(context) {
      try {
        let { results } = (await axios.get(`${Dazzle}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchProduct(context, payload) {
      try {
        let { result } = (await axios.get(`${Dazzle}products/${payload.id}`))
          .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async addProduct(context, payload) {
      try {
        let { msg } = (await axios.post(`${Dazzle}products/addProduct`, payload))
          .data;
        
          context.dispatch("fetchProducts");
          sweet({
            title: "Add product",
            text: msg,
            icon: "success",
            timer: 2000,
          });
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when adding a product.",
            icon: "error",
            timer: 2000,
          });
        }
    },
    async updateProduct(context, payload) {
      try {
        let { msg } = await (
          await axios.patch(
            `${Dazzle}products/update/${payload.prodID}`,
            payload
          )
        ).data;

        context.dispatch("fetchProducts");
        sweet({
          title: "Update product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async deleteProduct(context, payload) {
      try {
        let { msg } = await (
          await axios.delete(`${Dazzle}products/delete/${payload.prodID}`)
        ).data;
        context.dispatch("fetchProducts");
        sweet({
          title: "Delete product",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    //users
    async register(context, payload) {
      try {
        let { msg } = (await axios.post(`${Dazzle}users/register`, payload))
          .data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          //
          router.push({ name: "login" });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUsers(context) {
      try {
        let { results } = (await axios.get(`${Dazzle}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async fetchUser(context, payload) {
      try {
        let { result } = (await axios.get(`${Dazzle}users/${payload.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async updateUser(context, payload) {
      try {
        let { msg } = (
          await axios.patch(`${Dazzle}users/update/${payload.id}`, payload)
        ).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Update user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "success",
          timer: 2000,
        });
      }
    },
    async deleteUser(context, payload) {
      try {
        let { msg } = (await axios.delete(`${Dazzle}users/${payload.id}`)).data;
        context.dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          text: msg,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${Dazzle}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });
          console.log('Store - Login: ', token);
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, 
          ${result?.userName} ${result?.userSurname}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    // Cart
    addCart(context, product) {
      context.commit("addToCart", product);
    },
    async fetchCart(context) {
      try {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        this.$store.commit("setCart", cartData);
      } catch (e) {
        context.commit("setMsg", "Error has ocurred");
      }
    },
  },
  modules: {},
});
