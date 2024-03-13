<template>
    <div>
        <button class="btn" type="btn" data-bs-toggle="modal" data-bs-target="#exampleModal-1">Add</button>

        <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Add User</h2>
                        <button class="btn-close" type="button" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input m-2" type="text" placeholder="User Name" v-model="model.user.userName">
                        <input class="input m-2" type="text" placeholder="User Surname" v-model="model.user.userSurname">
                        <input class="input m-2" type="text" placeholder="User Role" v-model="model.user.userRole">
                        <input class="input m-2" type="text" placeholder="User Email" v-model="model.user.userEmail">
                        <input class="input m-2" type="text" placeholder="User Password" v-model="model.user.userPass">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" @click="addUser">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
        data() {
            return {
                model: {
                    user: {
                        userName: "",
                        userSurname: "",
                        userRole: "",
                        userEmail: "",
                        userPass: "",
                    }
                }
            };
        },
        methods: {
            addUser() {
                this.$store.dispatch("addUser", this.model.user);
                setTimeout(() => {
                    location.reload();
                }, 500);
            },
        },
    };

</script>

<style scoped>
.btn {
        background-color: #EF370E;
        color: white;
        border-radius:0%;
        width: 60px;
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .btn:hover {
        background-color: white;
        color: #EF370E;
    }

</style>