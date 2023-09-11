// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWTY_YSbqS_HqIMPQpAV5k8AMKRTai2CM",
  authDomain: "clone-e4159.firebaseapp.com",
  projectId: "clone-e4159",
  storageBucket: "clone-e4159.appspot.com",
  messagingSenderId: "292386258542",
  appId: "1:292386258542:web:518283b32d9b596b07b07f",
  measurementId: "G-JE9KY2W82Y",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
export { auth, db };
