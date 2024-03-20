<template>
  <div class="card-container">
  <div v-if="user" class="profile-card">
    <div class="profile-card-header">
      <h1>User Profile</h1>
    </div>
    <div :user="user" :key="user.userID" class="profile-card-content">
      <div class="profile-card-details">
        <h4>Name: <span>
          {{ user.userName }}
        </span></h4>
        <h4>Surname: {{ user.userSurname }}</h4>
        <h4>Role: {{ user.userRole }}</h4>
        <h4>Email Address: {{ user.userEmail }}</h4>
      </div>
    
    <EditUserComp :user="user" />
    <button
      type="button"
      @click="deleteUser(user.userID)"
      class="btn btn-outline-dark text-danger m-2 animate__animated animate__bounce animate__delay-3s"
    >
      Delete
    </button>
  </div>
</div>
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
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.profile-card-content {
  width: 700px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


</style>