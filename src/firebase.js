import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB0NmgZNNDlCZq3ibuv1rBpy0k7mk_MmPQ",
    authDomain: "books-functions.firebaseapp.com",
    projectId: "books-functions",
    storageBucket: "books-functions.appspot.com",
    messagingSenderId: "723632652151",
    appId: "1:723632652151:web:701a3a561c515af1f7eb72"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
