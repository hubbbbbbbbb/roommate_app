//firebaseSDK tutorial: https://firebase.google.com/docs/web/setup

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShsRMtOLOMGtqIWckxFH4WECLyG-mABE",
  authDomain: "roomie-3cb97.firebaseapp.com",
  projectId: "roomie-3cb97",
  storageBucket: "roomie-3cb97.appspot.com",
  messagingSenderId: "2183952970",
  appId: "1:2183952970:web:6e10a00e93d598bfb284b3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

