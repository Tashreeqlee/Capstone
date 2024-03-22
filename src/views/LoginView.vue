<template>
  <div class="login">
    <div class="container w-75">
      <div class="container p-5 mt-3">
        <h1 class="heading">LOGIN</h1>
      </div>
      <form class="mt-5 p-5 text-dark">
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">Email address</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Email address"
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
            placeholder="Password"
            v-model="payload.userPass"
            required
          />
        </div>
        <button @click.prevent="log" type="button" class="submit">Login</button>
      </form>
      <p class="text-white">Don't have an account?</p>
      <button type="button" class="submit mb-3">
        <router-link to="/register">Register</router-link>
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

.heading {
  color: white;
  font-size: 100px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.container {
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(255, 165, 0, 1);
  transition: box-shadow 0.3s ease;
}

.container:hover{
  box-shadow: 0 0 20px rgba(255, 165, 0, 0.8);
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
  color: #ffa500;
}

.form-control {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin-bottom: 20px;
}
.submit {
  border: none;
  outline: none;
  background-color: #ffa500;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: #8ca1d1;
  cursor: pointer;
}

@media (max-width: 575.98px) {

    .heading {
      font-size: 40px;
      text-align: center;
    }
  }


</style>
  