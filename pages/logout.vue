<template>
  <main>
    <h1>Logout</h1>
    <button @click="logout">
      Log out
    </button>
    <h1>{{ success }}</h1>
    <h2>{{ currentUser }}</h2>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { auth } from '~/plugins/firebase.js'

// TODO:: combine login and login into one template
// TODO: see how to pass extra paramaters
// TODO: add new user to database
export default {
  data() {
    return {
      success: ''
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  },
  methods: {
    ...mapActions({ setUser: 'users/setUser' }),
    async logout() {
      console.log('logging out')
      try {
        await auth.signOut().then(() => {
          console.log('done waiting')
          this.success = 'it worked'
          this.setUser(null)
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
