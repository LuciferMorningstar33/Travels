import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWMGvzB39dXMyNN2uNzIEraGUQUeintKo",
  authDomain: "auth-7112a.firebaseapp.com",
  projectId: "auth-7112a",
  storageBucket: "auth-7112a.appspot.com",
  messagingSenderId: "34499463071",
  appId: "1:34499463071:web:41bd0021e27a29239cdfaa",
  measurementId: "G-C2ZQFEC05X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = 'en';
const provider= new GoogleAuthProvider();



//Sign-up
const googleLogin=document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; //
        const user = result.user;
        console.log(user);
        window.location.href="index.html";
    }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email; //
    
        const credential = GoogleAuthProvider.credentialFromError(error); //
    });
});

//Sign-in
const googleLogin1=document.getElementById("google-login-btn-1");
googleLogin1.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; //
        const user = result.user;
        console.log(user);
        window.location.href="index.html";
    }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email; //
    
        const credential = GoogleAuthProvider.credentialFromError(error); //
    });
});