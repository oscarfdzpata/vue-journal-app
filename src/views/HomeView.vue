<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">Boton</button>
    <button @click="goToDayBook" class="btn btn-secondary">Boton</button>
    <button @click="goToDayBook" class="btn btn-success">Boton</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook(){
      // this.$router.push({name:'daybook'})
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

