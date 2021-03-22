import firebase from 'firebase';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBb1TJKWa0pJwIUFwxrzHObrVt1rmT_ZfY",
    authDomain: "vue-fire-todo-a82e3.firebaseapp.com",
    projectId: "vue-fire-todo-a82e3",
    storageBucket: "vue-fire-todo-a82e3.appspot.com",
    messagingSenderId: "636516487197",
    appId: "1:636516487197:web:f7d0ebb96d73d857fa36f4"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();

