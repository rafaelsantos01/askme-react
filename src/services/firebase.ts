import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3evUvdo3o_0cHPNS6ipUYBdZALKzhgpc",
  authDomain: "letmeask-quantus.firebaseapp.com",
  databaseURL: "https://letmeask-quantus-default-rtdb.firebaseio.com",
  projectId: "letmeask-quantus",
  storageBucket: "letmeask-quantus.appspot.com",
  messagingSenderId: "732287377857",
  appId: "1:732287377857:web:28d82257c95ead7eb34f40",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
