<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Название машины</label>
      <input type="text" class="form-control" id="name" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Год машины</label>
      <input type="text" class="form-control" id="year" v-model.number="carYear">
    </div>
    <button class="btn btn-success" @click="createCar">Создать машину</button>
    <button class="btn btn-primary" @click="loadCars">Загрузить машину</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="car of cars" :key="cars">
        <strong>{{car.name}}</strong> {{car.year}}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        carName: '',
        carYear: 2018,
        cars: [],
        resource: null
      }
    },
    methods: {
      createCar() {
        const car = {
          name: this.carName,
          year: this.carYear
        };
        /*this.$http.post('http://localhost:3000/cars', car)
          .then(response => {
            // console.log(response);
            return response.json();
          })
          .then(newCar => {
            console.log(newCar);
          });*/
        this.resource.save({}, car);
      },
      loadCars() {
        /*this.$http.get('http://localhost:3000/cars')
          .then(response => {
            return response.json();
          })
          .then(cars => {
              this.cars = cars;
          });*/
        this.resource.get()
          .then(response => response.json())
          .then(cars => this.cars = cars);
      }
    },
    created() {
      this.resource = this.$resource('cars');
    }
  }
</script>

<style scoped>

</style>
