// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpiPkewHGjh45QQ2ukMn3FkQBrf4gB3Ig",
  authDomain: "shimagamifield.firebaseapp.com",
  projectId: "shimagamifield",
  storageBucket: "shimagamifield.firebasestorage.app",
  messagingSenderId: "660682842448",
  appId: "1:660682842448:web:5b4b691cd74c8c9f4e0c55",
  measurementId: "G-5GCEH04HQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting Firestore and Auth modules
export const db = getFirestore(app);
export const auth = getAuth(app);