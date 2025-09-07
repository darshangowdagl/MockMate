// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPC4AochXPBLetVIXUvHi9RXsIl0hHfGM",
  authDomain: "mockmate-84e81.firebaseapp.com",
  projectId: "mockmate-84e81",
  storageBucket: "mockmate-84e81.firebasestorage.app",
  messagingSenderId: "966375427557",
  appId: "1:966375427557:web:649988560c86f28bc7730c",
  measurementId: "G-VY37YYWLN3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);