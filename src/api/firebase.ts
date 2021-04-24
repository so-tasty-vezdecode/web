import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC0fMeML71Pj5GyW9ZTjNL9uJWPBLTejk8",
  authDomain: "sql-academy-285317.firebaseapp.com",
  projectId: "sql-academy-285317",
  storageBucket: "sql-academy-285317.appspot.com",
  messagingSenderId: "635181414452",
  appId: "1:635181414452:web:36fe38c206cf51ad143261",
});

export const db = getFirestore();
