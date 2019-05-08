<template>
  <main>
    <h1>Register</h1>
    <input
      v-model="email"
      name="email"
      type="email"
      placeholder="email"
    >
    <input
      v-model="password"
      name="password"
      type="password"
      placeholder="password"
    >
    <button @click="register" />
  </main>
</template>

<script>
import { auth } from '~/plugins/firebase.js'

// TODO:: combine register and login into one template
// TODO: see how to pass extra paramaters
// TODO: add new user to database
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$router.replace({ path: '/' })
          })
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
