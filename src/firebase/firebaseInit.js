// Connecting frontend to backend through firebase

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXp3THX4RbW5lcaSVHI5HNYBC-Lk8ieC8",
    authDomain: "vueblog-9353a.firebaseapp.com",
    projectId: "vueblog-9353a",
    storageBucket: "vueblog-9353a.appspot.com",
    messagingSenderId: "1076874416757",
    appId: "1:1076874416757:web:a3ab1db2c52cf16d161e3c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { timestamp }
  export default firebaseApp.firestore()