// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrCUMxio6ttDBB7LmzltDbaJgaHW62mA4",
  authDomain: "family-30b6b.firebaseapp.com",
  projectId: "family-30b6b",
  storageBucket: "family-30b6b.appspot.com",
  messagingSenderId: "168143389936",
  appId: "1:168143389936:web:742cdfa6c721839609ee35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
