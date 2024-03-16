<template>
<div v-if="currentUser" class="product_details" :key="currentUser.userId" :user="currentUser">
  <div class="card mx-auto">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="card my-2 row">
        <div class="row justify-content-center align-items-center">
          <div class="col-4">
            <h1>Profile</h1>

            <h3>First Name:</h3>
            <p>{{ user.userName }} {{ user.userSurname }}</p>
            <h3>Role:</h3>
            <p>{{ user.userRole }}</p>
            <h3>Email:</h3>
            <p>{{ user.userEmail }}</p>
            <button>
              <router-link
                :to="{ name: 'edit user', params: { id: user.userID } }"
                ></router-link>
            </button>
            <button
              type="submit"
              class="btn button"
              @click="deleteUser(user.userID)"
              id="delete-row"
            >
              <img
                class="edit-icon"
                src="https://i.postimg.cc/kMtSk56b/icons8-delete-30.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</div>
<div v-else>
  <spinner />
</div>




</template>
<script>


export default {
// props: ["user"],

computed: {
  currentUser() {
    return this.$store.state.user;
  },
  id() {
    return this.$route.params.id;
  },
  userRole() {
    return this.$store.state.userRole;
  },
},

mounted() {
  
  this.$store.dispatch("fetchUser", this.id).then(() => {
});
},

methods: {
  deleteUser(userID) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.$store.dispatch("deleteUser", userID);
      this.$router.push("/login");
    }
    else{
      alert("Failed to delete user. Please try again.");
    }
  },
},
};
</script>
<style lang="scss" scoped>

</style>