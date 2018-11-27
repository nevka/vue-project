<template>
  <div>
    <h2>Form input</h2>
    <app-onoff v-model="switched"></app-onoff>
    <div>
      <h3 v-if="switched">is enabled</h3>
      <h3 v-else>is disabled</h3>
    </div>
  </div>
</template>


<script>
  import Onoff from './Onoff.vue';
  export default {
    data() {
      return {
        switched: false
      }
    },
    components: {
      appOnoff: Onoff
    }
  }
</script>

<style scoped>

</style>
