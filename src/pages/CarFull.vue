<template>
  <div>
    <h2>Car name: {{$route.query.name}}</h2>
    <h2>Car year: {{year}}</h2>

    <div class="scroll"></div>
    <h6 id="scroll">bottom</h6>
    <div class="scroll"></div>
  </div>
</template>

<script>
  export default {
    computed: {
      year() {
        return this.$route.query.year;
      }
    },
    beforeRouteEnter(to, from, next) {
      next();
    }
  }
</script>

<style scoped>
  .scroll{
    width: 100px;
    height: 1000px;
    background: #ccc;
  }
</style>