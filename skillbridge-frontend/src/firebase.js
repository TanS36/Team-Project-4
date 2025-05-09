// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCggb3-pqG2CkmWM8KmuVFORzxgSVOYUZU",
  authDomain: "skillbridge-5340e.firebaseapp.com",
  projectId: "skillbridge-5340e",
  storageBucket: "skillbridge-5340e.firebasestorage.app",
  messagingSenderId: "984861653657",
  appId: "1:984861653657:web:fbd4959242ea268ebb5608",
  measurementId: "G-KQN6N6MMYQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
