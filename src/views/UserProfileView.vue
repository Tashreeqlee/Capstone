<template>
<div v-if="user">
  <div class="profile"></div>
  <div class="container-fluid">
    <h1>User Profile</h1>
  </div>
  <div
    :user="user"
    :key="user.userID"
    class="d-flex justify-content-center gap-5 my-5"
  >
    <div>
      <img :src="user.userProfile" :alt="user.userName" class="logo" />
    </div>
    <div class=" ">

      <h4>Name : {{ user.userName }}</h4>
      <h4>Surname: {{ user.userSurname }}</h4>
      <h4>Role: {{ user.userRole }}</h4>
      <h4>Email Address: {{ user.userEmail }}</h4>
    </div>
  </div>
  <EditUserComp :user="user"/>
   <button
        type="button"
        @click="deleteUser(user.userID)"
        class="btn btn-outline-dark text-danger m-2 animate__animated animate__bounce animate__delay-3s"
      >
        Delete
      </button>
      
</div>


</template>
<script>
import EditUserComp from '@/components/EditUserComp.vue';

import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();
export default {
  components: {
    EditUserComp
  },

  computed: {
    user() {
      return cookies.get("LegitUser").result || this.$store.state.user;
        },
      products() {
        return this.$store.state.products
    }
  },
  methods: {
    deleteUser(userID) {
          this.$store.dispatch("deleteUsers", userID)
              alert("Are you sure you want to Delete?");
    },
  },
};
</script>
<style lang="scss" scoped>

</style>