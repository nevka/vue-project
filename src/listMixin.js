export default {
  data() {
    return {
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
  }
}