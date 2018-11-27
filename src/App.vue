<template>
  <div>
    <h2>Form input</h2>
    <select>
      <option v-for="punct of puncts" :selected="punct === defaultPunct">{{punct}}</option>
    </select>

    <select v-model="defaultPunct2">
      <option v-for="punct of puncts">{{punct}}</option>
    </select>
    <hr>
    <p>{{defaultPunct2}}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        defaultPunct: '2',
        defaultPunct2: '3',
        puncts: ['1', '2', '3']
      }
    }
  }
</script>

<style scoped>
  textarea{
    height: 100px;
    width: 300px;
  }
  p{
    white-space: pre;
  }
</style>
