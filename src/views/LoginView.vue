<template>
  <div class="login">
    <div class="container w-75">
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
        <button @click.prevent="log" type="button" class="">Login</button>
      </form>
      <p>Don't have an account?</p>
      <button class="link" type="button">
        <router-link to="/register" class="">Register</router-link>
      </button>
    </div>
  </div>
</template>

  
  <script>
export default {
  data() {
    return {
      payload: {
        userEmail: "",
        userPass: "",
      },
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg;
    },

    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    log() {
      this.$store.dispatch("login", this.payload);
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>


<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 18px;
  margin-bottom: 10px;
}

.form-control {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.link {
  text-align: center;
  margin-top: 20px;
}

.link button {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
}
</style>
  