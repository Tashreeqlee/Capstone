<template>
  <div>
    <nav
      class="navbar bg-black navbar-expand-lg border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid row">
        <div class="col-4">
          <router-link class="navbar-brand" to="/"
          ><img
            src="https://i.ibb.co/tQXn3x5/Screenshot-2024-03-07-143739.png"
            alt="Logo"
            class="navImage"
        /></router-link>
          <button
          class="navbar-toggler"
          type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="navButtons">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="navButtons">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="navButtons">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin" class="navButtons" v-show="onlyAdmin">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="navButtons"
                  >Contact</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/checkout" class="navButtons" v-show="userAdmin">Checkout</router-link>
              </li>
              <li class="nav-item">
              <router-link class="nav-link text-dark" @click="logOut" to="/login" v-show="userAdmin" >Logout</router-link>
            </li>
            </ul>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-evenly text-white">
          <router-link to="/login" class="navButtons">Log In</router-link>
          <router-link to="/profile" class="navButtons">Profile</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies();
export default {
  computed: {
    user() {
       const user = this.$store.state.user ||
        cookies.get('LegitUser')
      return user
    },
    result() {
      const result = this.user?.result
      return result
    },
    onlyAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin"
    },
    userAdmin() {
      return this.result?.userRole?.toLowerCase() === "user"|| this.result?.userRole?.toLowerCase() === "admin"
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("LogOut")
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #8ca1d1 !important;
}

.navButtons {
  margin-right: 20px;
  color: #eeebdd;
  font-size: x-large;
}

a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  border-bottom: 2px solid;
}
.navImage {
  height: 60px;
  width: 60px;
}

.routerImg {
  height: 30px;
}
</style>
