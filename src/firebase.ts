import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyDoRplaYxEphZ4eVTPEBUkm7HztScRN_bo",

  authDomain: "gyuwitter-b6c96.firebaseapp.com",

  projectId: "gyuwitter-b6c96",

  storageBucket: "gyuwitter-b6c96.appspot.com",

  messagingSenderId: "111018636589",

  appId: "1:111018636589:web:114026c3ed65bd92dc8fa4",

  measurementId: "G-JZ6P70LP44"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); //Auth
