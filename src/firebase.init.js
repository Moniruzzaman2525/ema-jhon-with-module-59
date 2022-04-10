// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACoUDbk9HMSlH1Ur0nDBLOfFkRPXwCHJM",
    authDomain: "ema-jhon-again-auth.firebaseapp.com",
    projectId: "ema-jhon-again-auth",
    storageBucket: "ema-jhon-again-auth.appspot.com",
    messagingSenderId: "597181566522",
    appId: "1:597181566522:web:2303e347569b63623b2f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;