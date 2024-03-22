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
    cart: null,
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
    deleteUser(state, userID) {
      state.users = state.users.filter((user) => user.userID !== userID);
    },
    deleteProduct(state, prodID) {
      state.products = state.products.filter(
        (product) => product.prodID !== prodID
      );
    },

    setProducts: (state, value) => {
      state.products = value;
    },
    setProduct: (state, value) => {
      state.product = value;
    },
    setMsg(state, msg) {
      state.msg = msg;
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
    setCart: (state, value) => {
      state.cart = value;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, cartID) {
      state.cart = state.cart.filter((cart) => cart.cartID !== cartID);
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
        let { msg } = (
          await axios.post(`${Dazzle}products/addProduct`, payload)
        ).data;

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
    async deleteProduct(context, prodID) {
      try {
        let { msg } = await (
          await axios.delete(`${Dazzle}products/delete/${prodID}`)
        ).data;
        context.commit("deleteProduct", prodID);
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
    async createUser(context, payload) {
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
    async addUsers(context, payload) {
      try {
        let { msg } = (await axios.post(`${Dazzle}users/register`, payload)).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "New user",
            text: msg,
            icon: "success",
            timer: 2000,
          });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
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
          await axios.patch(`${Dazzle}users/update/${payload.userID}`, payload)
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
    async deleteUser(context, userID) {
      try {
        let { msg } = (await axios.delete(`${Dazzle}users/delete/${userID}`))
          .data;
        context.commit("deleteUser", userID);
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
    //logout
    async LogOut(context) {
      context.commit("setUser");
      cookies.remove("LegitUser");
      localStorage.removeItem("cart");
      sweet({
        title: "Logged Out",
        text: "You have been Logged Out",
        icon: "success",
        timer: 4000,
      });
    },


    // Cart
    async getCart(context, id) {
      const res = await axios.get(`${Dazzle}user/${id}/carts`);
      context.commit("setCart", res.data);
    },
    async addProdToCart({ commit }, { userID, prodID }) {
      try {
        const res = await axios.post(`${Dazzle}user/${userID}/cart`, {
          userID,
          prodID,
        });
        if (res.status === 200) {
          commit("addToCart", res.data);
        } else {
          sweet({
            title: "info",
            text: "",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "",
          icon: "error",
          timer: 2000,
        });
      }
    }}
});
