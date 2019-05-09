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
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
    // apiKey: 'AIzaSyBDvTbaYIwtWmc8nEIsTLPnunT3HEGQHFg',
    // authDomain: 'awesomescott.firebaseapp.com',
    // databaseURL: 'https://awesomescott.firebaseio.com',
    // projectId: 'awesomescott',
    // storageBucket: 'awesomescott.appspot.com',
    // messagingSenderId: '399213857457',
    // appId: '1:399213857457:web:2c4f52f92a39ef20'
  }
  firebase.initializeApp(config)
}
// firebase.firestore().settings()
const fireDb = firebase.firestore()
const auth = firebase.auth()

export { fireDb, auth }
