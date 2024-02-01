// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-market-fc244.firebaseapp.com",
  projectId: "mern-market-fc244",
  storageBucket: "mern-market-fc244.appspot.com",
  messagingSenderId: "944583546766",
  appId: "1:944583546766:web:c77c77b4e8a7c543d676df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);