// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnfgf4KlTflB1QTojLa2QsfS6A50oRGY0",
  authDomain: "netflix-clone-gpt-dc7cb.firebaseapp.com",
  projectId: "netflix-clone-gpt-dc7cb",
  storageBucket: "netflix-clone-gpt-dc7cb.appspot.com",
  messagingSenderId: "1039253748983",
  appId: "1:1039253748983:web:e92ba373a117f4932367f2",
  measurementId: "G-SM5P8KCTSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
