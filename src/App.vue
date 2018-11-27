<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{title | lowercase}}</h2>
    <h2>{{title | uppercase}}</h2>
    <h2>{{title | uppercase | lowercase}}</h2>

    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredName">{{name}}</li>
    </ul>
    <hr />
    <app-list></app-list>
  </div>
</template>


<script>
  import ListMixin from './listMixin'

  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    mixins: [ListMixin],
    filters: {
      lowercase(value) {
          return value.toLowerCase();
      }
    }
  }
</script>

<style scoped>

</style>
