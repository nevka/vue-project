<template>
  <div>
    <h1>Parent: {{carName}}</h1>
    <app-counter></app-counter>
    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChange="carName=$event"
      @counterUpdates="counter=$event"
    ></app-car>
  </div>
</template>


<script>
  import Car from './Car.vue';
  import Counter from './Counter.vue';

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
      appCar: Car,
      appCounter: Counter
    }
  }
</script>

<style>

</style>
