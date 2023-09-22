// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVhTVLJwnGRYYFlvie1dsJtCeGdiJHJYo",
  authDomain: "netflix-gpt-c8445.firebaseapp.com",
  projectId: "netflix-gpt-c8445",
  storageBucket: "netflix-gpt-c8445.appspot.com",
  messagingSenderId: "787694804338",
  appId: "1:787694804338:web:34b318eea9abbe225411eb",
  measurementId: "G-ESPGW7ZE9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();