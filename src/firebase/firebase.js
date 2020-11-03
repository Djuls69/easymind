import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyD3aEbTnJcS6EaNh4CZnJvZW-ekMZeEKoM',
  authDomain: 'easy-mind-a92aa.firebaseapp.com',
  databaseURL: 'https://easy-mind-a92aa.firebaseio.com',
  projectId: 'easy-mind-a92aa',
  storageBucket: 'easy-mind-a92aa.appspot.com',
  messagingSenderId: '930871630571',
  appId: '1:930871630571:web:343e9a4779c2fa8a44bcae'
})

export const auth = firebase.auth()

export const db = firebase.firestore()
