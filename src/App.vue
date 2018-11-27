<template>
  <div>
    <h2>Form input</h2>
    <input type="text" v-model.lazy="name">
    <p>{{name}}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        name: 'init'
      }
    }
  }
</script>

<style scoped>

</style>
