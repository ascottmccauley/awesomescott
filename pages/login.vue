<template>
  <main>
    <h1>Login</h1>
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
    <button @click="login">
      Log in
    </button>
    <h1>{{ success }}</h1>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { auth } from '~/plugins/firebase.js'

// TODO:: combine login and login into one template
// TODO: see how to pass extra paramaters
// TODO: add new user to database
export default {
  data() {
    return {
      email: '',
      password: '',
      success: ''
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  },
  methods: {
    async login() {
      try {
        await auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(result => {
            this.success = 'it worked'
            console.log(result.uid)
            // admin.auth().setCustomUserClaims(result.uid, { admin: true })
            // this.$router.replace({ path: '/' })
          })
      } catch (e) {
        this.success = 'it did not work'
        alert(e)
      }
    }
  }
}
</script>
