<template>
  <div>
    <h2 v-colored:background="'green'">{{title}}</h2>
    <h2 v-colored:color="'red'">{{title}}</h2>
  </div>
</template>


<script>
  export default {
    data() {
      return {
          title: 'Hello'
      }
    }
  }
</script>

<style scoped>

</style>
