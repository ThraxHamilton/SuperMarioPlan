import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBYmncCv-Xyi3ZSZ7yzBAJX5xA9LSkgADI",
    authDomain: "supermarioreact.firebaseapp.com",
    databaseURL: "https://supermarioreact.firebaseio.com",
    projectId: "supermarioreact",
    storageBucket: "",
    messagingSenderId: "251504528392",
    appId: "1:251504528392:web:847d39d204742059fd55bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase