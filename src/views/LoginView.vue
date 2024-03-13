<template>
  <div class="login">
    <div class="container w-75 ">
      <div class="container p-5 text-dark">
        <h1>LOGIN</h1>
      </div>
    <form class="mt-5 p-5 text-dark">
      <div class="mb-3">
        <h1 for="exampleInputEmail1" class="form-label">Email address</h1>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="payload.userEmail"
          required
        />
      </div>
      <div class="mb-3">
        <h1 for="exampleInputPassword1" class="form-label">Password</h1>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="payload.userPass"
          required
        />
      </div>
      <button @click.prevent="login" type="button" class="">
        Login
      </button>
    </form>
    <p>Don't have an account?</p>
            <button class="link" type="button">
              <router-link
                to="/register"
                class=""
                >Register</router-link
              >
            </button>
    </div>
  </div>
</template>

  
  <script>
  export default {
    data() {
    return {
      payload: {
        emailAdd: "",
        userPass: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
};
  </script>


<style>
</style>
  