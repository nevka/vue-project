<template>
  <div class="car">
    <h3>Name: {{carName}}</h3>
    <p>Year: {{carYear}}</p>
  </div>
</template>

<script>
  export default {
    props: ['carName', 'carYear'],
    data() {
      return {
      }
    }
  }
</script>

<style>
  .car{
    border: 1px solid black;
    padding: 20px;
  }
</style>