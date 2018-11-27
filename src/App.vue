<template>
  <div>
    <app-car>
      <h2>Mazda + html {{carName}}</h2>
      <p>Lorem ipsum dolor.</p>
      <h2 slot="title">Lorem ipsum dolor.</h2>
      <p slot="text">Lorem ipsum dolor.</p>
    </app-car>
  </div>
</template>


<script>
  import Car from './Car.vue';

  export default {
    data() {
      return {
        carName: 'Ford'
      }
    },
    components: {
      appCar: Car
    }
  }
</script>

<style scoped>
  h2{
    color: red;
  }
</style>
