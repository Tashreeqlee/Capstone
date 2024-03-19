<template>
    <h1 class="mt-3">Sign Up</h1>
  <div id="container">
    <form class="form" @submit.prevent="register">
      <div class="flex">
        <label>
          <input
            class="input"
            type="text"
            placeholder="First Name"
            required=""
            v-model="payload.userName"
          />
          <span></span>
        </label>
        <label>
          <input
            class="input"
            type="text"
            placeholder="Last Name"
            required=""
            v-model="payload.userSurname"
          />
          <span></span>
        </label>
      </div>

      <label>
        <input
          class="input"
          type="email"
          placeholder="Email"
          required=""
          v-model="payload.userEmail"
        />
        <span></span>
      </label>
      <label>
        <input
          class="input"
          type="text"
          placeholder="User Role"
          v-model="payload.userRole"
        />
        <span></span>
      </label>
      <label>
        <input
          class="input"
          type="password"
          placeholder="Password"
          required=""
          v-model="payload.userPass"
        />
        <span></span>
      </label>
      <button class="submit">Signup</button>
      <p class="log-in">
        Already have an account ? <router-link link to="/login">Log in</router-link>
      </p>
    </form>
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
      this.$store.dispatch('register', this.payload);
    },
  },
};
</script>

<style>
#container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 52rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  margin: 3rem;
}



.flex {
    display: flex;
    width: 100%;
    gap: 6px;
}


.log-in {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
  color: #333;
}
.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
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
</style>
