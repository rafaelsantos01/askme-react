import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClXsN50pHpMUe-uM8ro5eCwE3Kv1wLYA0",

  authDomain: "nlw-letmeask-rafael.firebaseapp.com",

  databaseURL: "https://nlw-letmeask-rafael-default-rtdb.firebaseio.com",

  projectId: "nlw-letmeask-rafael",

  storageBucket: "nlw-letmeask-rafael.appspot.com",

  messagingSenderId: "964460420007",

  appId: "1:964460420007:web:4e3182a29c03d0575a3482",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
