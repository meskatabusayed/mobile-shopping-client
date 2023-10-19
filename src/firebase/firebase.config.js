// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtPg-yfMNNWPKcb8RKLI33r2tutI9DmmY",
  authDomain: "meskat-assign-ten.firebaseapp.com",
  projectId: "meskat-assign-ten",
  storageBucket: "meskat-assign-ten.appspot.com",
  messagingSenderId: "450992096124",
  appId: "1:450992096124:web:56616793622a752f435af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
