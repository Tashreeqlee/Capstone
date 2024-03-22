<template>
  <div v-if="user">
    <div class="container-fluid story">
      <h1 class="text-animation">User Profile</h1>
    </div>
    <div
      :user="user"
      :key="user.userID"
      class="d-flex justify-content-center gap-5 my-5"
    >
      <div class="text-white">

        <h4><span class="prof">Name</span> : {{ user.userName }}</h4>
        <h4><span class="prof">Surname</span> : {{ user.userSurname }}</h4>
        <h4><span class="prof">Role</span> : {{ user.userRole }}</h4>
        <h4><span class="prof">Email Address</span> : {{ user.userEmail }}</h4>
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
          this.$store.dispatch("deleteUser", userID)
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
.text-animation {
    color: whitesmoke;
    overflow: hidden;
    animation: typing 3s backwards;
    white-space: nowrap;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .prof {
    color: #ffa500;
  }

</style>