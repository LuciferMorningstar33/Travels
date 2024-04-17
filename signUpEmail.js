import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import {getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

const SignUp = document.getElementById("SignUp");
SignUp.addEventListener("click",(e) =>{
    var username = document.getElementById('username').value;
    var  email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
        username : username,
        email : email
      })

      alert('User Created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
})
