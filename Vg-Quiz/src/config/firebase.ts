// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMWYXcCSwwcfgNljonPmTRXnq0R84-gkA",
  authDomain: "guese-game-3224a.firebaseapp.com",
  projectId: "guese-game-3224a",
  storageBucket: "guese-game-3224a.appspot.com",
  messagingSenderId: "74522658735",
  appId: "1:74522658735:web:5961ea290de5c3c3bfd15a",
  measurementId: "G-N1HTS5HLVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
