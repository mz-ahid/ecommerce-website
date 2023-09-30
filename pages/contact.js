

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZBAgaXBLT88tt_ofEz5sJzO1KPhchMxc",
  authDomain: "signup-form-355cb.firebaseapp.com",
  projectId: "signup-form-355cb",
  storageBucket: "signup-form-355cb.appspot.com",
  messagingSenderId: "641704225813",
  appId: "1:641704225813:web:a87269ea33e578a31b721c",
  measurementId: "G-3VG46M1138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth=getAuth();

  var firstName=document.getElementById("firstName");
  var lastName=document.getElementById("lastName");
  var email=document.getElementById("email");
  var pass=document.getElementById("pass");

  window.signup=function(e){
    e.preventDefault();
    var obj ={
      firstName:firstName.value,
      lastName:lastName.value,
      email:email.value,  
      pass:pass.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.pass)
    .then(function(success){
      alert("Signup Successfully")
    })
    .catch(function(err){
      alert("error" + err)
    })
    console.log(obj)
  };
 

 
