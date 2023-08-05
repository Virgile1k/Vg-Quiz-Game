// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlOlZRH_mbyxAy9Sz8fAx_Bhbda0SLrhc",
  authDomain: "vplanetguese.firebaseapp.com",
  projectId: "vplanetguese",
  storageBucket: "vplanetguese.appspot.com",
  messagingSenderId: "952002606522",
  appId: "1:952002606522:web:0eeab188ff49081d439983",
  measurementId: "G-D8TLL7451P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
