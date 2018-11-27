<template>
  <div>
    <h1>Parent: {{carName}}</h1>
    <app-car :carName="carName" :carYear="carYear" :changeFunc="changeNameToAudi" @nameChange="carName= $event"></app-car>
  </div>
</template>


<script>
  import Car from './Car.vue';

  export default {
    name: 'app',
    data() {
      return {
        carName: 'Ford',
        carYear: 2012
      }
    },
    methods: {
      changeNameToAudi() {
        this.carName = 'Audi';
      }
    },
    components: {
      appCar: Car
    }
  }
</script>

<style>

</style>
