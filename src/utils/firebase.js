// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqM2acDTIO6tYXJ1laM9tAgewXHJK7xVI",
  authDomain: "netflixgpt-1a44e.firebaseapp.com",
  projectId: "netflixgpt-1a44e",
  storageBucket: "netflixgpt-1a44e.firebasestorage.app",
  messagingSenderId: "922656664551",
  appId: "1:922656664551:web:ba362adb621794ba5b6b42",
  measurementId: "G-5H78PK733L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();