<template>
  <div>
    <h2>Form input</h2>
    <textarea v-model="textarea"></textarea>
    <p>{{textarea}}</p>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        textarea: 'I am textarea'
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
