<template>
  <div>
    <h2>Form input</h2>
    <label><input type="radio" value="1" v-model="puncts"> 1</label>
    <label><input type="radio" value="2" v-model="puncts"> 2</label>
    <label><input type="radio" value="3" v-model="puncts"> 3</label>
    <hr>
    <ul>
      <li v-for="punct of puncts">{{punct}}</li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        puncts: '1'
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
