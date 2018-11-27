<template>
  <div>
    <slot></slot>
    <hr>
    <slot name="title"></slot>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div{
    border: 1px solid black;
    padding: 10px 20px;
    margin: 20px;
  }
  h2{
    color: red;
  }
</style>