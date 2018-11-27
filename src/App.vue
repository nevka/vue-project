<template>
  <div class="cotainer">
    <h1>Hello</h1>
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" @blur="$v.email.$touch()" v-model="email" :class="{'is-invalid': $v.email.$error}">
        <div class="invalid-feedback" v-if="!$v.email.required">Поле не заполнено</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Неверный Email</div>
      </div>

    </form>
  </div>
</template>


<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    data(){
      return {
        email: ''
      }
    },
    validations: {
      email: {
        required,
        email
      }
    }
  }
</script>

<style scoped>

</style>
