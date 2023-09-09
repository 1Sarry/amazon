// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWTY_YSbqS_HqIMPQpAV5k8AMKRTai2CM",
  authDomain: "clone-e4159.firebaseapp.com",
  projectId: "clone-e4159",
  storageBucket: "clone-e4159.appspot.com",
  messagingSenderId: "292386258542",
  appId: "1:292386258542:web:518283b32d9b596b07b07f",
  measurementId: "G-JE9KY2W82Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
export {  auth };
