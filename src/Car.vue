<template>
  <div class="car">
    <h3>Name: {{carName}} / {{reverseName}}</h3>
    <p>Year: {{carYear}}</p>
    <p><button @click="changeName">Click</button></p>
    <p><button @click="changeFunc()">Change from parent</button></p>
  </div>
</template>

<script>
  export default {
    props: {
      carName: {
        type: String,
        default: 'Default name'
      },
      carYear: Number,
      changeFunc: Function
    },
    methods: {
      changeName() {
        this.carName = 'Mazda';
        this.$emit('nameChange', this.carName);
      }
    },
    computed: {
      reverseName(){
        return this.carName.split('').reverse().join('');
      }
    },
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