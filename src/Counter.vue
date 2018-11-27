<template>
  <h2>Counter: {{counter}}</h2>
</template>

<script>
  import {eventEmitter} from './main';

  export default {
    data() {
      return {
        counter: 0
      }
    },
    created() {
      eventEmitter.$on('counterUpdates', (num) => {
          this.counter += num;
      });
    }
  }
</script>