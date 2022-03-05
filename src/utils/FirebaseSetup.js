import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7-Tq5Avwzs8Jz5QloipuG4C_onjN9MqI",
  authDomain: "orders-contrabandbykrish.firebaseapp.com",
  projectId: "orders-contrabandbykrish",
  storageBucket: "orders-contrabandbykrish.appspot.com",
  messagingSenderId: "381596193782",
  appId: "1:381596193782:web:5d4d755449dad53f442dd7",
  measurementId: "G-23XH9RQCED",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
