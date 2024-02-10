/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-94ea2.firebaseapp.com",
  projectId: "mern-blog-94ea2",
  storageBucket: "mern-blog-94ea2.appspot.com",
  messagingSenderId: "396067025288",
  appId: "1:396067025288:web:5c14fb4afa5c3ee38d4a3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);