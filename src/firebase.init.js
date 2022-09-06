// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY1rabndJbt-3O9aGohEjuJjszggEohCQ",
  authDomain: "ema-john-firbase.firebaseapp.com",
  projectId: "ema-john-firbase",
  storageBucket: "ema-john-firbase.appspot.com",
  messagingSenderId: "860459364659",
  appId: "1:860459364659:web:549c08faee1c92116e0e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;