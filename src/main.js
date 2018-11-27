import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

/*Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
});*/
Vue.filter('uppercase', value => value.toUpperCase());
Vue.component('app-list', List);
Vue.mixin({
  beforeCreate() {
    console.log('mixin beforeCreate');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

