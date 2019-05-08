import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// require('dotenv').config()

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  }
  firebase.initializeApp(config)
}
// firebase.firestore().settings()
const fireDb = firebase.firestore()
const auth = firebase.auth()

export { fireDb, auth }
