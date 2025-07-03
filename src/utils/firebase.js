// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxm6YvnKPxG9aWUyZ-QQcRT7rjsbCMgA8",
  authDomain: "movies-gpt-2736b.firebaseapp.com",
  projectId: "movies-gpt-2736b",
  storageBucket: "movies-gpt-2736b.firebasestorage.app",
  messagingSenderId: "1066074920921",
  appId: "1:1066074920921:web:96d80ec942f4ff2b632bc8",
  measurementId: "G-BJZ51HTH2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);