<template>
        <footer class="container-fluid d-flex">
            <p>
                Dazzle District &copy; <span>{{ currYear }}</span>
            </p>
        </footer>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

  footer {
  background-color: #8ca1d1;
  color: #EEEBDD;
  margin-top: 20px;
  padding: 10px;
  justify-content: center;
}
p {
  text-shadow: 5px 5px 5px #272829, 0px 0px 18px #272829;
}

</style>