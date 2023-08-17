// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-MU_mJSa5AhCFXI8rWEpqz7F9trimMmo",
  authDomain: "simple-firebase-90ea9.firebaseapp.com",
  projectId: "simple-firebase-90ea9",
  storageBucket: "simple-firebase-90ea9.appspot.com",
  messagingSenderId: "971993381105",
  appId: "1:971993381105:web:ee66869d40bbbc1b49d150",
  measurementId: "G-519WF5DJB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;