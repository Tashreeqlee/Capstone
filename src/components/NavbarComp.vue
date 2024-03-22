<template>
  <div>
    <nav class="navbar navbar-expand-lg border-bottom border-dark p-0">
      <div class="container-fluid p-5">
        <router-link class="navbar-brand" to="/"
          ><img
            src="https://i.ibb.co/tQXn3x5/Screenshot-2024-03-07-143739.png"
            alt="Logo"
            class="navImage img-fluid"
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
              <router-link class="nav-link text-dark" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/products"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-dark"
                to="/admin"
                v-show="onlyAdmin"
                >Admin</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/contact"
                >Contact</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link text-dark"
                to="/checkout"
                v-show="userAdmin"
                >Checkout</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-dark"
                to="/profile"
                v-show="userAdmin"
                >Profile</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link text-dark"
                @click="logOut"
                to="/login"
                v-show="userAdmin"
                >Logout</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  computed: {
    user() {
      const user = this.$store.state.user || cookies.get("LegitUser");
      return user;
    },
    result() {
      const result = this.user?.result;
      return result;
    },
    onlyAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin";
    },
    userAdmin() {
      return (
        this.result?.userRole?.toLowerCase() === "user" ||
        this.result?.userRole?.toLowerCase() === "admin"
      );
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("LogOut");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #8ca1d1 !important;
}
.nav-link {
  font-size: 20px;
}

a {
  text-decoration: none;
}
nav a.router-link-exact-active {
  border-bottom: 2px solid;
}
.navImage {
  height: 70px;
  width: 70px;
  box-shadow: 0 0 10px rgba(255, 165, 0, 1);
  transition: box-shadow 0.9s ease;
}
.navImage {
  box-shadow: 0 0 60px rgba(255, 165, 0, 1);
}

.routerImg {
  height: 30px;
}
</style>
