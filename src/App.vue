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

      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" class="form-control" @blur="$v.password.$touch()" v-model="password" :class="{'is-invalid': $v.password.$error}">
        <div class="invalid-feedback" v-if="!$v.password.minLength">Минимальная длина пароля {{$v.password.$params.minLength.min}}. Сейчас всего {{password.length}} символов.</div>
      </div>
      <div class="form-group">
        <label for="confirm">Подтвердите пароль</label>
        <input type="password" id="confirm" class="form-control" @blur="$v.confirmPassword.$touch()" v-model="confirmPassword" :class="{'is-invalid': $v.confirmPassword.$error}">
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Пароль не совпадает</div>
      </div>

    </form>
  </div>
</template>


<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {
    data(){
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        // sameAs: sameAs('password')
        sameAs: sameAs((vue) => {
          return vue.password;
        })
      }
    }
  }
</script>

<style scoped>

</style>
