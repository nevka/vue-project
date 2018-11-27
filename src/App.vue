<template>
  <div>
    <h2 v-colored:background.font="'green'">{{title}}</h2>
    <h2 v-colored:color.font.delay="'red'">{{title}}</h2>
    <h2 v-font>Local fon directive</h2>
  </div>
</template>


<script>
  export default {
    data() {
      return {
          title: 'Hello'
      }
    },
    directives: {
      font: {
        bind(el, binding, vnode) {
          el.style.fontSize = '40px';
        }
      }
    }
  }
</script>

<style scoped>

</style>
