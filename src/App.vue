<template>
  <div class="container text-center pt-5">
    <h1>{{title}}</h1>
    <hr>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <app-actions></app-actions>
  </div>
</template>

<script>
  import Counter from './Counter'
  import SecondCounter from './SecondCounter'
  import Actions from './Actions'

  export default {
    data() {
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appSecondCounter: SecondCounter,
      appActions: Actions
    },
    computed: {
      title() {
        return this.$store.getters.title;
      }
    }
  }
</script>
