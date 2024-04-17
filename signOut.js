import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWMGvzB39dXMyNN2uNzIEraGUQUeintKo",
    authDomain: "auth-7112a.firebaseapp.com",
    projectId: "auth-7112a",
    storageBucket: "auth-7112a.appspot.com",
    messagingSenderId: "34499463071",
    appId: "1:34499463071:web:41bd0021e27a29239cdfaa",
    measurementId: "G-C2ZQFEC05X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

//auth changed
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
});

const LogOut = document.getElementById("LogOut");
LogOut.addEventListener('click', (e)=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("User logged Out!")
        window.location.href="form.html";
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
});