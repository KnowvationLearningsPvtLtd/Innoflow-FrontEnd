import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFhqsgkgigHijTQL7lZzJGyCGH5dmrj4Y",
  authDomain: "innoflow-faf89.firebaseapp.com",
  projectId: "innoflow-faf89",
  storageBucket: "innoflow-faf89.appspot.com",
  messagingSenderId: "694268147172",
  appId: "1:694268147172:web:0303dd33c09472e999c3f1",
  measurementId: "G-15PK9E9BM8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth }; 