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
  </div>
</template>


<script>
  export default {
    data() {
      return {
        title: 'Hello',
        names: ['Vlad', 'Max', 'Elena'],
        searchName: ''
      }
    },
    computed: {
      filteredName() {
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        });
      }
    },
    filters: {
      lowercase(value) {
          return value.toLowerCase();
      }
    }
  }
</script>

<style scoped>

</style>
