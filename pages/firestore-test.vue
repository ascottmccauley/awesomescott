<template>
  <section class="container">
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <p>Project ID: {{ projectId }}</p>
      <div>
        <input
          id="write-test"
          v-model="writeTest"
          type="text"
          name="write-test"
        >
        <button
          :disabled="writeSuccessful"
          @click="writeToFirestore"
        >
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
    <div>
      <h2>
        Read from Firestore.
      </h2>
      <div>
        <button
          :disabled="readSuccessful"
          @click="readFromFirestore"
        >
          <span v-if="!readSuccessful">Read now</span>
          <span v-else>Successful!</span>
        </button>
        <p>{{ text }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
  data() {
    return {
      writeTest: '',
      writeSuccessful: false,
      readSuccessful: false,
      text: '',
      projectId: process.env.FIREBASE_PROJECT_ID
    }
  },
  async asyncData({ app, params, error }) {
    const ref = fireDb.collection('test').doc('test')
    let snap
    try {
      snap = await ref.get()
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    return {
      text: snap.data().text
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('test')
      const document = {
        text: this.writeTest
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    async readFromFirestore() {
      const ref = fireDb.collection('test').doc('test')
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
    }
  }
}
</script>
<style>
</style>
