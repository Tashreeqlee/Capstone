<template>
  <div class="register">
    <div class="container w-75">
      <div class="container p-5 mt-3">
    <h1 class="heading">Sign Up</h1>
  </div>
    <form class="mt-5 p-5" @submit.prevent="register">
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">First Name</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="First Name"
            aria-describedby="emailHelp"
            v-model="payload.userName"
            required
          />
        </div>
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">Last Name</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Last Name"
            aria-describedby="emailHelp"
            v-model="payload.userSurname"
            required
          />
        </div>
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">Email address</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Email Address"
            aria-describedby="emailHelp"
            v-model="payload.userEmail"
            required
          />
        </div>
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">User Role</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="User Role"
            aria-describedby="emailHelp"
            v-model="payload.userRole"
            required
          />
        </div>
        <div class="mb-3">
          <h1 for="exampleInputEmail1" class="form-label">Password</h1>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Password"
            aria-describedby="emailHelp"
            v-model="payload.userPass"
            required
          />
        </div>
      <button class="submit">Signup</button>
    </form>
    <p class="log-in">
      Already have an account ?
      <button class="submit">
       <router-link link to="/login">Log in</router-link>
      </button>
    </p>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      payload: {
        userName: "",
        userSurname: "",
        userEmail: "",
        userRole: "",
        userPass: "",
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch("createUser", this.payload);
    },
  },
};
</script>

<style>

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(https://i.ibb.co/YPjNfdg/smoke-376543-1920.jpg);
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
}
.heading {
  color: white;
  font-size: 100px;
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
.input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin-bottom: 20px;
}

.log-in {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
  color: #333;
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

.log-in{
  color: #ffa500;
}

@media (max-width: 575.98px) {

.heading {
  font-size: 40px;
  text-align: center;
}
.container{
  margin-top: 70px;
}
}
</style>
