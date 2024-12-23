
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6k5O9zVCniWPKD5LDqCw1mDM7uY_P6B0",
  authDomain: "auth-191f3.firebaseapp.com",
  projectId: "auth-191f3",
  storageBucket: "auth-191f3.firebasestorage.app",
  messagingSenderId: "182374029596",
  appId: "1:182374029596:web:9a2b0fa889ba614a7d82d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db =getFirestore(app);
export default app;