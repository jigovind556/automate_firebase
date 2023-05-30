// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJbE4bEU-QLPEpWYr-5WB-3Sd5ODa7aE0",
  authDomain: "auto-mate-695be.firebaseapp.com",
  projectId: "auto-mate-695be",
  storageBucket: "auto-mate-695be.appspot.com",
  messagingSenderId: "1035165250891",
  appId: "1:1035165250891:web:ae3a5fd96f5553c398e4ce",
  measurementId: "G-HQ7558M2NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("hello world");