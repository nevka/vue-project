<template>
  <h2>Counter: {{counter}}</h2>
</template>

<script>
  export default {
    computed: {
      counter() {
        // return this.$store.state.counter * 25;
        return this.$store.getters.computedCounter;
      }
    }
  }
</script>

<style scoped>

</style>
