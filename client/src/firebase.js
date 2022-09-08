// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqAaXY6sh77jddB9z_sNeRu1ibPHU1XBU",
  authDomain: "bcstoken-a5adb.firebaseapp.com",
  projectId: "bcstoken-a5adb",
  storageBucket: "bcstoken-a5adb.appspot.com",
  messagingSenderId: "532067393633",
  appId: "1:532067393633:web:715745249d04bf9bb20a20",
  measurementId: "G-RWKVE358TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;